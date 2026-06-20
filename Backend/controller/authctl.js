const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Client = require("../model/Client");

/* ================= LOGIN ================= */
exports.login = async (req, res) => {
  try {
    const email = req.body.email?.trim().toLowerCase();
    const password = req.body.password;

    console.log("LOGIN EMAIL:", email);

    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password required" });
    }

    const user = await User.findOne({ email });
    console.log("USER FOUND:", !!user);

    if (!user || !user.isActive) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "10h" }
    );

    res.json({
      token,
      role: user.role,              // ✅ REQUIRED
      email: user.email,
      name: user.name,
      mustChangePassword: user.mustChangePassword
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

/* ================= CREATE ADMIN (ONE TIME) ================= */
exports.createAdmin = async (req, res) => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      return res.status(400).json({
        msg: "Admin credentials not set in environment"
      });
    }

    const exists = await User.findOne({ role: "admin" });
    if (exists) {
      return res.status(400).json({ msg: "Admin already exists" });
    }

    const hash = await bcrypt.hash(adminPassword, 12);

    await User.create({
      name: "Hardik",
      email: adminEmail.toLowerCase(),
      password: hash,
      role: "admin",
      isActive: true,
      mustChangePassword: true // 🔥 IMPORTANT
    });

    res.json({
      msg: "Admin created successfully. Please login and change password."
    });

  } catch (err) {
    console.error("CREATE ADMIN ERROR:", err);
    res.status(500).json({ msg: "Server error" });
  }
};


/* ================= CREATE EMPLOYEE / CLIENT ================= */
exports.createUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;

    // Only admin can create employee
    if (role !== "employee" && role !== "client") {
      return res.status(400).json({ msg: "Invalid role" });
    }

    // prevent duplicate email
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // generate temporary password
   const tempPassword =
        "HPS@" + Math.floor(100000 + Math.random() * 900000);
    const hash = await bcrypt.hash(tempPassword, 12);

    await User.create({
      name,
      email: email.toLowerCase(),
      password: hash,
      role,
      isActive: true,
      mustChangePassword: true
    });

    res.json({
      msg: `${role} created successfully`,
      tempPassword // ⚠️ show once (later send via email)
    });

  } catch (err) {
    console.error("CREATE USER ERROR:", err);
    res.status(500).json({ msg: "Server error" });
  }
};


/* ================= CHANGE PASSWORD ================= */
exports.changePassword = async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 12);

  await User.findByIdAndUpdate(req.user.id, {
    password: hash,
    mustChangePassword: false
  });

  res.json({ msg: "Password updated" });
};
/* GET ALL EMPLOYEES */
exports.getEmployees = async (req, res) => {
  const employees = await User.find({ role: "employee" }).select("-password");
  res.json(employees);
};

/* GET ALL CLIENTS */
exports.getClients = async (req, res) => {
  const clients = await User.find({ role: "client" }).select("-password");
  res.json(clients);
};
exports.getEmployeeWork = async (req, res) => {
  try {
    const clients = await Client.find(
      {
        "services.workflow.subSteps.updatedBy": { $exists: true }
      },
      {
        name: 1,
        services: 1
      }
    )
      .populate(
        "services.workflow.subSteps.updatedBy",
        "name email role"
      )
      .sort({ updatedAt: -1 });

    const employeeWork = [];

    clients.forEach(client => {
      client.services.forEach(service => {
        service.workflow.forEach(step => {
          step.subSteps.forEach(sub => {
            if (sub.updatedBy) {
              employeeWork.push({
                clientName: client.name,
                serviceName: service.serviceName,
                stepTitle: step.title,
                subStepTitle: sub.title,
                status: sub.status,
                updatedAt: sub.updatedAt,
                employee: sub.updatedBy
              });
            }
          });
        });
      });
    });

    res.json(employeeWork);
  } catch (err) {
    console.error("EMPLOYEE WORK ERROR:", err);
    res.status(500).json({
      msg: "Failed to fetch employee work"
    });
  }
};
