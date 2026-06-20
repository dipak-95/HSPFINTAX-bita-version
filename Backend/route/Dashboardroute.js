const router = require("express").Router();
const ctrl = require("../controller/Dashboardctl");
const { protect } = require("../Middleware/auth");


router.get(
  "/stats",
  protect(["admin"]),
  ctrl.getAdminDashboardStats
);


router.get("/employee", protect(["employee"]), ctrl.getEmployeeDashboardStats);

router.get("/client",protect(["client"]), ctrl.getClientDashboard);
module.exports = router;
