import React from 'react';
import { FiUserPlus } from 'react-icons/fi';

const EmployeesContent = ({ employees }) => {
  return (
    <div className="employees-content">
      <div className="employees-header">
        <h2>Employee Management</h2>
        <button className="add-employee-btn">
          <FiUserPlus /> Add Employee
        </button>
      </div>
      
      <div className="employees-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
              <th>Department</th>
              <th>Join Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.name.replace(/\s+/g, '').toLowerCase()}@company.com</td>
                <td>{emp.position}</td>
                <td>IT</td>
                <td>15/03/2023</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesContent;