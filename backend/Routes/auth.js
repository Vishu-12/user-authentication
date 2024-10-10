const { signup, login } = require("../Controllers/auth");

const router = require("express").Router();

router.post("/login", login);
router.post("/signup", signup);

module.exports = router;
