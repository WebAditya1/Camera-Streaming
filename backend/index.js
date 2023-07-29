const express = require("express");
const app = express();
require("./db/conn");
var cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8000;

const path = "./../frontend/build/";

var history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path));

app.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/user", require("./Auth/loginRoute"));
app.use("/camera", require("./Auth/cameraRoute"));

app.listen(port, () => {
  console.log(`listening the port successfully on port: ${port}`);
});
