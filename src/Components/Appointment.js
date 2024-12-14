import { useEffect, useState } from "react";
import ApiService from "../Service/ApiService";
import AppointmentCard from "./AppointmentCard";  // Assuming AppointmentCard exists to display the appointments

function Appointment() {
  const apiService = new ApiService();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    console.log("rendering appointments");
    apiService.getAllAppointments()
      .then((res) => {
        console.log(res.data);
        setAppointments(res.data);
      })
      .catch((err) => {
        alert(err.response ? err.response.data : "Failed to fetch appointments");
        console.log(err);
      });
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", gap: "20px" }}>
      {
        appointments.map((appointment) => (
          <AppointmentCard key={appointment.appointmentId} appointment={appointment} />  // Use a key for each appointment card
        ))
      }
    </div>
  );
}

export default Appointment;


