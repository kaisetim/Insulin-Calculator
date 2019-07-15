const dotenv = require("dotenv").config(),
  express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Homepage</title>
    </head>
    <body>
        <h1>Title</h1>

        <form>
            <label>
                Morning: 
                <input type="text" name="morning">
            </label>
            <label>
                Midday: 
                <input type="text" name="midday">
            </label>
            <label> 
                Evening: 
                <input type="text" name="evening">
            </label>
            <button type="submit">Submit</button>
        </form>
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
