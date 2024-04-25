import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="button-container">
        <Link to="/PlaylistCreator" className="button">
          Create Playlist
        </Link>
        <Link to="/Signup" className="button">
          Sign Up
        </Link>
        <Link to="/ForgotPassword" className="button">
          Forgot Password
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;