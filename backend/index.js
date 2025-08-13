//Express Framework Import
const express = require("express");
const app = express();

//Environment Variables
require("dotenv").config();

//To Read The Json
app.use(express.json());

//Import Router Attendance
const attendanceRoutes = require("./routes/attendance-recordsRoutes");
app.use("/", attendanceRoutes);

//Import Router Employee
const UsersRoute = require("./routes/usersRoutes");
app.use("/", UsersRoute);

//Import Ath Router
const AuthRoute = require("./routes/authRoutes");
app.use("/auth", AuthRoute);

//Import Admin Route
const AdminRoute = require("./routes/adminRoutes");
app.use("/", AdminRoute);

//Parent List Element
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} `);
});
