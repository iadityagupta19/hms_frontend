import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientList from './components/PatientList';
import DoctorList from './components/DoctorList';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hospital Management System</h1>
        <Routes>
          <Route path="/patients" element={<PatientList />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/" element={<PatientList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
