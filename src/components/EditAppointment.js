// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import './AppointmentForm.css'; // Create this CSS file for styling if needed

// const EditAppointment = () => {
//   const [appointment, setAppointment] = useState({
//     patient: '',
//     doctor: '',
//     appointmentTime: '',
//     status: ''
//   });
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:8080/api/appointments/${id}`)
//       .then(response => {
//         setAppointment(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching appointment!', error);
//       });
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAppointment({ ...appointment, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`http://localhost:8080/api/appointments/${id}`, appointment)
//       .then(response => {
//         navigate('/appointments');
//       })
//       .catch(error => {
//         console.error('Error updating appointment!', error);
//       });
//   };

//   return (
//     <div className="form-container">
//       <h2>Edit Appointment</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Patient ID</label>
//           <input type="number" name="patient" value={appointment.patient} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Doctor ID</label>
//           <input type="number" name="doctor" value={appointment.doctor} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Appointment Time</label>
//           <input type="datetime-local" name="appointmentTime" value={appointment.appointmentTime} onChange={handleChange} required />
//         </div>
//         {/* Optionally, you can use a select dropdown for status */}
//         <div className="form-group">
//           <label>Status</label>
//           <select name="status" value={appointment.status} onChange={handleChange}>
//             <option value="Scheduled">Scheduled</option>
//             <option value="Rescheduled">Rescheduled</option>
//             <option value="Cancelled">Cancelled</option>
//           </select>
//         </div>
//         <button type="submit" className="btn btn-primary">Update Appointment</button>
//       </form>
//     </div>
//   );
// };

// export default EditAppointment;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './AppointmentForm.css';

const EditAppointment = () => {
  const [appointment, setAppointment] = useState({
    patient: '',
    doctor: '',
    appointmentTime: '',
    status: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the appointment details
    axios.get(`http://localhost:8080/api/appointments/${id}`)
      .then(response => {
        const { patient, doctor, appointmentTime, status } = response.data;
        setAppointment({
          patient: patient.id, // Assuming patient and doctor are objects with id field
          doctor: doctor.id,
          appointmentTime,
          status
        });
      })
      .catch(error => {
        console.error('Error fetching appointment!', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/appointments/${id}`, {
      patient: { id: parseInt(appointment.patient) },
      doctor: { id: parseInt(appointment.doctor) },
      appointmentTime: appointment.appointmentTime,
      status: appointment.status
    })
      .then(response => {
        navigate('/appointments');
      })
      .catch(error => {
        console.error('Error updating appointment!', error);
      });
  };

  return (
    <div className="form-container">
      <h2>Edit Appointment</h2>
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
        <button type="submit" className="btn btn-primary">Update Appointment</button>
      </form>
    </div>
  );
};

export default EditAppointment;
