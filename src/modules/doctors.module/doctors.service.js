const Doctor = require("../../models/doctor.model");

const getAllDoctors = async () => {
    const foundDoctors = await Doctor.findAll({
        where: {
        }
      });
    return foundDoctors.map((doctor) => doctor.toJSON());
}   

module.exports =  {
    getAllDoctors,
}