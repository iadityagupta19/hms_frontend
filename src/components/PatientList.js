import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './List.css';

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
            <Link to="/add-patient" className="btn btn-primary">Add Patient</Link>
            <table className="list-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Contact Number</th>
                        <th>Email</th>
                        <th>Insurance Provider</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(patient => (
                        <tr key={patient.id}>
                            <td>{patient.firstName}</td>
                            <td>{patient.lastName}</td>
                            <td>{patient.dateOfBirth}</td>
                            <td>{patient.contactNumber}</td>
                            <td>{patient.email}</td>
                            <td>{patient.insuranceProvider}</td>
                            <td>
                                <Link to={`/edit-patient/${patient.id}`} className="btn btn-blue">Edit</Link>
                                <button onClick={() => deletePatient(patient.id)} className="btn btn-red">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientList;
