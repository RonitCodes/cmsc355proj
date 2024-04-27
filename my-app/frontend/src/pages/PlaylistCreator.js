import React, { useState, useContext } from 'react';
import './PlaylistCreator.css';
import { useNavigate } from 'react-router-dom'
import Context from '../context'

const PlaylistCreator = () => {
  const [playlistName, setPlaylistName] = useState('');
  const [firstSong, setFirstSong] = useState('');
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useContext(Context);

  const handleCreatePlaylist = () => {
    // Here, you would typically send the playlist data to a server or perform some other action
    console.log(`Creating playlist "${playlistName}" with first song "${firstSong}"`);
    // Reset the input fields after creating the playlist
    setPlaylistName('');
    setFirstSong('');
    if (loggedIn === false) {
      navigate('/')
    } else {
      navigate('/PlaylistPage')
    }

  };

  const handleCancel = () => {
    // Reset the input fields
    setPlaylistName('');
    setFirstSong('');
    if (loggedIn === false) {
      navigate('/ç')
    } else {
      navigate('/PlaylistPage')
    }
  };

  return (
    <div className="playlist-creator">
      <h2>Create New Playlist</h2>
      <div className="input-group">
        <label htmlFor="playlistName">Playlist Name:</label>
        <input
          type="text"
          id="playlistName"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="firstSong">First Song:</label>
        <input
          type="text"
          id="firstSong"
          value={firstSong}
          onChange={(e) => setFirstSong(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button onClick={handleCreatePlaylist}>Create Playlist</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default PlaylistCreator;