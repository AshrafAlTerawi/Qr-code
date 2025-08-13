import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage.jsx";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard.jsx";

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
