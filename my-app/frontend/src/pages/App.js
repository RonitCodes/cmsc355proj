import React, { useState } from 'react';

import './App.css';
import PlaylistCreator from './PlaylistCreator';
import './PlaylistCreator.css';
import Login from './login'; // Import the Login component
import Signup from './Signup';
import './Signup.css';
import ForgotPassword from './ForgotPassword'
import './ForgotPassword.css'
import ReactDOM from 'react-dom/client';
import '../index.css'
import LandingPage from './LandingPage';
import './LandingPage.css'
import PlaylistPage from './PlaylistPage'
import './PlaylistPage.css'
import Context from '../context'

import {
  BrowserRouter, Routes, Route
} from "react-router-dom";





function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
        <Context.Provider value={{ loggedIn, setLoggedIn }}>
          <Routes>      
            <Route exact path="/" element={<LandingPage/>}/>
            <Route exact path="/Signup" element={<Signup />}/>
            <Route exact path="/ForgotPassword" element={<ForgotPassword />}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/PlaylistCreator" element={<PlaylistCreator />} /> 
            <Route exact path="/PlaylistPage" element={<PlaylistPage/>} />
          </Routes>
          </Context.Provider>
  )
}

export default App;