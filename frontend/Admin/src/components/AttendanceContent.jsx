import React from 'react';

const AttendanceContent = ({ employees }) => {
  return (
    <div className="attendance-content">
      <div className="attendance-header">
        <h2>Today's Attendance</h2>
        <div className="attendance-filters">
          <select>
            <option>All</option>
            <option>Present</option>
            <option>Late</option>
            <option>Absent</option>
          </select>
          <button className="export-btn">Export to Excel</button>
        </div>
      </div>
      
      <div className="attendance-table">
        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Status</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Working Hours</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.position}</td>
                <td><span className={`status-badge ${emp.status}`}>{emp.status}</span></td>
                <td>{emp.checkIn}</td>
                <td>{emp.checkOut}</td>
                <td>{emp.status !== 'absent' ? '8h 15m' : '--'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceContent;