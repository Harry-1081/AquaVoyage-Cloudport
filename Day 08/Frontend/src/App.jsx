import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import HomePage from './HomePage/HomePage';
import Error from './Error/Error';
import ForgotPassword from './Login/ForgotPassword';
import Admin from './Admin/Admin';
import Signup from './Login/Signup';
import DetailsPages from './DetailsPage.jsx/DetailsPages';
import LandingPage from './LandingPage/LandingPage';
import { States } from './States';
 // Import your Login component here

function App() {
  return (
    <>
      <BrowserRouter>
        <States>
          <Routes>
            {/* Define your routes */}
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<Login/>} /> {/* Render Login component when URL matches '/' */}
            <Route path="/signup" element={<Signup/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/error" element={<Error/>} />
            <Route path="/forgot" element={<ForgotPassword/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/details" element={<DetailsPages/>} />
          </Routes>
        </States>
      </BrowserRouter>
    </>
  );
}

export default App;
