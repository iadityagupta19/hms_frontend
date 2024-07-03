import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './List.css';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/appointments')
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the appointments!', error);
      });
  }, []);

  const deleteAppointment = (id) => {
    axios.delete(`http://localhost:8080/api/appointments/${id}`)
      .then(response => {
        setAppointments(appointments.filter(appointment => appointment.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the appointment!', error);
      });
  };

  return (
    <div className="list-container">
      <h2>Appointment List</h2>
      <Link to="/add-appointment" className="btn btn-primary">Add Appointment</Link>
      <table className="list-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Appointment Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.patient.fullName}</td>
              <td>{appointment.doctor.firstName} {appointment.doctor.lastName}</td>
              <td>{new Date(appointment.appointmentTime).toLocaleString()}</td>
              <td>{appointment.status}</td>
              <td>
                <Link to={`/edit-appointment/${appointment.id}`} className="btn btn-blue">Edit</Link>
                <button onClick={() => deleteAppointment(appointment.id)} className="btn btn-red">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
