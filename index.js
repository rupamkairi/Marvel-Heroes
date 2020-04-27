const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const port = process.env.PORT || 7000;

const characterRoute = require("./src/server/routes/character");
app.use("/api", characterRoute);

// going a folder up to locate the client folder for serve
app.use("/", express.static(path.join(__dirname, "./src/public/")));

app.listen(port, () =>
  console.log(`app is listening at http://localhost:${port}`)
);
