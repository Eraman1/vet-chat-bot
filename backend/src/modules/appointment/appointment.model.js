const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
    },
    ownerName: {
      type: String,
      required: true,
    },
    petName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    dateTime: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;