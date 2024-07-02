import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DoctorForm from './DoctorForm';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = () => {
    axios.get('http://localhost:8080/api/doctors')
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the doctors!', error);
      });
  };

  const handleEdit = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/doctors/${id}`)
      .then(() => {
        fetchDoctors();
      })
      .catch(error => {
        console.error('There was an error deleting the doctor!', error);
      });
  };

  const handleSave = (savedDoctor) => {
    fetchDoctors();
    setSelectedDoctor(null);
  };

  return (
    <div>
      <h2>Doctor List</h2>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id}>
            {doctor.firstName} {doctor.lastName} - {doctor.specialization}
            <button onClick={() => handleEdit(doctor)}>Edit</button>
            <button onClick={() => handleDelete(doctor.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <DoctorForm doctor={selectedDoctor} onSave={handleSave} />
    </div>
  );
};

export default DoctorList;
