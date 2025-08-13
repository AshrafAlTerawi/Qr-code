//css import
import "./LoginPage.css";

//react hooks import
import { useState, useEffect } from "react";

//axios import
import axios from "axios";

function LoginPage({ onLogin }) {
  //Email state
  const [email, setEmail] = useState("");

  //Password state
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  //Error state
  const [error, setError] = useState("");
  console.log("the errors is", error);

  //handel log in
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:3002/auth/employees/login",
        { email, password }
      );

      const token = response.data.token;

      const adminRes = await axios.get(
        "http://localhost:3002/admin/dashboard",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      localStorage.setItem("token", token);

      if (adminRes.data.message == "Welcome to the Admin Dashboard") {
        setError(adminRes.data.message);
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);

          onLogin();
        }, 1500);
      }
    } catch (error) {
      const msg = error.response?.data?.message || error.message;
      setError(msg);
      console.error("Login error:", msg);
    }
  };

  return (
    <div className="login-background">
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="login-container">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Sign in to access your account</p>

        <form
          onSubmit={handleLogin}
          className={`login-form ${isLoading ? "updating" : ""}`}
        >
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email Address"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="form-input"
            />
          </div>
          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? "Authenticating..." : "Login"}
          </button>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
  );
}

export default LoginPage;
