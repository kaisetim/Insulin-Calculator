const dotenv = require("dotenv").config(),
  path = require("path"),
  config = require("config"),
  express = require("express");

const manifest = require("../../../.dist/manifest.json");

const app = express();
const port = config.get("PORT");

const isProduction = "production";

if (isProduction) {
  app.use(express.static(path.resolve(__dirname, "../../../.dist")));
}

app.get("*", (req, res) => {
  const pathToJS = manifest["front.js"];
  res.set("Content-Type", "text/html");
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <script src="${pathToJS}"></script>
      <title>Insulin Calculator</title>
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

app.listen(port, () => console.log(`Server is listening on PORT ${port} ...`));
