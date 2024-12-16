import React from "react";
import "./NurseCard.css"; // Add custom styles if needed

function NurseCard({ nurse }) {
  return (
    <div className="nurse-card">
      <div className="nurse-card-header">
        <h5>Nurse ID: {nurse.nurseId}</h5>
      </div>
      <div className="nurse-card-body">
        <p><strong>Name:</strong> {nurse.nurseName}</p>
        <p><strong>Position:</strong> {nurse.positionName}</p>
      </div>
    </div>
  );
}

export default NurseCard;

