const { createAppointment } = require("./appointment.service");

exports.bookAppointment = async (req, res) => {
  try {
    const { sessionId, ownerName, petName, phone, dateTime } = req.body;

    if (!ownerName || !petName || !phone || !dateTime) {
      return res.status(400).json({
        message: "All appointment fields are required",
      });
    }

    const appointment = await createAppointment({
      sessionId,
      ownerName,
      petName,
      phone,
      dateTime,
    });

    res.status(201).json({
      message: "Appointment booked successfully",
      data:appointment,
    });
  } catch (error) {
    console.error("Appointment error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
