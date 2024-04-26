import React from 'react';

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

import {
  BrowserRouter, Routes, Route
} from "react-router-dom";



function App() {
  return (
        
          <Routes>
           
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/Signup" element={<Signup />}/>
            <Route exact path="/ForgotPassword" element={<ForgotPassword />}/>
            <Route exact path="/LandingPage" element={<LandingPage />}/>
            <Route exact path="/PlaylistCreator" element={<PlaylistCreator />} /> 
          </Routes>
  )
}

export default App;