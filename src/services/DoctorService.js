import axios from 'axios';

const API_URL = 'http://localhost:8080/api/doctors';

class DoctorService {
  getDoctors() {
    return axios.get(API_URL);
  }

  getDoctorById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  createDoctor(doctor) {
    return axios.post(API_URL, doctor);
  }

  updateDoctor(id, doctor) {
    return axios.put(`${API_URL}/${id}`, doctor);
  }

  deleteDoctor(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new DoctorService();
