const router = require("express").Router();
const user = require("./loginController");

router.post("/register", user.registerUser);
router.post("/login", user.authUser);
router.get("/list", user.getAll);
router.put("/:Id", user.dataModification);
router.delete("/:userId", user.DeleteUser);

module.exports = router;