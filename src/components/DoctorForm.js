import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorForm = ({ doctor, onSave }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    specialization: '',
    contactNumber: '',
    email: ''
  });

  useEffect(() => {
    if (doctor) {
      setFormData({
        firstName: doctor.firstName,
        lastName: doctor.lastName,
        specialization: doctor.specialization,
        contactNumber: doctor.contactNumber,
        email: doctor.email
      });
    } else {
      setFormData({
        firstName: '',
        lastName: '',
        specialization: '',
        contactNumber: '',
        email: ''
      });
    }
  }, [doctor]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = doctor ? `http://localhost:8080/api/doctors/${doctor.id}` : 'http://localhost:8080/api/doctors';
    const method = doctor ? 'put' : 'post';

    axios({
      method: method,
      url: url,
      data: formData
    })
    .then(response => {
      onSave(response.data);
    })
    .catch(error => {
      console.error('There was an error saving the doctor!', error);
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
        <label>Specialization</label>
        <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} />
      </div>
      <div>
        <label>Contact Number</label>
        <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default DoctorForm;
