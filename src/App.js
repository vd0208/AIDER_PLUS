import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Removed Router
import HomePage from "./components/HomePage";
import DoctorList from "./components/DoctorList";
import AppointmentForm from "./components/AppointmentForm";
import EmergencyAlert from "./components/EmergencyAlert";
import "./components/styles.css"; 


const App = () => {
  return (
    <div className="app-container">
      <EmergencyAlert />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors/:hospitalId" element={<DoctorList />} />
        <Route path="/book/:doctorId/:hospitalId" element={<AppointmentForm />} />
      </Routes>
    </div>
  );
};

export default App;
