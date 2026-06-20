const router = require("express").Router();
const ctrl = require("../controller/Clientctl");
const { protect } = require("../Middleware/auth");

/* =====================================================
   CLIENT PANEL
===================================================== */
router.get(
  "/client-panel",
  protect(["client"]),
  ctrl.getClientPanelData
);

/* =====================================================
   CREATE CLIENT (ADMIN / EMPLOYEE)
===================================================== */
router.post(
  "/create",
  protect(["admin"]),
  ctrl.createClient
);

/* =====================================================
   ADD NEW SERVICE TO EXISTING CLIENT
===================================================== */
router.post(
  "/:clientId/add-service",
  protect(["admin", "employee"]),
  ctrl.addServiceToClient
);

/* =====================================================
   COMPLETE SERVICE
===================================================== */
router.post(
  "/complete-service",
  protect(["admin", "employee"]),
  ctrl.completeService
);

/* =====================================================
   UPDATE SERVICE WORK (EMPLOYEE)
===================================================== */
router.patch(
  "/update-service-work",
  protect(["employee"]),
  ctrl.updateServiceWork
);

/* =====================================================
   ADMIN ROUTES
===================================================== */
router.get(
  "/admin/clients",
  protect(["admin"]),
  ctrl.getAllClients
);

router.get(
  "/admin/client/:clientId",
  protect(["admin", "employee"]),
  ctrl.getClientById
);

router.patch(
  "/admin/client/:id",
  protect(["admin"]),
  ctrl.updateClient
);


router.delete(
  "/admin/client/:id",
  protect(["admin"]),
  ctrl.deleteClient
);

/* =====================================================
   EMPLOYEE ROUTES
===================================================== */
router.get(
  "/employee/clients",
  protect(["employee"]),
  ctrl.getAllClients
);
router.get(
  "/employee/client/:clientId",
  protect(["admin", "employee"]),
  ctrl.getClientById
);
router.get(
  "/employee/client/:id",
  protect(["employee"]),
  ctrl.getEmployeeClientById
);
/* EMPLOYEE – CREATE REQUEST */
router.post(
  "/employee/client-request",
  protect(["employee"]),
  ctrl.createClientRequest
);

/* ADMIN – REQUESTS */
router.get(
  "/admin/client-requests",
  protect(["admin"]),
  ctrl.getClientRequests
);

router.post(
  "/admin/client-requests/:id/approve",
  protect(["admin"]),
  ctrl.approveClient
);

router.patch(
  "/admin/client-requests/:id/reject",
  protect(["admin"]),
  ctrl.rejectClient
);

module.exports = router;
