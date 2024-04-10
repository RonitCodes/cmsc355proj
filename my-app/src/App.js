import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlaylistCreator from './PlaylistCreator';
import './PlaylistCreator.css';
import Login from './login'; // Import the Login component
import Signup from './Signup';
import './Signup.css';


function App() {
  return (
    <div className="App">
      <main>
        <PlaylistCreator />
        <Login /> {/* Render the Login component */}
        <Signup /> {}
      </main>
    </div>
  );
}

export default App;