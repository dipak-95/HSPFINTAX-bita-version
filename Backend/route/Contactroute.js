const express = require("express");
const router = express.Router();

const {
  createContact,
  getAllContacts,
  deleteContact
} = require("../controller/Contact");


// CREATE CONTACT
router.post("/", createContact);

// GET ALL CONTACT
router.get("/", getAllContacts);

// DELETE CONTACT
router.delete("/:id", deleteContact);

module.exports = router;
