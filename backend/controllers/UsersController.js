//Call The Data Base
const db = require("../db");

//Add New User From The Table
exports.addNewUser = (req, res) => {
  const { full_name, email, phone_number, gender, password } = req.body;

  const sqlCheck =
    "SELECT * FROM users WHERE full_name = ? OR phone_number = ?";

  db.query(sqlCheck, [full_name, phone_number], (err, result) => {
    if (err) {
      console.error("Failed to check employee existence:", err);
      return res.status(500).json({ message: "Internal server error", err });
    }

    if (result.length > 0) {
      return res.status(409).json({ message: "Employee already exists" });
    }

    const sql =
      "INSERT INTO users(full_name, email, phone_number, gender, password) VALUES (?, ?, ?, ?, ?)";

    db.query(
      sql,
      [full_name, email, phone_number, gender, password],
      (err, result) => {
        if (err) {
          console.error("Failed to add new employee:", err);
          return res
            .status(500)
            .json({ message: "Failed to add new employee", err });
        }

        res
          .status(201)
          .json({ message: "Employee added successfully", result });
      }
    );
  });
};

//Get All The User From Table
exports.getAllUser = (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching employees:", err);
      return res.status(500).json({
        message: "Failed to fetch employees",
        err,
      });
    }
    res.status(200).json({
      message: "Employees fetched successfully",
      data: result,
    });
  });
};

//Delete The User From The Table
exports.DeleteUser = (req, res) => {
  const userId = req.params.id;

  const deleteAttendanceSql =
    "DELETE FROM attendance_records WHERE user_id = ?";

  const deleteUserSql = "DELETE FROM users WHERE id = ?";

  db.query(deleteAttendanceSql, [userId], (err, result) => {
    if (err) {
      console.error("Error deleting attendance records", err);
      return res.status(500).send("Error deleting attendance records");
    }

    db.query(deleteUserSql, [userId], (err, result) => {
      if (err) {
        console.error("Error deleting user", err);
        return res.status(500).send("Error deleting user");
      }

      if (result.affectedRows === 0) {
        return res.status(404).send("User not found");
      }

      res
        .status(200)
        .send("User and related attendance records deleted successfully");
    });
  });
};

//Update The User From The Table
exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const { full_name, email, phone_number, gender, password } = req.body;
  const sql =
    "UPDATE users SET full_name=? , email=? , phone_number=? , gender=? , password=? WHERE id=?";
  db.query(
    sql,
    [full_name, email, phone_number, gender, password, userId],
    (err, result) => {
      if (err) {
        console.error("Error updated employees user", err);
        res.status(501).json({ message: "updated employees user fialed", err });
      }
      res
        .status(201)
        .json({ message: "updated employees user successfully", data: result });
    }
  );
};
