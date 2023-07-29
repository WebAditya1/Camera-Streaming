const express = require("express");
const app = express();
const path = require("path");
require("./db/conn");
var cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8000;

const pathToBuild = "./../frontend/build/";

var history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname, pathToBuild)));

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get(/^(?!\/api\/)/, (_, res) => {
  res.sendFile(path.join(__dirname, pathToBuild, "index.html"));
});

app.use("/api/user", require("./Auth/loginRoute"));
app.use("/api/camera", require("./Auth/cameraRoute"));

app.listen(port, () => {
  console.log(`listening the port successfully on port: ${port}`);
});
