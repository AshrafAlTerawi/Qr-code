//css import
import "./LoginPage.css";

//react hooks import
import { useState, useEffect } from "react";

//react route import
import { useNavigate, Link } from "react-router-dom";

//axios import
import axios from "axios";

//MTU css framework
import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";

function LoginPage({ onLogin }) {
  //react navigate
  const Navigate = useNavigate();

  //Email state
  const [email, setEmail] = useState("");

  //Password state
  const [password, setPassword] = useState("");

  //Is loading state
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
          Navigate("/admin-Dashboard");
          // onLogin();
        }, 1500);
      }
    } catch (error) {
      const msg = error.response?.data?.message || error.message;
      setError(msg);
      console.error("Login error:", msg);
    }
  };
  //===========// MUI event handler for form actions==========//

  //show password MUI state
  const [showPassword, setShowPassword] = React.useState(false);

  //handels show password
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box className="login-background">
      <Box className="floating-elements">
        <Box className="floating-element" />
        <Box className="floating-element" />
        <Box className="floating-element" />
      </Box>

      <Box className="login-container">
        <Typography variant="h4" className="login-title">
          Welcome Back
        </Typography>
        <Typography variant="subtitle1" className="login-subtitle">
          Sign in to access your account
        </Typography>

        <form
          onSubmit={handleLogin}
          className={`login-form ${isLoading ? "updating" : ""}`}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, width: "38ch" }} variant="outlined">
              <InputLabel
                style={{
                  fontSize: "15px",
                  color: "#fefefe96",
                }}
              >
                Email
              </InputLabel>
              <OutlinedInput
                sx={{
                  background: "#4343f0",
                  height: "48px",
                  width: "100%",
                  background: "rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  padding: "0.75rem 1rem",
                  borderRadius: "6px",
                  transition: "border-color 0.3s ease",
                  fontSize: "13px",
                  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                label="email"
              />
            </FormControl>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, width: "38ch" }} variant="outlined">
              <InputLabel
                htmlFor="outlined-adornment-password"
                style={{
                  fontSize: "15px",
                  color: "#fefefe96",
                }}
              >
                Password
              </InputLabel>
              <OutlinedInput
                sx={{
                  background: "#4343f0",
                  height: "48px",
                  width: "100%",
                  background: "rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  padding: "0.75rem 1rem",
                  borderRadius: "6px",
                  transition: "border-color 0.3s ease",
                }}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Box>
          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? "Authenticating..." : "Login"}
          </button>
        </form>
        <h1>{error}</h1>
      </Box>
    </Box>
  );
}

export default LoginPage;
