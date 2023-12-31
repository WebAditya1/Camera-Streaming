const express = require("express");
const app = express();
const path = require("path");
require("./db/conn");
var cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8000;

// Middlewares
app.use(
  cors({ allow: "http://ec2-16-16-245-42.eu-north-1.compute.amazonaws.com" })
);
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/user", require("./Auth/loginRoute"));
app.use("/api/camera", require("./Auth/cameraRoute"));

app.listen(port, () => {
  console.log(`listening the port successfully on port: ${port}`);
});
