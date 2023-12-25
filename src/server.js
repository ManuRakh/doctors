const express = require("express");
const app = express();
const port = 3000;
const appointments = require("./modules/appointments.module/routes");
const doctors = require("./modules/doctors.module/routes");
const users = require("./modules/users.module/routes");

app.use(express.json({ limit: "200kb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/appointments", appointments);
app.use("/doctors", doctors);
app.use("/users", users);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
