var express = require("express");
const router = express.Router();
const loginController = require("../controller/login.controller");

router.get("/", loginController.signIn);


module.exports = router;