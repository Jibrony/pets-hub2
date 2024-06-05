import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/js/Login.js';
import Home from './Components/js/Home.js';
import Signup from './Components/js/SignUp.js';
import Profile from './Components/js/Profile.js';
import Vaccines from './Components/js/Vaccines.js';
import Request from './Components/js/Request.js';
import Adoption from './Components/js/Adoption.js';
import Pets from './Components/js/Pets.js';
import MissingPets from './Components/js/MissingPets.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />ƒ
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/vaccines" element={<Vaccines />} />
        <Route path="/request" element={<Request />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/missingpets" element={<MissingPets />} />
      </Routes>
    </Router>
  );
}

export default App;

