//Express Framework Import
const express = require("express");
const router = express.Router();

//User Controller Import
const UsersController = require("../controllers/UsersController");

//Add New User Route
router.post("/users", UsersController.addNewUser);

//Get All User Router
router.get("/users", UsersController.getAllUser);

//Delete User Router
router.delete("/users/:id", UsersController.DeleteUser);

//update User Router
router.put("/users/:id", UsersController.updateUser);

module.exports = router;
