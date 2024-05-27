import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/js/login.js';
import Home from './Components/js/home.js';
import Signup from './Components/js/signup.js';
import Profile from './Components/js/profile.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />ƒ
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

