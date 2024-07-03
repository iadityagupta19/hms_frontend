
# Hospital Management System Frontend

This is the frontend section of the Hospital Management System (HMS) project. The frontend is built using React.js and interacts with a Spring Boot backend. The application includes features for managing patients, doctors, and appointments.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/hms-frontend.git
    cd hms-frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Running the Application

To start the development server, run:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

- `src/`: Contains the source code of the application.
  - `components/`: Contains React components used in the application.
    - `AppointmentForm.js`: Component for adding and editing appointments.
    - `AppointmentList.js`: Component for listing all appointments.
    - `PatientList.js`: Component for listing all patients.
  - `App.js`: Main application component.
  - `index.js`: Entry point of the application.
- `public/`: Contains static assets.
- `List.css`: Contains styles for the list components.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.<br>
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Components

### AppointmentForm.js

This component is used for adding and editing appointments. It includes fields for patient ID, doctor ID, appointment time, and status. It uses `axios` for making HTTP requests to the backend.

### AppointmentList.js

This component displays a list of all appointments. It allows editing and deleting appointments. The "Edit" button is styled in blue, and the "Delete" button is styled in red.

### PatientList.js

This component displays a list of all patients in a table format. It allows editing and deleting patients. The "Edit" button is styled in blue, and the "Delete" button is styled in red.

## Styling

Styles for the list components are defined in `List.css`. It includes styles for the container, buttons, and table.

## API Endpoints

The application interacts with the following backend API endpoints:

- `GET /api/appointments`: Fetch all appointments.
- `POST /api/appointments`: Add a new appointment.
- `GET /api/appointments/:id`: Fetch an appointment by ID.
- `PUT /api/appointments/:id`: Update an appointment by ID.
- `DELETE /api/appointments/:id`: Delete an appointment by ID.

- `GET /api/patients`: Fetch all patients.
- `POST /api/patients`: Add a new patient.
- `GET /api/patients/:id`: Fetch a patient by ID.
- `PUT /api/patients/:id`: Update a patient by ID.
- `DELETE /api/patients/:id`: Delete a patient by ID.

and similar for doctors

