const express = require("express");

const router = express.Router();
const { createAppointment } = require("./appointments.controller");

router.post("/", async (req, res) => {
  /*
        #swagger.tags = ['External Users. Balances']
        #swagger.summary = 'Get an external user Balances.'
        #swagger.description = 'Get an external user Balances.'
    */

  await createAppointment(req, res);
});

module.exports = router;
