const { Op } = require("sequelize");

const Doctor = require("../../models/doctor.model"); // Предполагается, что модели определены здесь
const Appointment = require("../../models/appointment.model");

const checkSlotAvailability = async (doctorId, slotTime) => {
  const doctor = (
    await Doctor.findOne({
      where: {
        id: {
          [Op.eq]: doctorId,
        },
      },
    })
  ).get();

  if (!doctor) {
    throw new Error("Doctor not found");
  }

  if (!doctor.slots.includes(slotTime)) {
    throw new Error(
      `Slot is not available, available slots are ${doctor.slots}`,
    );
  }

  const appointmentCount = await Appointment.count({
    where: {
      doctor_id: {
        [Op.eq]: doctor.id,
      },
      slot: {
        [Op.eq]: slotTime,
      },
    },
  });

  return appointmentCount === 0;
};

const createAppointment = async (params) => {
  const { user_id, doctor_id, slot } = params;

  const appointment = await Appointment.create({
    user_id,
    doctor_id,
    slot,
    status: "scheduled",
  });

  return appointment;
};

const appointmentsService = {
  checkSlotAvailability,
  createAppointment,
};

module.exports = appointmentsService;
