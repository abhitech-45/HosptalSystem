// import { useState } from "react";
// import ApiService from "../Service/ApiService";
// import { useNavigate } from "react-router-dom";

// function AppointmentForm() {
//   const [appointment, setAppointment] = useState({
//     startTo: "",
//     endTo: "",
//     startTime: "",
//     endTime: "",
//     examinationRoom: "",
//     physicianId: "",
//     nurseId: "",
//     patientId: ""
//   });

//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();
//   const api = new ApiService();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAppointment((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !appointment.startTo ||
//       !appointment.endTo ||
//       !appointment.startTime ||
//       !appointment.endTime ||
//       !appointment.examinationRoom ||
//       !appointment.physicianId ||
//       !appointment.nurseId ||
//       !appointment.patientId
//     ) {
//       setMsg("All fields are required.");
//       return;
//     }

//     api.bookAppointment(appointment)
//       .then((response) => {
//         setMsg("Appointment added successfully!");
//         navigate("/get-appointment-details");
//       })
//       .catch((error) => {
//         setMsg("Failed to add appointment. Please try again.");
//       });
//   };

//   return (
//     <div className="container">
//       <h1 className="form-title">Create Appointment</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Form Fields for Appointment */}
//         {/* Start Date */}
//         <div className="form-group">
//           <label htmlFor="startTo">Start Date</label>
//           <input type="date" id="startTo" name="startTo" value={appointment.startTo} onChange={handleChange} className="form-control" />
//         </div>

//         {/* End Date */}
//         <div className="form-group">
//           <label htmlFor="endTo">End Date</label>
//           <input type="date" id="endTo" name="endTo" value={appointment.endTo} onChange={handleChange} className="form-control" />
//         </div>

//         {/* Start Time */}
//         <div className="form-group">
//           <label htmlFor="startTime">Start Time</label>
//           <input type="time" id="startTime" name="startTime" value={appointment.startTime} onChange={handleChange} className="form-control" />
//         </div>

//         {/* End Time */}
//         <div className="form-group">
//           <label htmlFor="endTime">End Time</label>
//           <input type="time" id="endTime" name="endTime" value={appointment.endTime} onChange={handleChange} className="form-control" />
//         </div>

//         {/* Examination Room */}
//         <div className="form-group">
//           <label htmlFor="examinationRoom">Examination Room</label>
//           <input type="text" id="examinationRoom" name="examinationRoom" value={appointment.examinationRoom} onChange={handleChange} className="form-control" />
//         </div>

//         {/* Physician ID */}
//         <div className="form-group">
//           <label htmlFor="physicianId">Physician ID</label>
//           <input type="number" id="physicianId" name="physicianId" value={appointment.physicianId} onChange={handleChange} className="form-control" />
//         </div>

//         {/* Nurse ID */}
//         <div className="form-group">
//           <label htmlFor="nurseId">Nurse ID</label>
//           <input type="number" id="nurseId" name="nurseId" value={appointment.nurseId} onChange={handleChange} className="form-control" />
//         </div>

//         {/* Patient ID */}
//         <div className="form-group">
//           <label htmlFor="patientId">Patient ID</label>
//           <input type="number" id="patientId" name="patientId" value={appointment.patientId} onChange={handleChange} className="form-control" />
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="btn btn-primary">Submit Appointment</button>
//       </form>

//       {/* Message (success or error) */}
//       <div className="form-msg">{msg}</div>
//     </div>
//   );
// }

// export default AppointmentForm;




import { useState } from "react";
import ApiService from "../Service/ApiService";
import { useNavigate } from "react-router-dom";

function AppointmentForm() {
  const [appointment, setAppointment] = useState({
    startTo: "",
    endTo: "",
    startTime: "",
    endTime: "",
    examinationRoom: "",
    physicianId: "",
    nurseId: "",
    patientId: ""
  });

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const api = new ApiService();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !appointment.startTo ||
      !appointment.endTo ||
      !appointment.startTime ||
      !appointment.endTime ||
      !appointment.examinationRoom ||
      !appointment.physicianId ||
      !appointment.nurseId ||
      !appointment.patientId
    ) {
      setMsg("All fields are required.");
      return;
    }

    // Send the appointment details to the backend to create a new appointment
    api.bookAppointment(appointment)
      .then((response) => {
        setMsg("Appointment added successfully!");
        // Navigate to the page that displays all appointments after successful creation
        navigate("/appointments");
      })
      .catch((error) => {
        setMsg("Failed to add appointment. Please try again.");
      });
  };

  return (
    <div className="container">
      <h1 className="form-title">Create Appointment</h1>
      <form onSubmit={handleSubmit}>
        {/* Start Date */}
        <div className="form-group">
          <label htmlFor="startTo">Start Date</label>
          <input type="date" id="startTo" name="startTo" value={appointment.startTo} onChange={handleChange} className="form-control" />
        </div>

        {/* End Date */}
        <div className="form-group">
          <label htmlFor="endTo">End Date</label>
          <input type="date" id="endTo" name="endTo" value={appointment.endTo} onChange={handleChange} className="form-control" />
        </div>

        {/* Start Time */}
        <div className="form-group">
          <label htmlFor="startTime">Start Time</label>
          <input type="time" id="startTime" name="startTime" value={appointment.startTime} onChange={handleChange} className="form-control" />
        </div>

        {/* End Time */}
        <div className="form-group">
          <label htmlFor="endTime">End Time</label>
          <input type="time" id="endTime" name="endTime" value={appointment.endTime} onChange={handleChange} className="form-control" />
        </div>

        {/* Examination Room */}
        <div className="form-group">
          <label htmlFor="examinationRoom">Examination Room</label>
          <input type="text" id="examinationRoom" name="examinationRoom" value={appointment.examinationRoom} onChange={handleChange} className="form-control" />
        </div>

        {/* Physician ID */}
        <div className="form-group">
          <label htmlFor="physicianId">Physician ID</label>
          <input type="number" id="physicianId" name="physicianId" value={appointment.physicianId} onChange={handleChange} className="form-control" />
        </div>

        {/* Nurse ID */}
        <div className="form-group">
          <label htmlFor="nurseId">Nurse ID</label>
          <input type="number" id="nurseId" name="nurseId" value={appointment.nurseId} onChange={handleChange} className="form-control" />
        </div>

        {/* Patient ID */}
        <div className="form-group">
          <label htmlFor="patientId">Patient ID</label>
          <input type="number" id="patientId" name="patientId" value={appointment.patientId} onChange={handleChange} className="form-control" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Submit Appointment</button>
      </form>

      {/* Message (success or error) */}
      <div className="form-msg">{msg}</div>
    </div>
  );
}

export default AppointmentForm;
