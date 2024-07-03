import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './DoctorForm.css';

const AddDoctor = () => {
  const [doctor, setDoctor] = useState({
    firstName: '',
    lastName: '',
    email: '',
    specialization: '',
    contactNumber: '' // Added contactNumber field
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/doctors', doctor)
      .then(response => {
        navigate('/doctors');
      })
      .catch(error => {
        console.error('There was an error adding the doctor!', error);
      });
  };

  return (
    <div className="form-container">
      <h2>Add Doctor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={doctor.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={doctor.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={doctor.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input type="text" name="contactNumber" value={doctor.contactNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Specialization</label>
          <input type="text" name="specialization" value={doctor.specialization} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Doctor</button>
      </form>
    </div>
  );
};

export default AddDoctor;
