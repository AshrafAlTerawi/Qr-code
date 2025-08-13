//css import
import "./LoginPage.css";

//react hooks import
import { useState, useEffect } from "react";

//axios import
import axios from "axios";

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("Email state is:", email, "Password state is:", password);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3002/auth/employees/login",
        { email, password }
      );

      localStorage.setItem("token", response.data.token);

      console.log("the token from response is", response.data.token);
    } catch (error) {
      setError("Login error:", error.response?.data || error.message);
      console.error("Login error:", error.response?.data || error.message);
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
