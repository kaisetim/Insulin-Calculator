const dotenv = require("dotenv").config(),
  express = require("express");

const app = express();

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on PORT ${process.env.PORT} ...`)
);
