import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      console.log('Email:', email, 'Password:', password);
      setIsLoading(false);
      // Call onLogin when login is successful
      onLogin();
    }, 1500);
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
        
        <form onSubmit={handleSubmit} className={`login-form ${isLoading ? 'updating' : ''}`}>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="Email Address"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="form-input"
            />
          </div>
          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? 'Authenticating...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;