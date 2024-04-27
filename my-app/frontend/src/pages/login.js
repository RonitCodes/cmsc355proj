import React, { useState, useContext } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Context from '../context'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useContext(Context);

  const handleLogin = (e) => {

    e.preventDefault();
      setLoggedIn(true);
      navigate("/PlaylistPage");
  };

  return (
    <div className="container">
      <h1>Log-in</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>
        Login
      </button>
      <div className="bottom-links">
        <Link to="/ForgotPassword">Forgot Password</Link>
        <span>|</span>
        <Link to="/Signup">Signup</Link>
      </div>
    </div>
  );
};

export default Login;