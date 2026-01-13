const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { connectDB } = require("./src/config/db");
require("dotenv").config();

const chatRoutes = require("./src/modules/chat/chat.routes");
const appointmentRoutes = require("./src/modules/appointment/appointment.routes");


const app = express();

app.use(cors());
app.use(express.json());

connectDB();
console.log("Gemini Key:", process.env.GEMINI_API_KEY?.slice(0, 6));

app.use("/api/chat", chatRoutes);
app.use("/api/appointments", appointmentRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
