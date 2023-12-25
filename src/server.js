const express = require('express');
const app = express();
const port = 3000;
const appointments = require("./modules/appointments.module/routes");

app.use(express.json({ limit: "200kb" }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/appointments', appointments);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
