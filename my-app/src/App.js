import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlaylistCreator from './PlaylistCreator';
import './PlaylistCreator.css';
import Login from './login'; // Import the Login component

function App() {
  return (
    <div className="App">
      <main>
        <PlaylistCreator />
        <Login /> {/* Render the Login component */}
      </main>
    </div>
  );
}

export default App;