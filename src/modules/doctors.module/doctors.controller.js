const Doctor = require("../../models/doctor.model"); // Предполагается, что модели определены здесь
const doctorsService = require("./doctors.service");

const getAllDoctors = async (req,res) => {
    try {
        const allDoctors = await doctorsService.getAllDoctors();
    
        res.jsonp({
          error: "",
          data: { allDoctors },
        });
      } catch (e) {
        res.status(400).send({ error: e.message, data: {} });
      }
}

module.exports = {
    getAllDoctors,
}