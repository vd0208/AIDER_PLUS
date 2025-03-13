import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import hospitals from '../components/hospitals'; 
import "./styles.css"; 

const DoctorList = () => {
  const { hospitalId } = useParams();
  const navigate = useNavigate();
  
  const hospital = hospitals.find(h => h.id.toString() === hospitalId);

  if (!hospital) {
    return (
      <div className="doctor-list-container">
        <h1 className="app-title">AIDER+</h1>
        <p className="error-message">Error: Hospital not found!</p>
        <Link to="/" className="back-link">Back to Hospital List</Link>
      </div>
    );
  }

  const handleBookAppointment = (doctor) => {
    navigate(`/book/${doctor.id}/${hospital.id}`);
  };

  return (
    <div className="doctor-list-container">
      <div className="hospital-header">
        <h2 className="hospital-name">{hospital.name}</h2>
        <p className="hospital-history"><strong>History:</strong> {hospital.history}</p>
        <p className="hospital-services"><strong>Services:</strong> {hospital.services}</p>
      </div>
      <h3 className="doctor-section-title">Doctors</h3>
      <div className="doctor-grid">
        {hospital.doctors.map(doctor => (
          <div className="doctor-card" key={doctor.id}>
            <h4 className="doctor-name">{doctor.name}</h4>
            <p><strong>Degree:</strong> {doctor.degree}</p>
            <p><strong>Specialization:</strong> {doctor.specialization}</p>
            <p><strong>Timings:</strong> {doctor.timings}</p>
            <button 
              onClick={() => handleBookAppointment(doctor)} 
              className="book-btn"
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>
      <Link to="/" className="back-link">Back to Hospital List</Link>
    </div>
  );
};

export default DoctorList;