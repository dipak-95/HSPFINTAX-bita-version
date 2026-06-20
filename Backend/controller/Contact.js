const Contact = require("../model/Contact");

/* ================================
   CREATE CONTACT
================================ */
exports.createContact = async (req, res) => {
  try {
    const { name, email, mobile, service, message } = req.body;

    if (!name || !email || !mobile || !message) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled"
      });
    }

    const contact = await Contact.create({
      name,
      email,
      mobile,
      service,
      message
    });

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      data: contact
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};


/* ================================
   GET ALL CONTACTS
================================ */
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      total: contacts.length,
      data: contacts
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};


/* ================================
   DELETE CONTACT
================================ */
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    await Contact.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};
