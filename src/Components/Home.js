// import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import './Home.css'; // Custom CSS for Home page

// function Home() {
//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Hospital Management System</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNavDropdown">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/appointments">Get Appointment Details</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/create-appointment">Create Appointment</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Home;


// src/components/Navbar.js
// import { Link, NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">Hospital Management System</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavDropdown">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link" to="/appointments" activeClassName="active-link">
//                 Get Appointment Details
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/create-appointment" activeClassName="active-link">
//                 Create Appointment
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;




import { Link, Routes, Route } from "react-router-dom";
import Appointment from "./Appointment"; // Component to display appointment details
import AppointmentForm from "./AppointmentForm";
// import Filterappointment from "./FilterAppointment";
import NurseCard from "./NurseCard";
import PhysicianCard from "./PhysicianCard"
// import Physician from "./Physician"; // Component for managing physicians
// import Nurse from "./Nurse"; // Component for managing nurses
// import Patient from "./Patient"; // Component for managing patients

function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">Hospital Management App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/appointments">Appointments</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create-appointment">Add Appointment</Link>
              </li>

              <li className="nav-item">
                {/* <Link className="nav-link" to="/filterappointment">Filter Appointment</Link> */}
              </li>

              

              {/* <li className="nav-item">
                <Link className="nav-link" to="/physician">Physicians</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nurse">Nurses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/patient">Patients</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/create-appointment" element={<AppointmentForm />} />
        <Route path="/nurseData" element={<NurseCard />} />
        
{/* 
        <Route path="/physician/:physicianId" element={<PhysicianCard/>} /> */}

        {/* Other routes */}
    

        {/* <Route path="/filterappointment" element={<Filterappointment />} /> */}

        {/* <Route path="/physician" element={<Physician />} />
        <Route path="/nurse" element={<Nurse />} />
        <Route path="/patient" element={<Patient />} /> */}
        
      </Routes>
    </div>
  );
}

export default Home;
