//Call The Data Base
const db = require("../db");

//Get All Data From The Table
exports.getAllAttendance = (req, res) => {
  const sql = `
  SELECT attendance_records.*, users.full_name
  FROM attendance_records
  JOIN users ON attendance_records.user_id = users.id
`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.status(500).json({ message: "Fetching data failed" });
    }

    res.status(200).json({
      message: "Fetching data successful",
      data: result,
    });
  });
};

//Register New Attendance Record
exports.AttendanceNewRegistration = (req, res) => {
  const user_id = req.body.employee_id;

  if (!user_id) {
    return res.status(400).json({ message: "employee_id is required" });
  }

  const sql = "INSERT INTO attendance_records(user_id) VALUES(?)";

  db.query(sql, [user_id], (err, result) => {
    if (err) {
      console.error("Error adding attendance", err);
      return res.status(500).json({ message: "Add attendance failed", err });
    }
    res
      .status(201)
      .json({ message: "Add attendance successful", data: result });
  });
};

//Delete The Attendance From The Table
exports.DeleteAttendance = (req, res) => {
  const attendanceId = req.params.id;
  const sql = "DELETE FROM attendance_records WHERE id = ?";

  db.query(sql, [attendanceId], (err, result) => {
    if (err) {
      console.error("Error deleting the attendance:", err);
      return res.status(500).json({ message: "Delete attendance failed", err });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Attendance record not found" });
    }

    res.status(200).json({ message: "Attendance deleted successfully" });
  });
};
