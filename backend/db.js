//MySQl Library import
const mysql = require("mysql2");

//Create Connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error(" connection to the database failed ", err);
    return;
  }
  console.log("The database was connected successfully ✅");
});

module.exports = connection;
// const { Pool } = require('pg');

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT
// });

// pool.connect()
//   .then(() => console.log("Connected to PostgreSQL"))
//   .catch(err => console.error("Connection to PostgreSQL failed", err));
