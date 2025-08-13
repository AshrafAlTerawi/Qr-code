//Css import
import "./Sidebar.css";
//Css import from admin dashbord.css
import "../dashboard/AdminDashboard.css";

//React hook
import React, { useState } from "react";

//React icon import
import {
  FiUsers,
  FiClock,
  FiFileText,
  FiSettings,
  FiBell,
  FiLogOut,
  FiHome,
  FiMenu,
} from "react-icons/fi";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="sidebar-toggle" onClick={handleToggle}>
        <FiMenu size={24} />
      </button>
      <div className={`sidebar${isOpen ? " open" : ""}`}>
        <div className="logo">
          <h1>QR-Time</h1>
          <p>Admin Dashboard</p>
        </div>

        <nav className="nav-menu">
          <ul>
            <li
              className={activeTab === "dashboard" ? "active" : ""}
              onClick={() => setActiveTab("dashboard")}
            >
              <FiHome /> Dashboard
            </li>
            <li
              className={activeTab === "attendance" ? "active" : ""}
              onClick={() => setActiveTab("attendance")}
            >
              <FiClock /> Attendance
            </li>
            <li
              className={activeTab === "employees" ? "active" : ""}
              onClick={() => setActiveTab("employees")}
            >
              <FiUsers /> Employees
            </li>
            <li
              className={activeTab === "reports" ? "active" : ""}
              onClick={() => setActiveTab("reports")}
            >
              <FiFileText /> Reports
            </li>
            <li
              className={activeTab === "notifications" ? "active" : ""}
              onClick={() => setActiveTab("notifications")}
            >
              <FiBell /> Notifications
            </li>
            <li
              className={activeTab === "settings" ? "active" : ""}
              onClick={() => setActiveTab("settings")}
            >
              <FiSettings /> Settings
            </li>
          </ul>
        </nav>

        <div className="logout-btn">
          <FiLogOut /> Logout
        </div>
      </div>
    </>
  );
};

export default Sidebar;
