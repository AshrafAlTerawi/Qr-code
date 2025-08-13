//Express Framework Import
const express = require("express");
const router = express.Router();

//Auth Middlewares Controller Import
const AthController = require("../controllers/authController");

//Registe Route
router.post("/employees/register", AthController.registe);

//Login Route
router.post("/employees/login", AthController.login);

module.exports = router;
