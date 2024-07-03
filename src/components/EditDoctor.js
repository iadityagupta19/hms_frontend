import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './DoctorForm.css';

const EditDoctor = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({
    firstName: '',
    lastName: '',
    email: '',
    specialization: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/doctors/${id}`)
      .then(response => {
        setDoctor(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the doctor!', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/doctors/${id}`, doctor)
      .then(response => {
        navigate('/doctors');
      })
      .catch(error => {
        console.error('There was an error updating the doctor!', error);
      });
  };

  return (
    <div className="form-container">
      <h2>Edit Doctor</h2>
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
          <label>Specialization</label>
          <input type="text" name="specialization" value={doctor.specialization} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Update Doctor</button>
      </form>
    </div>
  );
};

export default EditDoctor;
