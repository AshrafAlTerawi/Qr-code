//json web token library import
const jwt = require("jsonwebtoken");

//Generate Token Function
const generateToken = (user) => {
  const payload = {
    fullName: user.full_name,
    email: user.email,
    phoneNumber: user.phone_number,
    gender: user.gender,
    role: user.role,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

module.exports = generateToken;
