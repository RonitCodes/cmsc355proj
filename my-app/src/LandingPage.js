import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src={logo} alt="App Logo" className="logo" />
      <div className="button-container">
        <Link to="/PlaylistCreator" className="button">
          Create Playlist
        </Link>
        <Link to="/playlists" className="button">
          Playlists
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;