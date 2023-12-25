const { Doctor, Appointment } = require('../../../models'); // Предполагается, что модели определены здесь

const checkSlotAvailability = async (doctorId, slotTime) => {
  const doctor = await Doctor.findByPk(doctorId);
  if (!doctor) {
    throw new Error('Doctor not found');
  }

  // Проверяем, входит ли слот в список доступных слотов доктора
  if (!doctor.slots.includes(slotTime)) {
    return false;
  }

  // Проверяем, что слот ещё не занят
  const appointmentCount = await Appointment.count({
    where: {
      doctor_id: doctorId,
      slot: slotTime,
      // Можно также проверить status, если это поле есть в вашей модели
    }
  });

  // Слот доступен, если нет записей на этот слот
  return appointmentCount === 0;
};

const createAppointment = async (params) => {
  const { user_id, doctor_id, slot } = params;

  // Проверка доступности слота
  const isAvailable = await checkSlotAvailability(doctor_id, slot);
  if (!isAvailable) {
    throw new Error('Slot is not available');
  }

  // Создание записи на прием
  const appointment = await Appointment.create({
    user_id,
    doctor_id,
    slot,
    status: 'scheduled', // Предполагается, что статус "запланировано" задается при создании записи
  });

  return appointment;
};

const appointmentsService = {
    checkSlotAvailability,
    createAppointment,
};

module.exports = appointmentsService;
