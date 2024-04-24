import React, { useState } from 'react';
import './PlaylistLanding.css';

const PlaylistLanding = () => {
  // sample data 
  const [playlists, setPlaylists] = useState([
    { id: 1, name: 'Work out', songCount: 20 },
    { id: 2, name: 'Chill Vibes', songCount: 15 },
    { id: 3, name: 'Sad hours', songCount: 30 }
  ]);

  // Function to navigate to the Playlist creator page
  const navigateToCreator = () => {
    console.log('Navigating to Playlist Creator...');
    //i think this is where he route
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
    </div>
  );
};

export default PlaylistLanding;
