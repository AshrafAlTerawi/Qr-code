//bcrypt library import
const bcrypt = require("bcrypt");

//Hash Password Function
const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(password, saltRounds);
  return hashed;
};

module.exports = hashPassword;
