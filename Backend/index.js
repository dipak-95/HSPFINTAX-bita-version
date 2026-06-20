require("dotenv").config(); // load env variables

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ================= DB CONNECTION ================= */
connectDB();



/* ================= ROUTES ================= */
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully");
});

app.use("/auth", require("./route/authroute"));
app.use("/client", require("./route/Clientroute"));
app.use("/dashboard", require("./route/Dashboardroute"));
app.use("/contact", require("./route/Contactroute"));


/* ================= SERVER ================= */
const PORT = process.env.PORT || 1005;

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
