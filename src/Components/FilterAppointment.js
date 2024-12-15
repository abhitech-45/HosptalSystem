// import { useState, useEffect } from "react";
// import ApiService from "../Service/ApiService";
// import AppointmentCard from "./AppointmentCard";

// function FilterAppointment() {
//   const [appointments, setAppointments] = useState([]); // All appointments
//   const [filteredAppointments, setFilteredAppointments] = useState([]); // Filtered appointments
//   const [startTo, setStartTo] = useState(""); // State for selected date
//   const [msg, setMsg] = useState(""); // Message for feedback

//   const apiService = new ApiService();

//   // Fetch all appointments when the component is mounted
//   useEffect(() => {
//     apiService.getAllAppointments()
//       .then((response) => {
//         setAppointments(response.data); // Store all appointments
//         // setFilteredAppointments(response.data); // Initially show all appointments
//       })
//       .catch((error) => {
//         console.error("Error fetching appointments:", error);
//         setMsg("Failed to fetch appointments.");
//       });
//   }, []); // Empty dependency array means this will run once when the component mounts

//   // Handle the date input change
//   const handleDateChange = (e) => {
//     setStartTo(e.target.value);
//   };

//   // Handle the filter submit action
//   const handleFilterSubmit = (e) => {
//     e.preventDefault();

//     if (!startTo) {
//       setMsg("Please select a date to filter.");
//       setFilteredAppointments([]); // Clear the displayed appointments
//       return;
//     }

//     // Filter appointments based on the selected startTo date
//     const filtered = appointments.filter((appointment) => {
//       return appointment.startTo === startTo; // Compare the dates in YYYY-MM-DD format
//     });

//     if (filtered.length === 0) {
//       setFilteredAppointments([]); // Clear the displayed appointments if no matches
//       setMsg("No appointments found for this date.");
//     } else {
//       setFilteredAppointments(filtered);
//       setMsg(""); // Clear any previous messages
//     }
//   };

//   // Inbuilt styles
//   const styles = {
//     container: {
//       padding: "20px",
//       marginTop: "20px",
//       backgroundColor: "#f9f9f9",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     },
//     header: {
//       color: "#333",
//       marginBottom: "20px",
//       fontSize: "1.8rem",
//       textAlign: "center",
//     },
//     form: {
//       display: "flex",
//       justifyContent: "center",
//       marginBottom: "20px",
//     },
//     input: {
//       padding: "10px",
//       fontSize: "1rem",
//       border: "1px solid #ccc",
//       borderRadius: "4px",
//     },
//     button: {
//       padding: "10px 20px",
//       backgroundColor: "#007bff",
//       color: "white",
//       border: "none",
//       borderRadius: "4px",
//       cursor: "pointer",
//       marginLeft: "10px",
//     },
//     buttonHover: {
//       backgroundColor: "#0056b3",
//     },
//     msg: {
//       color: "#d9534f",
//       textAlign: "center",
//       marginBottom: "20px",
//     },
//     appointmentsContainer: {
//       display: "flex",
//       flexWrap: "wrap",
//       gap: "20px",
//       justifyContent: "flex-start",
//     },
//     noAppointments: {
//       textAlign: "center",
//       color: "#555",
//       fontSize: "1.2rem",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>Filter Appointments by Start Date</h1>

//       {/* Filter Form */}
//       <form onSubmit={handleFilterSubmit} style={styles.form}>
//         <input
//           type="date"
//           value={startTo}
//           onChange={handleDateChange}
//           style={styles.input}
//         />
//         <button
//           type="submit"
//           style={styles.button}
//           onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
//           onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
//         >
//           Filter
//         </button>
//       </form>

//       {/* Message */}
//       {msg && <p style={styles.msg}>{msg}</p>}

//       {/* Display the filtered appointments */}
//       <div style={styles.appointmentsContainer}>
//         {filteredAppointments.length > 0 ? (
//           filteredAppointments.map((appointment) => (
//             <AppointmentCard key={appointment.appointmentId} appointment={appointment} />
//           ))
//         ) : (
//           <p style={styles.noAppointments}>No appointments to display.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default FilterAppointment;





import { useState } from "react";
import ApiService from "../Service/ApiService";
import AppointmentCard from "./AppointmentCard";

function FilterAppointment() {
  const [filteredAppointments, setFilteredAppointments] = useState([]); // Filtered appointments
  const [startTo, setStartTo] = useState(""); // State for selected date
  const [msg, setMsg] = useState(""); // Message for feedback

  const apiService = new ApiService();

  // Handle the date input change
  const handleDateChange = (e) => {
    setStartTo(e.target.value);
  };

  // Handle the filter submit action (Fetch appointments by startTo)
  const handleFilterSubmit = (e) => {
    e.preventDefault();

    if (!startTo) {
      setMsg("Please select a date to filter.");
      setFilteredAppointments([]); // Clear the displayed appointments
      return;
    }

    // Call the API to fetch appointments by startTo date
    apiService.getAppointmentsByStartTo(startTo)
      .then((response) => {
        const appointments = response.data;
        if (appointments.length === 0) {
          setFilteredAppointments([]); // Clear the displayed appointments if no matches
          setMsg("No appointments found for this date.");
        } else {
          setFilteredAppointments(appointments);
          setMsg(""); // Clear any previous messages
        }
      })
      .catch((error) => {
        setMsg("Failed to fetch appointments.");
        console.error("Error fetching appointments:", error);
      });
  };

  // Inbuilt styles
  const styles = {
    container: {
      padding: "20px",
      marginTop: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    header: {
      color: "#333",
      marginBottom: "20px",
      fontSize: "1.8rem",
      textAlign: "center",
    },
    form: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },
    input: {
      padding: "10px",
      fontSize: "1rem",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginLeft: "10px",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    msg: {
      color: "#d9534f",
      textAlign: "center",
      marginBottom: "20px",
    },
    appointmentsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "flex-start",
    },
    noAppointments: {
      textAlign: "center",
      color: "#555",
      fontSize: "1.2rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Filter Appointments by Start Date</h1>

      {/* Filter Form */}
      <form onSubmit={handleFilterSubmit} style={styles.form}>
        <input
          type="date"
          value={startTo}
          onChange={handleDateChange}
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Filter
        </button>
      </form>

      {/* Message */}
      {msg && <p style={styles.msg}>{msg}</p>}

      {/* Display the filtered appointments */}
      <div style={styles.appointmentsContainer}>
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appointment) => (
            <AppointmentCard key={appointment.appointmentId} appointment={appointment} />
          ))
        ) : (
          <p style={styles.noAppointments}>No appointments to display.</p>
        )}
      </div>
    </div>
  );
}

export default FilterAppointment;
