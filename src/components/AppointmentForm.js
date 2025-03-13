import React, { useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import 'jspdf-autotable';
import "./styles.css";

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    reason: '',
    age: '',
    gender: '',
    reports: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      reports: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const doc = new jsPDF();
    doc.text("Appointment Details", 14, 20);
    autoTable(doc, {
      startY: 30,
      head: [["Field", "Details"]],
      body: [
        ["Name", formData.name],
        ["Blood Group", formData.bloodGroup],
        ["Reason for Visit", formData.reason],
        ["Age", formData.age],
        ["Gender", formData.gender],
      ],
    });
    doc.save("appointment.pdf");
  };

  return (
    <div className="appointment-container">
      <h2 className="appointment-title">Book Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Blood Group</label>
          <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        <div className="form-group">
          <label>Reason for Visit</label>
          <textarea name="reason" value={formData.reason} onChange={handleChange}></textarea>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Age</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Upload Reports (if any)</label>
          <input type="file" name="reports" onChange={handleFileChange} />
        </div>

        <button type="submit" className="submit-btn">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentPage;