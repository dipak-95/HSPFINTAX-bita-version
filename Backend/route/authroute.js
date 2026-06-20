const router = require("express").Router();
const auth = require("../Middleware/auth");
const ctrl = require("../controller/authctl");

router.post("/login", ctrl.login);
router.post("/create-user", auth.protect(["admin"]), ctrl.createUser);
router.post("/change-password", auth.protect(), ctrl.changePassword);
router.post("/create-admin", ctrl.createAdmin);
router.get("/employees", auth.protect(["admin"]), ctrl.getEmployees);
router.get("/clients", auth.protect(["admin"]), ctrl.getClients);
router.get("/employee-work", auth.protect(["admin"]), ctrl.getEmployeeWork);

module.exports = router;
