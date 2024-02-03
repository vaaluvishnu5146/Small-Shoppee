const express = require("express");
const body_parser = require("body-parser");
// ENABLING CORS
const cors = require("cors");
const { initiateDBConnection } = require("./DBCongif");
const HTTP_SERVER = express();
const PORT = 5000;
const HOST_NAME = "0.0.0.0";

// INJECTING CORS MIDDLEWARE INTO EXPRESS
HTTP_SERVER.use(cors());

// CONFIGURE BODYPARSER
HTTP_SERVER.use(body_parser.json());

HTTP_SERVER.use("/", require("./app"));

HTTP_SERVER.listen(PORT, HOST_NAME, () => {
  console.log(`Server started in the ${PORT}`);
  // INITIATE DB CONNECTION
  initiateDBConnection();
});

// HTTP_SERVER.all("/", (req, res) => {
//   res.send("Hello guys hpw are you all?");
// });
