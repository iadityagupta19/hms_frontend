import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './List.css';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/doctors')
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the doctors!', error);
      });
  }, []);

  const deleteDoctor = (id) => {
    axios.delete(`http://localhost:8080/api/doctors/${id}`)
      .then(response => {
        setDoctors(doctors.filter(doctor => doctor.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the doctor!', error);
      });
  };

  return (
    <div className="list-container">
      <h2>Doctor List</h2>
      <Link to="/add-doctor" className="btn btn-primary">Add Doctor</Link>
      <table className="list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Specialization</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => (
            <tr key={doctor.id}>
              <td>{doctor.firstName} {doctor.lastName}</td>
              <td>{doctor.email}</td>
              <td>{doctor.specialization}</td>
              <td>
                <Link to={`/edit-doctor/${doctor.id}`} className="btn btn-blue">Edit</Link>
                <button onClick={() => deleteDoctor(doctor.id)} className="btn btn-red">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList;
