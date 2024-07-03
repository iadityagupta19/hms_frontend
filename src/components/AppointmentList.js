import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAppointments, deleteAppointment } from '../api/api';
import './List.css';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await getAppointments();
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments: ', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAppointment(id);
      fetchAppointments();
    } catch (error) {
      console.error('Error deleting appointment: ', error);
    }
  };

  return (
    <div className="list-container">
      <h2>Appointments</h2>
      <Link to="/add-appointment" className="btn">Add Appointment</Link>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            {appointment.patient.firstName} {appointment.patient.lastName} with {appointment.doctor.firstName} {appointment.doctor.lastName} on {appointment.appointmentTime}
            <button onClick={() => handleDelete(appointment.id)}>Delete</button>
            <Link to={`/edit-appointment/${appointment.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;
