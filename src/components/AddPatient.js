// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { addPatient } from '../api/api';
// import './Form.css';

// function AddPatient() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');
//   const [contactNumber, setContactNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [insuranceProvider, setInsuranceProvider] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newPatient = {
//       firstName,
//       lastName,
//       dateOfBirth,
//       contactNumber,
//       email,
//       insuranceProvider
//     };
//     try {
//       await addPatient(newPatient);
//       navigate('/patients');
//     } catch (error) {
//       console.error('Error adding patient: ', error);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Add Patient</h2>
//       <form onSubmit={handleSubmit}>
//         <label>First Name:</label>
//         <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
//         <label>Last Name:</label>
//         <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
//         <label>Date of Birth:</label>
//         <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
//         <label>Contact Number:</label>
//         <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <label>Insurance Provider:</label>
//         <input type="text" value={insuranceProvider} onChange={(e) => setInsuranceProvider(e.target.value)} />
//         <button type="submit" className="btn">Add Patient</button>
//       </form>
//     </div>
//   );
// }

// export default AddPatient;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PatientForm from './PatientForm';
import './Form.css';

const AddPatient = () => {
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    contactNumber: '',
    email: '',
    insuranceProvider: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/api/patients', patient)
      .then(response => {
        navigate('/patients');
      })
      .catch(error => {
        console.error('There was an error adding the patient!', error);
      });
  };

  return (
    <div className="form-container">
      <h2>Add Patient</h2>
      <PatientForm
        patient={patient}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        buttonLabel="Add Patient"
      />
    </div>
  );
};

export default AddPatient;

