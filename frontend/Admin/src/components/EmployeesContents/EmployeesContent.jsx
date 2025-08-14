//css import
import "./EmployeesContent.css";

import axios from "axios";
import React from "react";

//import userContext
import { useUsers } from "../../Contexts/UserContext";

//react icon import
import { FiUserPlus } from "react-icons/fi";




const EmployeesContent = () => {
  // get data from the context
  const { Users } = useUsers(); // Users => array contains all the user i got them from the back

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
              <th>Full Name</th>
              <th>Email</th>
              <th>Join Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.full_name}</td>
                <td>{emp.email}</td>
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
