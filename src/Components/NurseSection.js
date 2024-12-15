// import { useState } from "react";
// import ApiService from "../Service/ApiService"; // Replace with your actual API service

// function NurseSection() {
//   const [appointmentId, setAppointmentId] = useState("");
//   const [nurseDetails, setNurseDetails] = useState(null);
//   const [msg, setMsg] = useState("");

//   const apiService = new ApiService();

//   const handleGetNurse = (e) => {
//     e.preventDefault();

//     apiService
//       .getNurseByAppointmentId(appointmentId)
//       .then((response) => {
//         setNurseDetails(response.data);
//         setMsg("");
//       })
//       .catch((error) => {
//         setMsg("Failed to fetch nurse details.");
//         setNurseDetails(null);
//       });
//   };

//   return (
//     <div>
//       <h2>Get Nurse Information</h2>
//       <form onSubmit={handleGetNurse}>
//         <input
//           type="number"
//           placeholder="Enter Appointment ID"
//           value={appointmentId}
//           onChange={(e) => setAppointmentId(e.target.value)}
//         />
//         <button type="submit">Get Nurse</button>
//       </form>

//       {/* Display the message if any */}
//       {msg && <p>{msg}</p>}

//       {/* Display nurse details */}
//       {nurseDetails && (
//         <div>
//           <h3>Nurse Details</h3>
//           <p>Name: {nurseDetails.nurseName}</p>
//           {/* Display other nurse details */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default NurseSection;
