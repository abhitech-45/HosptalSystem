import { Link, Routes, Route } from "react-router-dom";
import Appointment from "./Appointment"; // To display list of appointments
import AppointmentForm from "./AppointmentForm"; // To create a new appointment

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Hospital Management System</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* Link to get appointment details */}
                <Link className="nav-link" to="/appointments">Get Appointment Details</Link>
              </li>
              <li className="nav-item">
                {/* Link to create an appointment */}
                <Link className="nav-link" to="/create-appointment">Create Appointment</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Define Routes for Appointment System */}
      <Routes>
        {/* Route to get the list of appointments */}
        <Route path="/appointments" element={<Appointment />} />

        {/* Route to create a new appointment */}
        <Route path="/create-appointment" element={<AppointmentForm />} />
      </Routes>
    </div>
  );
}

export default Home;
