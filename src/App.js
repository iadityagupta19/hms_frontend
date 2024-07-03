import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PatientList from './components/PatientList';
import AddPatient from './components/AddPatient';
import EditPatient from './components/EditPatient';
import DoctorList from './components/DoctorList';
import AddDoctor from './components/AddDoctor';
import EditDoctor from './components/EditDoctor';
import AppointmentList from './components/AppointmentList';
import AddAppointment from './components/AddAppointment';
import EditAppointment from './components/EditAppointment';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/patients">Patients</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/appointments">Appointments</Link>
        </nav>
        <Routes>
          <Route path="/patients" element={<PatientList />} />
          <Route path="/add-patient" element={<AddPatient />} />
          <Route path="/edit-patient/:id" element={<EditPatient />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/edit-doctor/:id" element={<EditDoctor />} />
          <Route path="/appointments" element={<AppointmentList />} />
          <Route path="/add-appointment" element={<AddAppointment />} />
          <Route path="/edit-appointment/:id" element={<EditAppointment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
