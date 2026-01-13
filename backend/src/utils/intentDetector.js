export const isAppointmentIntent = (message) => {
  const keywords = ["book", "appointment", "schedule", "vet visit"];
  return keywords.some((k) => message.toLowerCase().includes(k));
};
