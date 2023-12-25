const express = require("express");

const router = express.Router();
const { getAllDoctors } = require("./doctors.controller");

router.get("/", async (req, res) => {
  /*
        #swagger.tags = ['External Users. Balances']
        #swagger.summary = 'Get an external user Balances.'
        #swagger.description = 'Get an external user Balances.'
    */

  await getAllDoctors(req, res);
});

module.exports = router;
