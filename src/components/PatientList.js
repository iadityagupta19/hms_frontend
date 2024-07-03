import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/patients')
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the patients!', error);
      });
  }, []);

  const deletePatient = (id) => {
    axios.delete(`http://localhost:8080/api/patients/${id}`)
      .then(response => {
        setPatients(patients.filter(patient => patient.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the patient!', error);
      });
  };

  return (
    <div className="list-container">
      <h2>Patients List</h2>
      <Link to="/add-patient" className="btn">Add Patient</Link>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            {patient.firstName} {patient.lastName}
            <Link to={`/edit-patient/${patient.id}`}>Edit</Link>
            <button onClick={() => deletePatient(patient.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
