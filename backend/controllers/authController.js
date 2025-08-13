//Call The Data Base
const db = require("../db");

//Bcrypt Library Import
const bcrypt = require("bcrypt");

//Function To Hash Passwords
const hashPassword = require("../utils/hashPassword");

//Function To Generate A Token
const generateToken = require("../utils/generateToken");

//Auth Registe
exports.registe = async (req, res) => {
  const { full_name, email, phone_number, gender, password } = req.body;

  const sqlCheck =
    "SELECT * FROM users WHERE full_name = ? OR phone_number = ?";

  db.query(sqlCheck, [full_name, phone_number], async (err, result) => {
    if (err) {
      console.error("Failed to check employee existence:", err);
      return res.status(500).json({ message: "Internal server error", err });
    }

    if (result.length > 0) {
      return res.status(409).json({ message: "Employee already exists" });
    }

    try {
      const hashedPassword = await hashPassword(password);

      const sqlInsert =
        "INSERT INTO users(full_name, email, phone_number, gender, password) VALUES (?, ?, ?, ?, ?)";

      db.query(
        sqlInsert,
        [full_name, email, phone_number, gender, hashedPassword],
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
    } catch (hashErr) {
      res.status(500).json({ message: "Error hashing password", err: hashErr });
    }
  });
};

//Auth Login
exports.login = (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], (err, result) => {
    if (err) return res.status(500).json({ message: "Login failed", err });
    if (result.length === 0)
      return res.status(401).json({ message: "Invalid email or password" });

    const user = result[0];

    bcrypt
      .compare(password, user.password)
      .then((match) => {
        if (!match) {
          return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = generateToken(user);
        res.status(200).json({ message: "Login successful", token });
      })
      .catch((error) => {
        res.status(500).json({ message: "Error comparing passwords", error });
      });
  });
};
