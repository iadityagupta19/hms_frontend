import React from 'react';

const PatientForm = ({ patient, handleInputChange, handleFormSubmit, buttonLabel }) => {
  return (
    <form onSubmit={handleFormSubmit} className="patient-form">
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={patient.firstName}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={patient.lastName}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type="date"
          name="dateOfBirth"
          value={patient.dateOfBirth}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Contact Number:
        <input
          type="text"
          name="contactNumber"
          value={patient.contactNumber}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={patient.email}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Insurance Provider:
        <input
          type="text"
          name="insuranceProvider"
          value={patient.insuranceProvider}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">{buttonLabel}</button>
    </form>
  );
};

export default PatientForm;
