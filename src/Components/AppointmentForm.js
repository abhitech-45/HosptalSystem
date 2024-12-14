import React, { useState } from 'react';
import ApiService from '../Service/ApiService'; // Assuming you have an ApiService to handle the API requests
import { useNavigate } from 'react-router-dom';

function AppointmentForm() {
  const [appointment, setAppointment] = useState({
    startTo: '',
    endTo: '',
    startTime: '',
    endTime: '',
    examinationRoom: '',
    physicianId: '',
    nurseId: '',
    patientId: ''
  });

  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const api = new ApiService();

  // Handle input changes for all fields
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

    // Validate required fields (basic validation can be added)
    if (!appointment.startTo || !appointment.endTo || !appointment.startTime || !appointment.endTime || !appointment.examinationRoom || !appointment.physicianId || !appointment.nurseId || !appointment.patientId) {
      setMsg("All fields are required.");
      return;
    }

    // Post the appointment data to the backend
    api.bookAppointment(appointment)
      .then((response) => {
        setMsg("Appointment added successfully!");
        navigate('/appointments');  // Redirect to the appointments list page
      })
      .catch((error) => {
        setMsg("Failed to add appointment. Please try again.");
      });
  };

  return (
    <div className="container">
      <h1 className="form-title">Schedule an Appointment</h1>
      <form onSubmit={handleSubmit}>
        {/* Start Date */}
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

        {/* End Date */}
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

        {/* Start Time */}
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

        {/* End Time */}
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

        {/* Examination Room */}
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

        {/* Physician ID */}
        <div className="form-group">
          <label htmlFor="physicianId">Physician</label>
          <input
            type="number"
            id="physicianId"
            name="physicianId"
            value={appointment.physicianId}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Nurse ID */}
        <div className="form-group">
          <label htmlFor="nurseId">Nurse</label>
          <input
            type="number"
            id="nurseId"
            name="nurseId"
            value={appointment.nurseId}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Patient ID */}
        <div className="form-group">
          <label htmlFor="patientId">Patient</label>
          <input
            type="number"
            id="patientId"
            name="patientId"
            value={appointment.patientId}
            onChange={handleChange}
            className="form-control"
          />
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
