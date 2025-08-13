import React from 'react';
import { FiPieChart } from 'react-icons/fi';

const ReportsContent = () => {
  return (
    <div className="reports-content">
      <h2>Generate Reports</h2>
      <div className="report-filters">
        <div className="filter-group">
          <label>Report Type</label>
          <select>
            <option>Attendance Report</option>
            <option>Late Arrivals</option>
            <option>Absences</option>
            <option>Working Hours</option>
          </select>
        </div>
        <div className="filter-group">
          <label>From Date</label>
          <input type="date" />
        </div>
        <div className="filter-group">
          <label>To Date</label>
          <input type="date" />
        </div>
        <div className="filter-group">
          <label>Format</label>
          <select>
            <option>PDF</option>
            <option>Excel</option>
            <option>CSV</option>
          </select>
        </div>
        <button className="generate-btn">Generate Report</button>
      </div>
      
      <div className="report-preview">
        <FiPieChart className="chart-icon" />
        <p>Select filters and generate report to view data</p>
      </div>
    </div>
  );
};

export default ReportsContent;