//Express Framework Import
const express = require("express");
const router = express.Router();

//Attendance Aecords Controller Import
const attendanceController = require("../controllers/attendance-recordsController");

//Get All Attendance Router
router.get("/attendance-records", attendanceController.getAllAttendance);

//Attendance Registration Router
router.post(
  "/attendance-records",
  attendanceController.AttendanceNewRegistration
);

//Delete Attendance Router
router.delete("/attendance-records/:id", attendanceController.DeleteAttendance);

module.exports = router;
