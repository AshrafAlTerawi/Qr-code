import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage.jsx";
import AdminDashboard from "./components/dashboard/AdminDashboard.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      {isAuthenticated ? (
        <AdminDashboard />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
