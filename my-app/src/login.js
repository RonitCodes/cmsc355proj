import React from "react";
import "./login.css";
import { Link } from "react-router-dom"

const Login = () => {

  


  return (
    <div className="container">
      <h1>Log-in</h1>
      <div className="input-group"></div>
        <input
          type="text"
          placeholder="Email"
          id="email"

      
        />
       <input
          type="password"
          placeholder="Password"
          id="password"
 
        />
        <button type="submit">Login</button>
      <div className="bottom-links">
        <Link to="ForgotPassword">Forgot Password</Link>       
         <span>|</span>
        <Link to="Signup">Signup</Link>
      </div>
    </div>
  );
};

export default Login;
