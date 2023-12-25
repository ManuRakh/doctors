const appointmentsService = require("./appointments.service");

const createAppointment = async (req, res) => {
  try {
    const { userId, doctorId, slot } = req.body;

    const isSlotAvailable = await appointmentsService.checkSlotAvailability(doctorId, slot);
  
    if (!isSlotAvailable) {
      throw new Error('Slot is not available');
    }
  
    const appointment = await appointmentsService.createAppointment(userId, doctorId, slot);
  

    res.jsonp({
      error: "",
      data: { success: true },
    });
  } catch (e) {
    res.status(400).send({ error: e.message, data: {}})
  }
};


module.exports = {
    createAppointment
}
