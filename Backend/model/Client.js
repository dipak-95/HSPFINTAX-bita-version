// const mongoose = require("mongoose");

// /* SUB STEP */
// const subStepSchema = new mongoose.Schema({
//   key: String,
//   title: String,

//   status: {
//     type: String,
//     enum: ["pending", "in_progress", "completed"],
//     default: "pending"
//   },

//   remarks: String,

//   updatedBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User"
//   }
// }, { timestamps: true });

// /* MAIN STEP */
// const mainStepSchema = new mongoose.Schema({
//   key: String,
//   title: String,

//   status: {
//     type: String,
//     enum: ["pending", "in_progress", "completed"],
//     default: "pending"
//   },

//   assignedEmployee: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User"
//   },

//   remarks: String,

//   isVisibleToClient: {
//     type: Boolean,
//     default: true
//   },

//   subSteps: [subStepSchema]
// }, { timestamps: true });

// /* CLIENT */
// const clientSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true
//   },

//   name: String,
//   email: String,
//   phone: String,

//   workflow: [mainStepSchema],

//   overallStatus: {
//     type: String,
//     enum: ["pending", "in_progress", "completed"],
//     default: "pending"
//   }

// }, { timestamps: true });

// module.exports = mongoose.model("Client", clientSchema);
const mongoose = require("mongoose");

/* ================= SUB STEP ================= */
const subStepSchema = new mongoose.Schema({
  key: String,
  title: String,

  status: {
    type: String,
    enum: ["pending", "in_progress", "completed"],
    default: "pending"
  },

  remarks: String,

  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });

/* ================= MAIN STEP ================= */
const mainStepSchema = new mongoose.Schema({
  key: String,
  title: String,

  status: {
    type: String,
    enum: ["pending", "in_progress", "completed"],
    default: "pending"
  },

  assignedEmployee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  remarks: String,

  isVisibleToClient: {
    type: Boolean,
    default: true
  },

  subSteps: [subStepSchema]
}, { timestamps: true });

/* ================= SERVICE ================= */
const serviceSchema = new mongoose.Schema({
  serviceKey: {
    type: String, // loan, subsidy, audit
    required: true
  },

  serviceName: {
    type: String, // Loan Processing, GST Audit
    required: true
  },

  status: {
    type: String,
    enum: ["active", "completed"],
    default: "active"
  },

  startedAt: {
    type: Date,
    default: Date.now
  },

  completedAt: Date,

  workflow: [mainStepSchema]
}, { timestamps: true });

/* ================= CLIENT ================= */
const clientSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  name: String,
  email: String,
  phone: String,

  services: [serviceSchema],   // 🔥 IMPORTANT CHANGE

  overallStatus: {
    type: String,
    enum: ["pending", "in_progress", "completed"],
    default: "pending"
  }

}, { timestamps: true });

module.exports = mongoose.model("Client", clientSchema);
