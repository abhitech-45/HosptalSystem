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




// src/components/AppointmentForm.js
import { useState } from "react";
import ApiService from "../Service/ApiService";
import { useNavigate } from "react-router-dom";
import App from "../App";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    api.bookAppointment(appointment)
      .then((response) => {
        setMsg("Appointment added successfully!");
        navigate("/appointments");
      })
      .catch((error) => {
        setMsg("Failed to add appointment. Please try again.");
      });
  };

  // return (
  //   <div className="container d-flex justify-content-center align-items-center min-vh-100">
  //     <div className="col-md-6 p-4 border rounded shadow-lg">
  //       <h1 className="text-center mb-4">Create Appointment</h1>
  //       <form onSubmit={handleSubmit}>
  //         {/* Start Date */}
  //         <div className="form-group mb-3">
  //           <label htmlFor="startTo">Start Date</label>
  //           <input type="date" id="startTo" name="startTo" value={appointment.startTo} onChange={handleChange} className="form-control" />
  //         </div>

  //         {/* End Date */}
  //         <div className="form-group mb-3">
  //           <label htmlFor="endTo">End Date</label>
  //           <input type="date" id="endTo" name="endTo" value={appointment.endTo} onChange={handleChange} className="form-control" />
  //         </div>

  //         {/* Start Time */}
  //         <div className="form-group mb-3">
  //           <label htmlFor="startTime">Start Time</label>
  //           <input type="time" id="startTime" name="startTime" value={appointment.startTime} onChange={handleChange} className="form-control" />
  //         </div>

  //         {/* End Time */}
  //         <div className="form-group mb-3">
  //           <label htmlFor="endTime">End Time</label>
  //           <input type="time" id="endTime" name="endTime" value={appointment.endTime} onChange={handleChange} className="form-control" />
  //         </div>

  //         {/* Examination Room */}
  //         <div className="form-group mb-3">
  //           <label htmlFor="examinationRoom">Examination Room</label>
  //           <input type="text" id="examinationRoom" name="examinationRoom" value={appointment.examinationRoom} onChange={handleChange} className="form-control" />
  //         </div>

  //         {/* Physician ID */}
  //         <div className="form-group mb-3">
  //           <label htmlFor="physicianId">Physician ID</label>
  //           <input type="number" id="physicianId" name="physicianId" value={appointment.physicianId} onChange={handleChange} className="form-control" />
  //         </div>

  //         {/* Nurse ID */}
  //         <div className="form-group mb-3">
  //           <label htmlFor="nurseId">Nurse ID</label>
  //           <input type="number" id="nurseId" name="nurseId" value={appointment.nurseId} onChange={handleChange} className="form-control" />
  //         </div>

  //         {/* Patient ID */}
  //         <div className="form-group mb-3">
  //           <label htmlFor="patientId">Patient ID</label>
  //           <input type="number" id="patientId" name="patientId" value={appointment.patientId} onChange={handleChange} className="form-control" />
  //         </div>

  //         {/* Submit Button */}
  //         <button type="submit" className="btn btn-primary btn-block">Submit Appointment</button>
  //       </form>

  //       {/* Message (success or error) */}
  //       <div className="form-msg mt-3 text-center">{msg}</div>
  //     </div>
  //   </div>
  // );



  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-8 p-4 border rounded shadow-lg">
        <h1 className="text-center mb-4">Create Appointment</h1>
        <form onSubmit={handleSubmit}>
          {/* Row for Start Date and End Date */}
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="startTo">Start Date</label>
                <input
                  type="date"
                  id="startTo"
                  name="startTo"
                  value={appointment.startTo}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="endTo">End Date</label>
                <input
                  type="date"
                  id="endTo"
                  name="endTo"
                  value={appointment.endTo}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>
  
          {/* Row for Start Time and End Time */}
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="startTime">Start Time</label>
                <input
                  type="time"
                  id="startTime"
                  name="startTime"
                  value={appointment.startTime}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="endTime">End Time</label>
                <input
                  type="time"
                  id="endTime"
                  name="endTime"
                  value={appointment.endTime}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>
  
          {/* Row for Examination Room and Physician ID */}
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="examinationRoom">Examination Room</label>
                <input
                  type="text"
                  id="examinationRoom"
                  name="examinationRoom"
                  value={appointment.examinationRoom}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="physicianId">Physician ID</label>
                <input
                  type="number"
                  id="physicianId"
                  name="physicianId"
                  value={appointment.physicianId}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>
  
          {/* Row for Nurse ID and Patient ID */}
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="nurseId">Nurse ID</label>
                <input
                  type="number"
                  id="nurseId"
                  name="nurseId"
                  value={appointment.nurseId}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="patientId">Patient ID</label>
                <input
                  type="number"
                  id="patientId"
                  name="patientId"
                  value={appointment.patientId}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>
  
          {/* Submit Button */}
          <div className="form-group text-center">
            <button type="submit" className="btn btn-primary btn-block">
              Submit Appointment
            </button>
          </div>
        </form>
  
        {/* Message (success or error) */}
        <div className="form-msg mt-3 text-center">{msg}</div>
      </div>
    </div>
  );
  

}

export default AppointmentForm;
