import React, { useState } from "react";
import { Link } from "react-router-dom";



const Signup = () => {
  //const history = useHistory();
  // form states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function ButtonLink({ to, children }) {
    return <Link to={to}>
      <button>
  
      {children}
      </button></Link>;
  }
  // password validation
  let hasSixChar = password.length >= 6;
  let hasLowerChar = /(.*[a-z].*)/.test(password);
  let hasUpperChar = /(.*[A-Z].*)/.test(password);
  let hasNumber = /(.*[0-9].*)/.test(password);
  let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);

  return (
    <div className="container">
      <h2>Signup</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {password && confirmPassword && (
          <div className="ml-1 mt-1">
            {password === confirmPassword ? (
              <span className="text-success">Passwords match</span>
            ) : (
              <span className="text-failure">Passwords do not match</span>
            )}
          </div>
        )}
      </div>
      <div className="button">
      <ButtonLink to="/Login">Submit</ButtonLink>
      <Link to="/">Cancel</Link>
      </div>
    </div>
  );
};

export default Signup;
