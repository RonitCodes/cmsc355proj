import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlaylistCreator from './PlaylistCreator';
import './PlaylistCreator.css';
import login from './login';


function App() {
  return (
    <div className="App">
      
      <main>
        <PlaylistCreator />     <login />
      </main>
      
    </div>
  );
}

export default App;