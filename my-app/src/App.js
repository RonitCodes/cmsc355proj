import React from 'react';

import './App.css';
import PlaylistCreator from './PlaylistCreator';
import './PlaylistCreator.css';
import Login from './login'; // Import the Login component
import Signup from './Signup';
import './Signup.css';
import ForgotPassword from './ForgotPassword'
import './ForgotPassword.css';


import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="SignUp" element={<Signup />} />
            <Route path="ForgotPassword" element={<ForgotPassword />} />
            <Route path="CreatePlaylist" element={<PlaylistCreator />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;