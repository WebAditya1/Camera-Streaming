const Camera = require("./cameraModel");
const asyncHandler = require("express-async-handler");

const addCamera = asyncHandler(async (req, res) => {
  const { cameraName, description, link } = req.body;
  const cameraExists = await Camera.findOne({ cameraName });
  if (cameraExists) {
    res.status(409);
    res.json({
      errorMessage: "Camera already exists",
    });
  }
  const cam = await Camera.create({
    cameraName,
    description,
    link,
  });

  if (cam) {
    res.status(201).json({
      cam: cam,
      Message: "Added successfully",
    });
  } else {
    res.status(400);
    throw new Error("cam not found");
  }
});

const getAll = async (req, res) => {
  try {
    console.log("lsiting all cameras");
    const allcam = await Camera.find();
    return res.status(200).json({
      message: "ok",
      cameraList: allcam,
    });
  } catch (err) {
    return res.status(412).json({
      message: err,
    });
  }
};

const cameraModification = async (req, res) => {
  try {
    const modifiedData = {
      cameraName: req.body.cameraName,
      description: req.body.description,
      link: req.body.link,
      updatedAt: new Date().getTime(),
    };
    // console.log(req.params.Id);
    const updatedCam = await Camera.findByIdAndUpdate(
      { _id: req.params.Id },
      modifiedData
    );
    return res.json(updatedCam);
  } catch (err) {
    return res.json({ errorMessage: err });
  }
};

const DeleteCamera = async (req, res) => {
  try {
    const removeCam = await Camera.findByIdAndDelete(req.params.Id);
    return res.json(removeCam);
  } catch (err) {
    return res.json({ message: err });
  }
};

module.exports = { addCamera, getAll, cameraModification, DeleteCamera };
