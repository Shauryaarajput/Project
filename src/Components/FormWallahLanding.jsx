import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import Login from "./Login";
import SignUp from "./Signup";
import ForgetPassword from "./ForgetPassword";

import AdminDashboard from "../Pages/admin dashbooard/AdminDashboard";
import AllUsers from "../Pages/admin dashbooard/AllUsers";
import AdminHome from "../Pages/admin dashbooard/AdminHome";
import FormRequest from "../Pages/admin dashbooard/FormRequest"; 
import SubAdminDashboard from "../Pages/admin dashbooard/SubAdminDashboard"
import EmployeeDashboard from "../Pages/admin dashbooard/EmployeeDashboard";
import Reports from "../Pages/admin dashbooard/Reports";
import Billing from "../Pages/admin dashbooard/Billing";
import Form from "./Form";

// Add more admin pages here

function FormWallahLanding() {
  return (
    <Router>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/form" element={<Form />} />

        {/* ADMIN ROUTES (WITH NESTING) */}
        <Route path="/adminDashboard" element={<AdminDashboard />}>
          <Route index element={<AdminHome />} />
          <Route path="users" element={<AllUsers />} />
          <Route path="request" element={<FormRequest />} />
          <Route path="subAdmin" element={<SubAdminDashboard />} />
          <Route path="employee" element={<EmployeeDashboard/>} />
          <Route path="reports" element={<Reports />} />
          <Route path="billing" element={<Billing />} />
          {/* Add more admin pages later */}
        </Route>
      </Routes>
    </Router>
  );
}

export default FormWallahLanding;
