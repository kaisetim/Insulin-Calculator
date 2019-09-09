const dotenv = require("dotenv").config(),
  express = require("express");

const app = express();

app.get("*", (req, res) => {
  const pathToJS = "./app.js";
  res.set("Content-Type", "text/html");
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <script src="${pathToJS}"></script>
      <title>Homepage</title>
    </head>
    <body>
      <div id="container"></div>
    </body>
  </html>
  `);
});

app.get("*", (req, res) => {
  res.send("URL not found ...");
});

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on PORT ${process.env.PORT} ...`)
);
