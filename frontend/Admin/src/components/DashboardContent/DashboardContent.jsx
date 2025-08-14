//css import
import "./DashboardContent.css";

//hooks import
import { useState, useEffect } from "react";

//import axios
import axios from "axios";

import React from "react";
import { FiUsers, FiClock } from "react-icons/fi";

const DashboardContent = ({ employees }) => {
  // state => count all the users
  const [countUser, setCountUser] = useState(0);

  // useEffect call the function which get the number of users
  useEffect(() => {
    totalUsers();
  }, []); // this is to execute just one time at first render

  // funcution to get all the users
  const totalUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3002/users");
      const users = response.data.data;
      setCountUser(users.length); // عدد المستخدمين مباشرة
    } catch (error) {
      console.error("Error fetching the users", error);
    }
  };

  return (
    <div className="dashboard-content">
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Employees</h3>
          <p className="stat-value">{countUser}</p>
          <div className="stat-icon">
            <FiUsers />
          </div>
        </div>
        <div className="stat-card">
          <h3>Present Today</h3>
          <p className="stat-value">18</p>
          <div className="stat-icon">
            <FiClock />
          </div>
        </div>
        <div className="stat-card">
          <h3>Late Today</h3>
          <p className="stat-value">3</p>
          <div className="stat-icon">
            <FiClock />
          </div>
        </div>
        <div className="stat-card">
          <h3>Absent Today</h3>
          <p className="stat-value">3</p>
          <div className="stat-icon">
            <FiClock />
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          {employees.slice(0, 5).map((emp) => (
            <div key={emp.id} className="activity-item">
              <div className={`status-indicator ${emp.status}`}></div>
              <div className="activity-details">
                <p>
                  <strong>{emp.name}</strong> checked{" "}
                  {emp.status === "present"
                    ? "in"
                    : emp.status === "late"
                    ? "in late"
                    : "out"}{" "}
                  at {emp.checkIn}
                </p>
                <small>Today</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
