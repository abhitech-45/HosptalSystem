import { Link } from "react-router-dom";
import './AppointmentCard.css';

function PhysicianCard(props) {
  // Access the physician details directly from the props
  const { physicianId, name, position, ssn } = props.physician;

  return (
    <div className="appointment-card">
      <div className="appointment-card-header">
        <h5>Physician ID: {physicianId}</h5>
      </div>
      <div className="appointment-card-body">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Position:</strong> {position}</p>
        <p><strong>SSN:</strong> {ssn}</p>
      </div>
    </div>
  );
}

export default PhysicianCard;


// import './AppointmentCard.css';

// function PhysicianCard(props) {
//   return (
//     <div className="physician-card">
//       <div className="physician-card-header">
//         <h5>{props.physician.name}</h5>
//       </div>
//       <div className="physician-card-body">
//         <p><strong>Position:</strong> {props.physician.position}</p>
//         <p><strong>SSN:</strong> {props.physician.ssn}</p>
//       </div>
//     </div>
//   );
// }

// export default PhysicianCard;