import React from "react";
import { FiUsers, FiClock } from "react-icons/fi";

const DashboardContent = ({ employees }) => {
  return (
    <div className="dashboard-content">
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Employees</h3>
          <p className="stat-value">24</p>
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
