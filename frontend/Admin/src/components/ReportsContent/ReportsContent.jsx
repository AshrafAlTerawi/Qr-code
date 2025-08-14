//css import
import "./ReportsContent.css";
import "../dashboard/AdminDashboard.css";

//react hooks import
import React, { useState } from "react";

//react icons import
import { FiPieChart } from "react-icons/fi";

//react pdf
import { Document, Page } from "react-pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

//context import
import { useUsers } from "../../Contexts/UserContext";

//component import
import EmployeesPDF from "../EmployeesPDF/EmployeesPDF";

const ReportsContent = () => {
  //all users context
  const { Users } = useUsers();

  const [numPages, setNumPages] = useState(null);

  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
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
          <button className="generate-btn" disabled={Users.length === 0}>
            Generate Report
          </button>
        </div>

        <div className="report-preview">
          <FiPieChart className="chart-icon" />
          <p>Select filters and generate report to view data</p>
        </div>
      </div>
      <div>
        <PDFDownloadLink
          document={<EmployeesPDF users={Users} />}
          fileName="employees.pdf"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
      </div>
    </>
  );
};

export default ReportsContent;
