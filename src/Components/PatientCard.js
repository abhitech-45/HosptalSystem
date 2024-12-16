import React from "react";
import "./PatientCard.css"; // Add custom styles if needed

function PatientCard({ patient }) {
  return (
    <div className="patient-card">
      <div className="patient-card-header">
        <h5>Patient ID: {patient.patientId}</h5>
      </div>
      <div className="patient-card-body">
        <p><strong>Name:</strong> {patient.patientName}</p>
        <p><strong>PhoneNo:</strong> {patient.patientPhoneNo}</p>
        <p><strong>Address:</strong> {patient.patientAddress}</p>
        <p><strong>insuranceId:</strong> {patient.insuranceId}</p>
      </div>
    </div>
  );
}

export default PatientCard;
