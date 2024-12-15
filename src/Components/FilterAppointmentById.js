// import { useState } from "react";
// import ApiService from "../Service/ApiService";
// import AppointmentCard from "./AppointmentCard";

// function FilterAppointmentByID() {
//   const [filteredAppointments, setFilteredAppointments] = useState([]);
//   const [msg, setMsg] = useState("");
//   const [startTo, setStartTo] = useState(""); // Start date for filtering
//   const [appointmentId, setAppointmentId] = useState(""); // Appointment ID
//   const [nurseId, setNurseId] = useState(""); // Nurse ID
//   const [physicianId, setPhysicianId] = useState(""); // Physician ID
//   const [patientId, setPatientId] = useState(""); // Patient ID
//   const [date, setDate] = useState(""); // Date for filtering

//   const apiService = new ApiService();

//   const handleDateChange = (e) => setStartTo(e.target.value);
//   const handleAppointmentIdChange = (e) => setAppointmentId(e.target.value);
//   const handleNurseIdChange = (e) => setNurseId(e.target.value);
//   const handlePhysicianIdChange = (e) => setPhysicianId(e.target.value);
//   const handlePatientIdChange = (e) => setPatientId(e.target.value);
//   const handleFilterDateChange = (e) => setDate(e.target.value);

//   // Function to fetch appointments by startTo date
//   const handleFilterByDate = (e) => {
//     e.preventDefault();
//     if (!startTo) {
//       setMsg("Please select a date.");
//       setFilteredAppointments([]);
//       return;
//     }

//     apiService.getAppointmentsByStartDate(startTo)
//       .then((response) => {
//         setFilteredAppointments(response.data);
//         setMsg("");
//       })
//       .catch((error) => {
//         setMsg("Failed to fetch appointments.");
//         console.error(error);
//       });
//   };

//   // Function to fetch nurse details by appointment ID
//   const handleGetNurse = (e) => {
//     e.preventDefault();
//     if (!appointmentId) {
//       setMsg("Please enter an appointment ID.");
//       return;
//     }

//     apiService.getNurseByAppointmentId(appointmentId)
//       .then((response) => {
//         setMsg(`Nurse: ${response.data.name}`);
//       })
//       .catch((error) => {
//         setMsg("Failed to fetch nurse.");
//         console.error(error);
//       });
//   };

//   // Function to fetch examination room by appointment ID
//   const handleGetExaminationRoom = (e) => {
//     e.preventDefault();
//     if (!appointmentId) {
//       setMsg("Please enter an appointment ID.");
//       return;
//     }

//     apiService.getExaminationRoomByAppointmentId(appointmentId)
//       .then((response) => {
//         setMsg(`Examination Room: ${response.data}`);
//       })
//       .catch((error) => {
//         setMsg("Failed to fetch examination room.");
//         console.error(error);
//       });
//   };

//   // Fetch physicians by patient ID
//   const handleGetPhysiciansByPatientId = (e) => {
//     e.preventDefault();
//     if (!patientId) {
//       setMsg("Please enter a patient ID.");
//       return;
//     }

//     apiService.getPhysicianListByPatientId(patientId)
//       .then((response) => {
//         setMsg(`Physicians: ${response.data.map(p => p.name).join(", ")}`);
//       })
//       .catch((error) => {
//         setMsg("Failed to fetch physicians.");
//         console.error(error);
//       });
//   };

//   // Get patients checked by a nurse or physician on a specific date
//   const handleGetPatientsByNurseOrPhysician = (e, type) => {
//     e.preventDefault();
//     if (!nurseId && !physicianId) {
//       setMsg("Please enter a nurse or physician ID.");
//       return;
//     }
//     if (!date) {
//       setMsg("Please enter a date.");
//       return;
//     }

//     const fetchPatients = type === "nurse" ? apiService.getPatientsCheckedByNurseOnDate(nurseId, date) :
//                                                apiService.getPatientsCheckedByPhysicianOnDate(physicianId, date);
    
//     fetchPatients
//       .then((response) => {
//         setMsg(`Patients: ${response.data.map(p => p.name).join(", ")}`);
//       })
//       .catch((error) => {
//         setMsg("Failed to fetch patients.");
//         console.error(error);
//       });
//   };

//   // Get room information by patient ID and date
//   const handleGetRoomInfo = (e) => {
//     e.preventDefault();
//     if (!patientId || !date) {
//       setMsg("Please enter both patient ID and date.");
//       return;
//     }

//     apiService.getRoomByPatientIdAndDate(patientId, date)
//       .then((response) => {
//         setMsg(`Room: ${response.data}`);
//       })
//       .catch((error) => {
//         setMsg("Failed to fetch room information.");
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <h1>Filter and View Appointment Details</h1>

//       {/* Filter Appointments by Date */}
//       <form onSubmit={handleFilterByDate}>
//         <input type="date" value={startTo} onChange={handleDateChange} />
//         <button type="submit">Filter by Date</button>
//       </form>

//       {/* Get Nurse by Appointment */}
//       <form onSubmit={handleGetNurse}>
//         <input type="number" placeholder="Enter Appointment ID" value={appointmentId} onChange={handleAppointmentIdChange} />
//         <button type="submit">Get Nurse</button>
//       </form>

//       {/* Get Examination Room by Appointment */}
//       <form onSubmit={handleGetExaminationRoom}>
//         <input type="number" placeholder="Enter Appointment ID" value={appointmentId} onChange={handleAppointmentIdChange} />
//         <button type="submit">Get Examination Room</button>
//       </form>

//       {/* Get Physicians by Patient ID */}
//       <form onSubmit={handleGetPhysiciansByPatientId}>
//         <input type="number" placeholder="Enter Patient ID" value={patientId} onChange={handlePatientIdChange} />
//         <button type="submit">Get Physicians</button>
//       </form>

//       {/* Get Patients Checked by Nurse or Physician on a Date */}
//       <form onSubmit={(e) => handleGetPatientsByNurseOrPhysician(e, "nurse")}>
//         <input type="number" placeholder="Enter Nurse ID" value={nurseId} onChange={handleNurseIdChange} />
//         <input type="date" value={date} onChange={handleFilterDateChange} />
//         <button type="submit">Get Patients by Nurse on Date</button>
//       </form>

//       <form onSubmit={(e) => handleGetPatientsByNurseOrPhysician(e, "physician")}>
//         <input type="number" placeholder="Enter Physician ID" value={physicianId} onChange={handlePhysicianIdChange} />
//         <input type="date" value={date} onChange={handleFilterDateChange} />
//         <button type="submit">Get Patients by Physician on Date</button>
//       </form>

//       {/* Get Room Information */}
//       <form onSubmit={handleGetRoomInfo}>
//         <input type="number" placeholder="Enter Patient ID" value={patientId} onChange={handlePatientIdChange} />
//         <input type="date" value={date} onChange={handleFilterDateChange} />
//         <button type="submit">Get Room Info</button>
//       </form>

//       {/* Displaying the Message */}
//       {msg && <p>{msg}</p>}

//       {/* Display the filtered appointments */}
//       <div>
//         {filteredAppointments.length > 0 ? (
//           filteredAppointments.map((appointment) => (
//             <AppointmentCard key={appointment.appointmentId} appointment={appointment} />
//           ))
//         ) : (
//           <p>No appointments to display.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default FilterAppointmentByID;
