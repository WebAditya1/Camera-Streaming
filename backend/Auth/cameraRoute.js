const router = require("express").Router();
const cameraView = require("./cameraController");

router.post("/add", cameraView.addCamera);
router.get("/list", cameraView.getAll);
router.put("/:Id", cameraView.cameraModification);
router.delete("/:Id", cameraView.DeleteCamera);  

module.exports = router;