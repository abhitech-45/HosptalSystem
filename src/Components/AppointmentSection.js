// import { useState } from "react";
// import ApiService from "../Service/ApiService"; // Replace with your actual API service

// function AppointmentsSection() {
//   const [startTo, setStartTo] = useState("");
//   const [filteredAppointments, setFilteredAppointments] = useState([]);
//   const [msg, setMsg] = useState("");

//   const apiService = new ApiService();

//   const handleFilterSubmit = (e) => {
//     e.preventDefault();

//     if (!startTo) {
//       setMsg("Please select a date to filter.");
//       setFilteredAppointments([]);
//       return;
//     }

//     apiService
//       .getAppointmentsByStartTo(startTo)
//       .then((response) => {
//         if (response.data.length === 0) {
//           setMsg("No appointments found for this date.");
//           setFilteredAppointments([]);
//         } else {
//           setFilteredAppointments(response.data);
//           setMsg("");
//         }
//       })
//       .catch((error) => {
//         setMsg("Failed to fetch appointments.");
//       });
//   };

//   return (
//     <div>
//       <h2>Filter Appointments</h2>
//       <form onSubmit={handleFilterSubmit}>
//         <input
//           type="date"
//           value={startTo}
//           onChange={(e) => setStartTo(e.target.value)}
//         />
//         <button type="submit">Filter by Date</button>
//       </form>

//       {/* Display the message if any */}
//       {msg && <p>{msg}</p>}

//       {/* Display filtered appointments */}
//       <div>
//         {filteredAppointments.map((appointment) => (
//           <div key={appointment.appointmentId}>
//             <h3>Appointment ID: {appointment.appointmentId}</h3>
//             {/* Display more details as needed */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AppointmentsSection;
