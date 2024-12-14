// import { Link } from "react-router-dom";

// function AppointmentCard(props) {
//   return (
//     <div className="col-md-4 mb-4">
//       <div className="card appointmentCard">
//         <div className="card-header text-center bg-info text-white">
//           <h5>Appointment ID: {props.appointment.appointmentId}</h5>
//         </div>
//         <div className="card-body">
//           {/* Appointment Info */}
//           <h5 className="card-title">Physician ID: {props.appointment.physician.physicianId}</h5>
//           <p className="card-text"><strong>Patient ID:</strong> {props.appointment.patient.patientId}</p>
//           <p className="card-text"><strong>Start Date:</strong> {props.appointment.startTo}</p>
//           <p className="card-text"><strong>End Date:</strong> {props.appointment.endTo}</p>
//           <p className="card-text"><strong>Start Time:</strong> {props.appointment.startTime}</p>
//           <p className="card-text"><strong>End Time:</strong> {props.appointment.endTime}</p>
//           <p className="card-text"><strong>Examination Room:</strong> {props.appointment.examinationRoom}</p>
  
//           {/* Update Button (optional if you want to edit an appointment) */}
//           <Link to={"/updateAppointment/" + props.appointment.id} className="btn btn-outline-primary btn-lg">
//             Update
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AppointmentCard;


import { Link } from "react-router-dom";
import './AppointmentCard.css';

function AppointmentCard(props) {
  return (
    <div className="appointment-card">
      <div className="appointment-card-header">
        <h5>Appointment ID: {props.appointment.appointmentId}</h5>
      </div>
      <div className="appointment-card-body">
        <p><strong>Physician ID:</strong> {props.appointment.physician.physicianId}</p>
        <p><strong>Patient ID:</strong> {props.appointment.patient.patientId}</p>
        <p><strong>Start Date:</strong> {props.appointment.startTo} | <strong>End Date:</strong> {props.appointment.endTo}</p>
        <p><strong>Start Time:</strong> {props.appointment.startTime} | <strong>End Time:</strong> {props.appointment.endTime}</p>

        <p><strong>Room:</strong> {props.appointment.examinationRoom}</p>
        
        <Link to={"/updateAppointment/" + props.appointment.id} className="btn btn-update">
          Update
        </Link>
      </div>
    </div>
  );
}

export default AppointmentCard;
