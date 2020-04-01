var express = require("express");
var cors = require("cors");
var path = require("path");

var app = express();

app.use(cors());

const port = 7000 || process.env.PORT;

// const apiRoutes = require("./api/routes/texts");

// app.use("/api", TextRoutes);

app.use("/", express.static(path.join(__dirname, "public")));

app.listen(port, () =>
  console.log(`app listening on port http://localhost:${port} !`)
);
