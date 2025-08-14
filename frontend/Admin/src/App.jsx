//css import
import "./App.css";

//react hook import
import { useState } from "react";

//react routes import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components import
import LoginPage from "./pages/LoginPage.jsx";
import AdminDashboard from "./components/dashboard/AdminDashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import Sidebar from "./components/Slidbar/Sidebar.jsx";
//create routing
import EmployeesContent from "./components/EmployeesContents/EmployeesContent.jsx";
import ReportsContent from "./components/ReportsContent/ReportsContent.jsx";

import NotificationToast from "./components/NotificationToast/NotificationToast.jsx";
import { SnackbarProvider } from "notistack";

//contexts import
import { UserProvider } from "./Contexts/UserContext.jsx";

function App() {
  const [showToast, setShowToast] = useState(false);
  const [messageToast, setMessageToast] = useState("");
  const [toastVariant, setToastVariant] = useState("success");

  return (
    <>
      <UserProvider>
        <SnackbarProvider maxSnack={4} autoHideDuration={3000}>
          <NotificationToast
            showToast={showToast}
            setShowToast={setShowToast}
            messageToast={messageToast}
            variant={toastVariant}
          />
          <Router>
            <Routes>
              <Route
                path="/admin-Dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/"
                element={
                  <LoginPage
                    setShowToast={setShowToast}
                    setMessageToast={setMessageToast}
                    setToastVariant={setToastVariant}
                  />
                }
              />
            </Routes>
          </Router>
        </SnackbarProvider>
      </UserProvider>
    </>
  );
}

export default App;
