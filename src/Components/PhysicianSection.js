// import { useState } from "react";
// import ApiService from "../Service/ApiService"; // Replace with your actual API service

// function PhysicianSection() {
//   const [physicianId, setPhysicianId] = useState("");
//   const [physicianDetails, setPhysicianDetails] = useState(null);
//   const [msg, setMsg] = useState("");

//   const apiService = new ApiService();

//   const handleGetPhysician = (e) => {
//     e.preventDefault();

//     apiService
//       .getPhysicianByAppointmentId(physicianId)
//       .then((response) => {
//         setPhysicianDetails(response.data);
//         setMsg("");
//       })
//       .catch((error) => {
//         setMsg("Failed to fetch physician details.");
//         setPhysicianDetails(null);
//       });
//   };

//   return (
//     <div>
//       <h2>Get Physician Information</h2>
//       <form onSubmit={handleGetPhysician}>
//         <input
//           type="number"
//           placeholder="Enter Physician ID"
//           value={physicianId}
//           onChange={(e) => setPhysicianId(e.target.value)}
//         />
//         <button type="submit">Get Physician</button>
//       </form>

//       {/* Display the message if any */}
//       {msg && <p>{msg}</p>}

//       {/* Display physician details */}
//       {physicianDetails && (
//         <div>
//           <h3>Physician Details</h3>
//           <p>Name: {physicianDetails.name}</p>
//           <p>Name: {physicianDetails.position}</p>

//           {/* Display other physician details */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default PhysicianSection;
