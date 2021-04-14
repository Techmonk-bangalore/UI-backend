var router = require("express").Router();
const login = require("../controllers/login.controller.js");

// Login
router.post("/userLogin", login.login);
module.exports = router;