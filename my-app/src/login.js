import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="container">
      <h1>Log-in</h1>
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <div className="bottom-links">
        <a href="#">Forgot Password?</a>
        <span>|</span>
        <a href="#">Sign Up</a>
      </div>
    </div>
  );
};

export default Login;