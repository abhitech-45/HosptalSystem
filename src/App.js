import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Components/Home';
// import AppointmentForm from './Components/AppointmentForm';
// import Navbar from './Components/Navbar';  // Import the Navbar component
// import Navbar from "./Components/Navbar.css"; // import your Navbar component

// import Appointment from './Components/Appointment';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/App.css'; // Global CSS

function App() {
  return (
    <BrowserRouter>
      <Home></Home>

      </BrowserRouter>
  );
}

export default App