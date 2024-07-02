import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientForm = ({ patient, onSave }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    contactNumber: '',
    email: '',
    insuranceProvider: ''
  });

  useEffect(() => {
    if (patient) {
      setFormData({
        firstName: patient.firstName,
        lastName: patient.lastName,
        dateOfBirth: patient.dateOfBirth,
        contactNumber: patient.contactNumber,
        email: patient.email,
        insuranceProvider: patient.insuranceProvider
      });
    } else {
      setFormData({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        contactNumber: '',
        email: '',
        insuranceProvider: ''
      });
    }
  }, [patient]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = patient ? `http://localhost:8080/api/patients/${patient.id}` : 'http://localhost:8080/api/patients';
    const method = patient ? 'put' : 'post';

    axios({
      method: method,
      url: url,
      data: formData
    })
    .then(response => {
      onSave(response.data);
    })
    .catch(error => {
      console.error('There was an error saving the patient!', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </div>
      <div>
        <label>Date of Birth</label>
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
      </div>
      <div>
        <label>Contact Number</label>
        <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Insurance Provider</label>
        <input type="text" name="insuranceProvider" value={formData.insuranceProvider} onChange={handleChange} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default PatientForm;
