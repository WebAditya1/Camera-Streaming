const mongoose = require("mongoose");

const cameraSchema = mongoose.Schema({
  cameraName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: true
  },

  timestamp: {
    type: Date,
    default: (new Date()).getTime()
  },

});

//collection
const CameraView = mongoose.model("CameraView", cameraSchema);
module.exports = CameraView;