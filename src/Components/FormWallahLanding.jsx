import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import SignUp from './Signup';
import ForgetPassword from './ForgetPassword';


function FormWallahLanding() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
}

export default FormWallahLanding;
