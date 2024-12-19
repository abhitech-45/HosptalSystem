import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Home';
// import AppointmentForm from './Components/AppointmentForm';
// import Navbar from './Components/Navbar';  // Import the Navbar component
// import Navbar from "./Components/Navbar.css"; // import your Navbar component

// import Appointment from './Components/Appointment';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/App.css'; // Global CSS
import Mainpage from "./Mainpage";
import Appointment from "./Components/Appointment";
import AppointmentForm from "./Components/AppointmentForm";

function App() {
  return (
    <BrowserRouter>
    <Routes>

 

     <Route path="/" element={<Mainpage />} />
      <Route path="/home" element={<Home />} />
        <Route path="/home/appointments" element={<Appointment />} />
        <Route path="/home/create-appointment" element={<AppointmentForm />} />

     </Routes>

      </BrowserRouter>
  );
}

export default App