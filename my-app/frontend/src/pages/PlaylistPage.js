import React, { useState, useContext } from 'react';
import './PlaylistPage.css';
import { useNavigate } from 'react-router-dom'
import Context from '../context'

const PlaylistLanding = () => {
  // sample data 
  const [playlists, setPlaylists] = useState([
    { id: 1, name: 'Work out', songCount: 20 },
    { id: 2, name: 'Chill Vibes', songCount: 15 },
    { id: 3, name: 'Sad hours', songCount: 30 }
  ]);
  const { loggedIn, setLoggedIn } = useContext(Context);

  const navigate = useNavigate();

  // Function to navigate to the Playlist creator page
  const navigateToCreator = () => {
  
    console.log('Navigating to Playlist Creator...');
    navigate('/PlaylistCreator')
    //i think this is where he route
  };
  
  const loggingOut = (e) => {

    e.preventDefault();
      setLoggedIn(true);
      navigate("/Login");
  };

  return (
    <div className="playlist-landing">
      <h1>My Playlists</h1>
      <div className="playlists">
        {playlists.map(playlist => (
          <div key={playlist.id} className="playlist-entry">
            <h3>{playlist.name}</h3>
            <p>Songs: {playlist.songCount}</p>
          </div>
        ))}
      </div>
      <button onClick={navigateToCreator}>Add New Playlist</button>
      <button onClick={loggingOut}>Logout</button>
    </div>
  );
};

export default PlaylistLanding;
