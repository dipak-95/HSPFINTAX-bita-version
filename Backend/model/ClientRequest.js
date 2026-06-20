const mongoose = require("mongoose");

const clientRequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,

  startFrom: {
    type: String,
    required: true
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  }

}, { timestamps: true });

module.exports = mongoose.model(
  "ClientRequest",
  clientRequestSchema
);
