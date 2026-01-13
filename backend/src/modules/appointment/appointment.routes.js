const express = require("express");
const router = express.Router();
const { bookAppointment } = require("./appointment.controller");

router.post("/", bookAppointment);

module.exports = router;
