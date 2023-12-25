const appointmentsService = require("./appointments.service");

const createAppointment = async (req, res) => {
  try {
    const { body } = req;
    const { user_id: userId, doctor_id: doctorId, slot } = body;
    const isSlotAvailable = await appointmentsService.checkSlotAvailability(
      doctorId,
      slot,
    );

    if (!isSlotAvailable) {
      throw new Error("Slot is not available");
    }

    const appointment = await appointmentsService.createAppointment(body);

    res.jsonp({
      error: "",
      data: { appointment },
    });
  } catch (e) {
    res.status(400).send({ error: e.message, data: {} });
  }
};

module.exports = {
  createAppointment,
};
