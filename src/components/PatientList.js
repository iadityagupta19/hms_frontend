import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PatientForm from './PatientForm';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = () => {
    axios.get('http://localhost:8080/api/patients')
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the patients!', error);
      });
  };

  const handleEdit = (patient) => {
    setSelectedPatient(patient);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/patients/${id}`)
      .then(() => {
        fetchPatients();
      })
      .catch(error => {
        console.error('There was an error deleting the patient!', error);
      });
  };

  const handleSave = (savedPatient) => {
    fetchPatients();
    setSelectedPatient(null);
  };

  return (
    <div>
      <h2>Patient List</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            {patient.firstName} {patient.lastName} - {patient.email}
            <button onClick={() => handleEdit(patient)}>Edit</button>
            <button onClick={() => handleDelete(patient.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <PatientForm patient={selectedPatient} onSave={handleSave} />
    </div>
  );
};

export default PatientList;
