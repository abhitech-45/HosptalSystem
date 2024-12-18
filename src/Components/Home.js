// // import { Link, Routes, Route } from "react-router-dom";
// // import Appointment from "./Appointment"; // Component to display appointment details
// // import AppointmentForm from "./AppointmentForm";
// // import NurseCard from "./NurseCard";

// // function Home() {
// //   return (
// //     <div>
// //       <nav className="navbar navbar-expand-lg navbar-light bg-light">
// //         <div className="container-fluid">
// //           <Link className="navbar-brand" to="/home">Hospital Management App</Link>
// //           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
// //             <span className="navbar-toggler-icon"></span>
// //           </button>
// //           <div className="collapse navbar-collapse" id="navbarNavDropdown">
// //             <ul className="navbar-nav">
// //               <li className="nav-item">
// //                 <Link className="nav-link" to="/appointments">Appointments</Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link className="nav-link" to="/create-appointment">Add Appointment</Link>
// //               </li>

// //               <li className="nav-item">
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </nav>

// //       <Routes>
// //         <Route path="/appointments" element={<Appointment />} />
// //         <Route path="/create-appointment" element={<AppointmentForm />} />
// //         <Route path="/nurseData" element={<NurseCard />} />
        
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default Home;

// import { Link, Routes, Route } from "react-router-dom";
// import Appointment from "./Appointment"; // Component to display appointment details
// import AppointmentForm from "./AppointmentForm";

// function Home() {
//   return (
//     <div className="home-container" style={{ background: 'linear-gradient(to right,rgb(193, 233, 244),rgb(174, 199, 228))', minHeight: '100vh' }}>
//       <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: '#004e92' }}>
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/home">
//             <h2 className="text-white">Hospital Management App</h2>
//           </Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNavDropdown">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link text-white" to="/appointments">Appointments</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-white" to="/create-appointment">Add Appointment</Link>
//               </li>
              
//             </ul>
//           </div>
//         </div>
//       </nav>

     

//       <Routes>
//         <Route path="/appointments" element={<Appointment />} />
//         <Route path="/create-appointment" element={<AppointmentForm />} />
//       </Routes>
//     </div>
//   );
// }

// export default Home;



import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Appointment from "./Appointment";
import AppointmentForm from "./AppointmentForm";

function Home() {
  return (
    <div className="home-container" style={{ background: 'linear-gradient(to right, rgb(193, 233, 244), rgb(174, 199, 228))', minHeight: '100vh' }}>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: '#004e92' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <h2 className="text-white">Hospital Management App</h2>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/appointments">Appointments</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/create-appointment">Add Appointment</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/create-appointment" element={<AppointmentForm />} />
      </Routes>
    </div>
  );
}

export default Home;
