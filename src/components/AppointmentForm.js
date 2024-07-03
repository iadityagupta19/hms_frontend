import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [appointment, setAppointment] = useState({
    patient: '',
    doctor: '',
    appointmentTime: '',
    status: 'Scheduled' // Default value
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/appointments', {
      patient: { id: parseInt(appointment.patient) },
      doctor: { id: parseInt(appointment.doctor) },
      appointmentTime: appointment.appointmentTime,
      status: appointment.status
    })
      .then(response => {
        navigate('/appointments');
      })
      .catch(error => {
        console.error('There was an error adding the appointment!', error);
      });
  };

  return (
    <div className="form-container">
      <h2>Add Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Patient ID</label>
          <input type="number" name="patient" value={appointment.patient} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Doctor ID</label>
          <input type="number" name="doctor" value={appointment.doctor} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Appointment Time</label>
          <input type="datetime-local" name="appointmentTime" value={appointment.appointmentTime} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select name="status" value={appointment.status} onChange={handleChange}>
            <option value="Scheduled">Scheduled</option>
            <option value="Rescheduled">Rescheduled</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Add Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
