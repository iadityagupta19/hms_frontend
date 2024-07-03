// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const EditPatient = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [patient, setPatient] = useState({
//     firstName: '',
//     lastName: '',
//     dateOfBirth: '',
//     contactNumber: '',
//     email: '',
//     insuranceProvider: '',
//   });

//   useEffect(() => {
//     axios.get(`http://localhost:8080/api/patients/${id}`)
//       .then(response => {
//         setPatient(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the patient data!', error);
//       });
//   }, [id]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setPatient({ ...patient, [name]: value });
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     axios.put(`http://localhost:8080/api/patients/${id}`, patient)
//       .then(response => {
//         navigate('/patients');
//       })
//       .catch(error => {
//         console.error('There was an error updating the patient!', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Edit Patient</h2>
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           First Name:
//           <input
//             type="text"
//             name="firstName"
//             value={patient.firstName}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Last Name:
//           <input
//             type="text"
//             name="lastName"
//             value={patient.lastName}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Date of Birth:
//           <input
//             type="date"
//             name="dateOfBirth"
//             value={patient.dateOfBirth}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Contact Number:
//           <input
//             type="text"
//             name="contactNumber"
//             value={patient.contactNumber}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={patient.email}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Insurance Provider:
//           <input
//             type="text"
//             name="insuranceProvider"
//             value={patient.insuranceProvider}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Update Patient</button>
//       </form>
//     </div>
//   );
// };

// export default EditPatient;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PatientForm from './PatientForm';
import './Form.css';

const EditPatient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    contactNumber: '',
    email: '',
    insuranceProvider: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/patients/${id}`)
      .then(response => {
        setPatient(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the patient data!', error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/api/patients/${id}`, patient)
      .then(response => {
        navigate('/patients');
      })
      .catch(error => {
        console.error('There was an error updating the patient!', error);
      });
  };

  return (
    <div className="form-container">
      <h2>Edit Patient</h2>
      <PatientForm
        patient={patient}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        buttonLabel="Update Patient"
      />
    </div>
  );
};

export default EditPatient;
