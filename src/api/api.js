import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getPatients = () => axios.get(`${API_BASE_URL}/patients`);
export const addPatient = (patient) => axios.post(`${API_BASE_URL}/patients`, patient);
export const getPatientById = (id) => axios.get(`${API_BASE_URL}/patients/${id}`);
export const updatePatient = (id, patient) => axios.put(`${API_BASE_URL}/patients/${id}`, patient);
export const deletePatient = (id) => axios.delete(`${API_BASE_URL}/patients/${id}`);

export const getDoctors = () => axios.get(`${API_BASE_URL}/doctors`);
export const addDoctor = (doctor) => axios.post(`${API_BASE_URL}/doctors`, doctor);
export const getDoctorById = (id) => axios.get(`${API_BASE_URL}/doctors/${id}`);
export const updateDoctor = (id, doctor) => axios.put(`${API_BASE_URL}/doctors/${id}`, doctor);
export const deleteDoctor = (id) => axios.delete(`${API_BASE_URL}/doctors/${id}`);

export const getAppointments = () => axios.get(`${API_BASE_URL}/appointments`);
export const addAppointment = (appointment) => axios.post(`${API_BASE_URL}/appointments`, appointment);
export const getAppointmentById = (id) => axios.get(`${API_BASE_URL}/appointments/${id}`);
export const updateAppointment = (id, appointment) => axios.put(`${API_BASE_URL}/appointments/${id}`, appointment);
export const deleteAppointment = (id) => axios.delete(`${API_BASE_URL}/appointments/${id}`);
