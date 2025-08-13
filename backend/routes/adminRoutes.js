//Express Framework Import
const express = require("express");
const router = express.Router();

//Authentication Using JSON Web Token (JWT)
const authenticateJWT = require("../middlewares/authenticateJWT");

//Authorization: Allow Access Only For Admin Users
const authorizeAdmin = require("../middlewares/authorizeAdmin");

//Admin Dashboard Route
router.post("/admin/dashboard", authenticateJWT, authorizeAdmin, (req, res) => {
  res.status(201).json({ message: "Welcome to the Admin Dashboard" });
});

module.exports = router;
