// export default AdminDashboard;
import React, { useState } from "react";
import "./AdminDashboard.css";
import Sidebar from "../Slidbar/Sidebar.jsx";
import DashboardContent from "../DashboardContent.jsx";
import AttendanceContent from "../AttendanceContent.jsx";
import EmployeesContent from "../EmployeesContent.jsx";
import ReportsContent from "../ReportsContent.jsx";
import NotificationsContent from "../NotificationsContent.jsx";
import SettingsContent from "../SettingsContent.jsx";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [employees] = useState([
    {
      id: 1,
      name: "Ahmed Mohamed",
      position: "Developer",
      status: "present",
      checkIn: "08:00",
      checkOut: "17:00",
    },
    {
      id: 2,
      name: "Mariam Ali",
      position: "Designer",
      status: "late",
      checkIn: "08:45",
      checkOut: "17:30",
    },
    {
      id: 3,
      name: "Omar Khalid",
      position: "Manager",
      status: "absent",
      checkIn: "--",
      checkOut: "--",
    },
    {
      id: 4,
      name: "Fatima Hassan",
      position: "HR",
      status: "present",
      checkIn: "07:55",
      checkOut: "16:58",
    },
  ]);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent employees={employees} />;
      case "attendance":
        return <AttendanceContent employees={employees} />;
      case "employees":
        return <EmployeesContent employees={employees} />;
      case "reports":
        return <ReportsContent />;
      case "notifications":
        return <NotificationsContent />;
      case "settings":
        return <SettingsContent />;
      default:
        return <DashboardContent employees={employees} />;
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="main-content">
        <div className="content-container">{renderContent()}</div>
      </div>
    </div>
  );
}

export default AdminDashboard;
