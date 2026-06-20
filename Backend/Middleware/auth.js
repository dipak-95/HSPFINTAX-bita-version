const jwt = require("jsonwebtoken");
const User = require("../model/User");

exports.protect = (roles = []) => {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ msg: "No token provided" });
      }

      const token = authHeader.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // decoded = { id, role, iat, exp }

      const user = await User.findById(decoded.id);

      if (!user) {
        return res.status(401).json({ msg: "User not found" });
      }

      if (!user.isActive) {
        return res.status(401).json({ msg: "User is inactive" });
      }

      if (roles.length && !roles.includes(user.role)) {
          console.log("AUTH USER ROLE:", user.role);
  console.log("REQUIRED ROLES:", roles);
        return res.status(403).json({ msg: "Access denied" });
      }

      req.user = user; // 🔥 REAL USER OBJECT
      next();

    } catch (err) {
      console.error("AUTH ERROR:", err.message);
      return res.status(401).json({ msg: "Invalid token" });
    }
  };
};
