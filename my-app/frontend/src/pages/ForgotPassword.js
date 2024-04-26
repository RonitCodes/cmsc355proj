import React from "react";
import "./ForgotPassword.css"
import { Link } from "react-router-dom"


const ForgotPassword = () => { 
    return (

<div class="container">
    <h1>Forgot Password?</h1>
    <h2>Please enter your e-mail or phone number.</h2>
    
        <input type="text" placeholder="Email or Password"/>
        <Link to="/"><button type="submit">Reset Password</button></Link>
        
    <div class="bottom-link">
        <Link to="/">Log In</Link>
        <span>|</span>
        <Link to="/Signup">Sign Up</Link>
    </div>
</div>
);
};
export default ForgotPassword;