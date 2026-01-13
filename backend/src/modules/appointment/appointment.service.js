const Appointment = require("./appointment.model");

exports.createAppointment = async (data) => {
  return Appointment.create(data);
};
