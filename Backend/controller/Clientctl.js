const bcrypt = require("bcrypt");
const User = require("../model/User");
const Client = require("../model/Client");
const ClientRequest = require("../model/ClientRequest");
const WORKFLOW = require("../utils/WorkFlowTemplate");
const START_MAP = require("../utils/WorkflowStartMap");

/* =====================================================
   CREATE CLIENT (ADMIN / EMPLOYEE)
===================================================== */
exports.createClient = async (req, res) => {
  try {
    const { name, email, phone, startFrom } = req.body;

    if (!name || !email || !startFrom) {
      return res.status(400).json({ msg: "Missing required fields" });
    }

    const normalizedEmail = email.toLowerCase().trim();

    let user = await User.findOne({ email: normalizedEmail });
    let tempPassword = null;

    if (!user) {
      tempPassword = "HPS@" + Math.floor(100000 + Math.random() * 900000);
      user = await User.create({
        name,
        email: normalizedEmail,
        password: await bcrypt.hash(tempPassword, 12),
        role: "client",
        mustChangePassword: true,
        isActive: true
      });
    }

    if (await Client.findOne({ userId: user._id })) {
      return res.status(400).json({ msg: "Client already exists" });
    }

    const startKey = START_MAP[startFrom];
    const startIndex = WORKFLOW.findIndex(w => w.key === startKey);

    const workflow = WORKFLOW.slice(startIndex).map(step => ({
      key: step.key,
      title: step.title,
      status: "pending",
      assignedEmployee: null,
      isVisibleToClient: true,
      subSteps: step.subSteps.map(s => ({
        title: s,
        status: "pending",
        updatedBy: null
      }))
    }));

    const client = await Client.create({
      userId: user._id,
      name,
      email: normalizedEmail,
      phone,
      services: [{
        serviceKey: startFrom,
        serviceName: startFrom.toUpperCase(),
        workflow,
        status: "active",
        startedAt: new Date()
      }],
      overallStatus: "in_progress"
    });

    res.status(201).json({
      msg: "Client created successfully",
      ...(tempPassword && { tempPassword }),
      clientId: client._id
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

/* =====================================================
   ADD SERVICE TO CLIENT
===================================================== */
exports.addServiceToClient = async (req, res) => {
  try {
    const { clientId } = req.params;
    const { serviceKey } = req.body;

    if (!serviceKey) {
      return res.status(400).json({ msg: "Service key required" });
    }

    const client = await Client.findById(clientId);
    if (!client) return res.status(404).json({ msg: "Client not found" });

    const alreadyActive = client.services.some(
      s => s.serviceKey === serviceKey && s.status === "active"
    );

    if (alreadyActive) {
      return res.status(400).json({ msg: "Service already active" });
    }

    const startKey = START_MAP[serviceKey];
    const startIndex = WORKFLOW.findIndex(w => w.key === startKey);
    if (startIndex === -1) {
      return res.status(400).json({ msg: "Invalid service" });
    }

    const workflow = WORKFLOW.slice(startIndex).map(step => ({
      key: step.key,
      title: step.title,
      status: "pending",
      assignedEmployee:
        req.user.role === "employee" ? req.user.id : null,
      isVisibleToClient: true,
      subSteps: step.subSteps.map(s => ({
        title: s,
        status: "pending"
      }))
    }));

    client.services.push({
      serviceKey,
      serviceName: serviceKey.toUpperCase(),
      workflow,
      status: "active",
      startedAt: new Date()
    });

    client.overallStatus = "in_progress";
    await client.save();

    res.json({ msg: "Service added successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};


/* =====================================================
   UPDATE SERVICE WORK (EMPLOYEE)
===================================================== */
exports.updateServiceWork = async (req, res) => {
  try {
    const { clientId, serviceKey, stepKey, subIndex, status, remarks } = req.body;

    const client = await Client.findById(clientId);
    if (!client) return res.status(404).json({ msg: "Client not found" });

    const service = client.services.find(
      s => s.serviceKey === serviceKey && s.status === "active"
    );
    if (!service) return res.status(404).json({ msg: "Active service not found" });

    const step = service.workflow.find(w => w.key === stepKey);
    if (!step) return res.status(404).json({ msg: "Step not found" });

    const subStep = step.subSteps[subIndex];
    if (!subStep) return res.status(404).json({ msg: "Sub step not found" });

    subStep.status = status;
    subStep.remarks = remarks || "";
    subStep.updatedBy = req.user.id;

    if (step.subSteps.every(s => s.status === "completed")) {
      step.status = "completed";
    } else if (step.subSteps.some(s => s.status !== "pending")) {
      step.status = "in_progress";
    }

    await client.save();
    res.json({ msg: "Work updated successfully" });

  } catch (err) {
    console.error("UPDATE WORK ERROR:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

/* =====================================================
   COMPLETE SERVICE
===================================================== */
exports.completeService = async (req, res) => {
  try {
    const { clientId, serviceKey } = req.body;

    const client = await Client.findById(clientId);
    if (!client) return res.status(404).json({ msg: "Client not found" });

    const service = client.services.find(s => s.serviceKey === serviceKey);
    if (!service) return res.status(404).json({ msg: "Service not found" });

    service.status = "completed";
    service.completedAt = new Date();

    client.overallStatus = client.services.some(s => s.status === "active")
      ? "in_progress"
      : "completed";

    await client.save();
    res.json({ msg: "Service completed successfully" });

  } catch (err) {
    console.error("COMPLETE SERVICE ERROR:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

/* =====================================================
   CLIENT PANEL DATA
===================================================== */
exports.getClientPanelData = async (req, res) => {
  const client = await Client.findOne({ userId: req.user.id });
  if (!client) return res.status(404).json({ msg: "Client not found" });

  res.json({
    name: client.name,
    email: client.email,
    services: client.services.map(s => ({
      serviceKey: s.serviceKey,
      serviceName: s.serviceName,
      status: s.status,
      workflow: s.workflow.filter(w => w.isVisibleToClient)
    }))
  });
};

/* =====================================================
   ADMIN – GET ALL CLIENTS
===================================================== */
exports.getAllClients = async (req, res) => {
  const clients = await Client.find()
    .populate("userId", "name email")
    .sort({ createdAt: -1 });

  res.json(clients);
};

/* =====================================================
   GET CLIENT BY ID (ADMIN / EMPLOYEE)
===================================================== */
exports.getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.clientId);

    if (!client) {
      return res.status(404).json({ msg: "Client not found" });
    }

    // ✅ ADMIN can see all
    if (req.user.role === "admin") {
      return res.json(client);
    }

    // ✅ EMPLOYEE can see client (no restriction for now)
    if (req.user.role === "employee") {
      return res.json(client);
    }

    return res.status(403).json({ msg: "Access denied" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};


/* =====================================================
   DELETE CLIENT (ADMIN)
===================================================== */
exports.deleteClient = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ msg: "Access denied" });
  }

  const client = await Client.findById(req.params.id);
  if (!client) return res.status(404).json({ msg: "Client not found" });

  if (client.userId) {
    await User.findByIdAndDelete(client.userId);
  }

  await Client.findByIdAndDelete(client._id);
  res.json({ msg: "Client deleted successfully" });
};
// EMPLOYEE – GET ASSIGNED CLIENT BY ID
exports.getEmployeeClientById = async (req, res) => {
  try {
    const client = await Client.findOne({
      _id: req.params.id,
      "services.workflow.assignedEmployee": req.user.id
    });

    if (!client) {
      return res.status(403).json({
        msg: "You are not assigned to this client"
      });
    }

    res.json(client);
  } catch (err) {
    console.error("EMPLOYEE CLIENT ACCESS ERROR:", err);
    res.status(500).json({ msg: "Server error" });
  }
};
exports.updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, startFrom } = req.body;

    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).json({ msg: "Client not found" });
    }

    // BASIC INFO
    client.name = name ?? client.name;
    client.email = email ?? client.email;
    client.phone = phone ?? client.phone;

    // 🔥 SERVICE CHANGE LOGIC
    if (startFrom) {
      const startKey = START_MAP[startFrom];
      const startIndex = WORKFLOW.findIndex(w => w.key === startKey);

      if (startIndex === -1) {
        return res.status(400).json({ msg: "Invalid service" });
      }

      // 🚨 RESET WORKFLOW COMPLETELY
      client.workflow = WORKFLOW.slice(startIndex).map(step => ({
        key: step.key,
        title: step.title,
        status: "pending",
        isVisibleToClient: true,
        subSteps: step.subSteps.map(s => ({
          title: s,
          status: "pending"
        }))
      }));

      client.overallStatus = "pending";
    }

    // 🔧 LEGACY FIX
    if (client.overallStatus === "active") {
      client.overallStatus = "pending";
    }

    await client.save();

    res.json({ msg: "Client updated successfully" });
  } catch (err) {
    console.error("UPDATE CLIENT ERROR:", err);
    res.status(500).json({ msg: "Server error" });
  }
}
/* =====================================================
   ADMIN – GET CLIENT REQUESTS
===================================================== */
exports.getClientRequests = async (req, res) => {
  const requests = await ClientRequest.find({ status: "pending" })
    .populate("createdBy", "name email");

  res.json(requests);
};

/* =====================================================
   ADMIN – REJECT CLIENT REQUEST
===================================================== */
exports.rejectClient = async (req, res) => {
  const request = await ClientRequest.findById(req.params.id);
  if (!request) return res.status(404).json({ msg: "Request not found" });

  request.status = "rejected";
  await request.save();

  res.json({ msg: "Client request rejected" });
};
/* =====================================================
   ADMIN – APPROVE CLIENT REQUEST
===================================================== */
exports.approveClient = async (req, res) => {
  try {
    const request = await ClientRequest.findById(req.params.id);
    if (!request) return res.status(404).json({ msg: "Request not found" });

    const tempPassword =
      "HPS@" + Math.floor(100000 + Math.random() * 900000);

    const user = await User.create({
      name: request.name,
      email: request.email.toLowerCase(),
      password: await bcrypt.hash(tempPassword, 12),
      role: "client",
      mustChangePassword: true,
      isActive: true
    });

    const startKey = START_MAP[request.startFrom];
    const startIndex = WORKFLOW.findIndex(w => w.key === startKey);

    const workflow = WORKFLOW.slice(startIndex).map(step => ({
      key: step.key,
      title: step.title,
      status: "pending",
      assignedEmployee: request.createdBy,
      isVisibleToClient: true,
      subSteps: step.subSteps.map(s => ({
        title: s,
        status: "pending",
        updatedBy: null
      }))
    }));

    await Client.create({
      userId: user._id,
      name: request.name,
      email: request.email.toLowerCase(),
      phone: request.phone,
      services: [{
        serviceKey: request.startFrom,
        serviceName: request.startFrom.toUpperCase(),
        workflow,
        status: "active",
        startedAt: new Date()
      }],
      overallStatus: "in_progress"
    });

    request.status = "approved";
    await request.save();

    res.json({
      msg: "Client approved and created",
      tempPassword
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
exports.createClientRequest = async (req, res) => {
  try {
    const { name, email, phone, startFrom } = req.body;

    // 🔒 BASIC VALIDATION
    if (!name || !email || !startFrom) {
      return res.status(400).json({
        msg: "Name, Email and Service are required"
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // 🚫 IF USER ALREADY EXISTS → BLOCK REQUEST
    const existingUser = await User.findOne({
      email: normalizedEmail
    });

    if (existingUser) {
      return res.status(400).json({
        msg: "User with this email already exists"
      });
    }

    // 🚫 IF REQUEST ALREADY PENDING → BLOCK
    const existingRequest = await ClientRequest.findOne({
      email: normalizedEmail,
      status: "pending"
    });

    if (existingRequest) {
      return res.status(400).json({
        msg: "Client request already pending approval"
      });
    }

    // ✅ CREATE REQUEST
    await ClientRequest.create({
      name,
      email: normalizedEmail,
      phone,
      startFrom,              // service selected
      createdBy: req.user.id, // employee id
      status: "pending"
    });

    res.status(201).json({
      msg: "Client request sent to admin successfully"
    });

  } catch (err) {
    console.error("CREATE CLIENT REQUEST ERROR:", err);
    res.status(500).json({ msg: "Server error" });
  }
};
