// // import { useState, useEffect } from "react";
// // import ApiService from "../Service/ApiService";
// // import AppointmentCard from "./AppointmentCard";

// // function FilterAppointment() {
// //   const [appointments, setAppointments] = useState([]); // All appointments
// //   const [filteredAppointments, setFilteredAppointments] = useState([]); // Filtered appointments
// //   const [startTo, setStartTo] = useState(""); // State for selected date
// //   const [msg, setMsg] = useState(""); // Message for feedback

// //   const apiService = new ApiService();

// //   // Fetch all appointments when the component is mounted
// //   useEffect(() => {
// //     apiService.getAllAppointments()
// //       .then((response) => {
// //         setAppointments(response.data); // Store all appointments
// //         // setFilteredAppointments(response.data); // Initially show all appointments
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching appointments:", error);
// //         setMsg("Failed to fetch appointments.");
// //       });
// //   }, []); // Empty dependency array means this will run once when the component mounts

// //   // Handle the date input change
// //   const handleDateChange = (e) => {
// //     setStartTo(e.target.value);
// //   };

// //   // Handle the filter submit action
// //   const handleFilterSubmit = (e) => {
// //     e.preventDefault();

// //     if (!startTo) {
// //       setMsg("Please select a date to filter.");
// //       setFilteredAppointments([]); // Clear the displayed appointments
// //       return;
// //     }

// //     // Filter appointments based on the selected startTo date
// //     const filtered = appointments.filter((appointment) => {
// //       return appointment.startTo === startTo; // Compare the dates in YYYY-MM-DD format
// //     });

// //     if (filtered.length === 0) {
// //       setFilteredAppointments([]); // Clear the displayed appointments if no matches
// //       setMsg("No appointments found for this date.");
// //     } else {
// //       setFilteredAppointments(filtered);
// //       setMsg(""); // Clear any previous messages
// //     }
// //   };

// //   // Inbuilt styles
// //   const styles = {
// //     container: {
// //       padding: "20px",
// //       marginTop: "20px",
// //       backgroundColor: "#f9f9f9",
// //       borderRadius: "8px",
// //       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// //     },
// //     header: {
// //       color: "#333",
// //       marginBottom: "20px",
// //       fontSize: "1.8rem",
// //       textAlign: "center",
// //     },
// //     form: {
// //       display: "flex",
// //       justifyContent: "center",
// //       marginBottom: "20px",
// //     },
// //     input: {
// //       padding: "10px",
// //       fontSize: "1rem",
// //       border: "1px solid #ccc",
// //       borderRadius: "4px",
// //     },
// //     button: {
// //       padding: "10px 20px",
// //       backgroundColor: "#007bff",
// //       color: "white",
// //       border: "none",
// //       borderRadius: "4px",
// //       cursor: "pointer",
// //       marginLeft: "10px",
// //     },
// //     buttonHover: {
// //       backgroundColor: "#0056b3",
// //     },
// //     msg: {
// //       color: "#d9534f",
// //       textAlign: "center",
// //       marginBottom: "20px",
// //     },
// //     appointmentsContainer: {
// //       display: "flex",
// //       flexWrap: "wrap",
// //       gap: "20px",
// //       justifyContent: "flex-start",
// //     },
// //     noAppointments: {
// //       textAlign: "center",
// //       color: "#555",
// //       fontSize: "1.2rem",
// //     },
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h1 style={styles.header}>Filter Appointments by Start Date</h1>

// //       {/* Filter Form */}
// //       <form onSubmit={handleFilterSubmit} style={styles.form}>
// //         <input
// //           type="date"
// //           value={startTo}
// //           onChange={handleDateChange}
// //           style={styles.input}
// //         />
// //         <button
// //           type="submit"
// //           style={styles.button}
// //           onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
// //           onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
// //         >
// //           Filter
// //         </button>
// //       </form>

// //       {/* Message */}
// //       {msg && <p style={styles.msg}>{msg}</p>}

// //       {/* Display the filtered appointments */}
// //       <div style={styles.appointmentsContainer}>
// //         {filteredAppointments.length > 0 ? (
// //           filteredAppointments.map((appointment) => (
// //             <AppointmentCard key={appointment.appointmentId} appointment={appointment} />
// //           ))
// //         ) : (
// //           <p style={styles.noAppointments}>No appointments to display.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default FilterAppointment;





// import { useState } from "react";
// import ApiService from "../Service/ApiService";
// import AppointmentCard from "./AppointmentCard";

// function FilterAppointment() {
//   const [filteredAppointments, setFilteredAppointments] = useState([]); // Filtered appointments
//   const [startTo, setStartTo] = useState(""); // State for selected date
//   const [msg, setMsg] = useState(""); // Message for feedback

//   const apiService = new ApiService();

//   // Handle the date input change
//   const handleDateChange = (e) => {
//     setStartTo(e.target.value);
//   };

//   // Handle the filter submit action (Fetch appointments by startTo)
//   const handleFilterSubmit = (e) => {
//     e.preventDefault();

//     if (!startTo) {
//       setMsg("Please select a date to filter.");
//       setFilteredAppointments([]); // Clear the displayed appointments
//       return;
//     }

//     // Call the API to fetch appointments by startTo date
//     apiService.getAppointmentsByStartTo(startTo)
//       .then((response) => {
//         const appointments = response.data;
//         if (appointments.length === 0) {
//           setFilteredAppointments([]); // Clear the displayed appointments if no matches
//           setMsg("No appointments found for this date.");
//         } else {
//           setFilteredAppointments(appointments);
//           setMsg(""); // Clear any previous messages
//         }
//       })
//       .catch((error) => {
//         setMsg("Failed to fetch appointments.");
//         console.error("Error fetching appointments:", error);
//       });
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



// // import { useState } from "react";
// // import AppointmentSection from "./AppointmentSection";
// // import NurseSection from "./NurseSection";
// // import PhysicianSection from "./PhysicianSection";
// // // import RoomSection from "./RoomSection";

// // function FilterAppointment() {
// //   const [activeTab, setActiveTab] = useState("appointments");

// //   return (
// //     <div>
// //       <div>
// //         {/* Tabs for navigating sections */}
// //         <button onClick={() => setActiveTab("appointments")}>Appointments</button>
// //         <button onClick={() => setActiveTab("nurse")}>Nurse</button>
// //         <button onClick={() => setActiveTab("physician")}>Physician</button>
// //         <button onClick={() => setActiveTab("room")}>Room Info</button>
// //       </div>

// //       {/* Render corresponding section based on the active tab */}
// //       {activeTab === "appointments" && <AppointmentSection />}
// //     {activeTab === "nurse" && <NurseSection />}
// //    {activeTab === "physician" && <PhysicianSection />}
// //     {/* //   {activeTab === "room" && <RoomSection />}   */}
// //     </div>
// //   );
// // }

// // export default FilterAppointment;

import { useState } from "react";
import ApiService from "../Service/ApiService";
import AppointmentCard from "./AppointmentCard"; // Component for appointments
import PhysicianCard from "./PhysicianCard"; // Component for physician details

function FilterAppointment() {
  const [filteredAppointments, setFilteredAppointments] = useState([]); // Filtered results (appointments or physicians)
  const [startTo, setStartTo] = useState(""); // State for selected date
  const [appointmentId, setAppointmentId] = useState(""); // State for appointment ID (for physician details)
  const [msg, setMsg] = useState(""); // Message for feedback
  const [filterType, setFilterType] = useState(""); // State to track the active filter type

  const apiService = new ApiService();

  // Handle the date input change
  const handleDateChange = (e) => {
    setStartTo(e.target.value);
  };

  // Handle the appointment ID input change
  const handlePhysicianIdChange = (e) => {
    setAppointmentId(e.target.value);
  };

  // Handle the filter submit action for start date
  const handleDateFilterSubmit = (e) => {
    e.preventDefault();

    if (!startTo) {
      setMsg("Please select a date to filter.");
      setFilteredAppointments([]); // Clear the displayed appointments
      setFilterType(""); // Clear the filter type
      return;
    }

    setFilterType("date"); // Set filter type to date
    apiService
      .getAppointmentsByStartTo(startTo)
      .then((response) => {
        const appointments = response.data;
        if (appointments.length === 0) {
          setFilteredAppointments([]); // Clear if no appointments match
          setMsg("No appointments found for the selected date.");
        } else {
          setFilteredAppointments(appointments);
          setMsg(""); // Clear any previous messages
        }
      })
      .catch((error) => {
        setMsg("Failed to fetch appointments by date.");
        console.error("Error fetching appointments by date:", error);
      });
  };

  // Handle the filter submit action for appointment ID to fetch physician details
  const handlePhysicianFilterSubmit = (e) => {
    e.preventDefault();

    if (!appointmentId) {
      setMsg("Please enter an appointment ID to filter.");
      setFilteredAppointments([]); // Clear the displayed appointments
      setFilterType(""); // Clear the filter type
      return;
    }

    setFilterType("physician"); // Set filter type to physician
    apiService
      .getPhysicianByAppointmentId(appointmentId)  // API call to fetch physician details based on appointmentId
      .then((response) => {
        const physicianDetails = response.data;
        if (!physicianDetails) {
          setFilteredAppointments([]); // Clear if no physician found
          setMsg("No physician found for the given appointment ID.");
        } else {
          setFilteredAppointments([physicianDetails]); // Set the physician details as the filtered result
          setMsg(""); // Clear any previous messages
        }
      })
      .catch((error) => {
        setMsg("Failed to fetch physician details.");
        console.error("Error fetching physician details:", error);
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
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "20px",
    },
    input: {
      padding: "10px",
      fontSize: "1rem",
      border: "1px solid #ccc",
      borderRadius: "4px",
      marginBottom: "10px",
      width: "100%",
      maxWidth: "400px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginBottom: "10px",
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
    physicianContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Filter Appointments</h1>

      {/* Filter Form for Date */}
      <form onSubmit={handleDateFilterSubmit} style={styles.form}>
        <input
          type="date"
          value={startTo}
          onChange={handleDateChange}
          placeholder="Start Date"
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Filter by Date
        </button>
      </form>

      {/* Filter Form for Appointment ID */}
      <form onSubmit={handlePhysicianFilterSubmit} style={styles.form}>
        <input
          type="text"
          value={appointmentId}
          onChange={handlePhysicianIdChange}
          placeholder="Appointment ID"
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          fetch Physician by appintmentId
        </button>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          fetch Nurse by appintmentId
        </button>
      </form>

      {/* Message */}
      {msg && <p style={styles.msg}>{msg}</p>}

      {/* Display the filtered results */}
      {filterType === "date" && (
        <div style={styles.appointmentsContainer}>
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((appointment) => (
              <AppointmentCard key={appointment.appointmentId} appointment={appointment} />
            ))
          ) : (
            <p style={styles.noAppointments}>No appointments found for the selected date.</p>
          )}
        </div>
      )}

{filterType === "physician" && (
  <div style={styles.physicianContainer}>
    {filteredAppointments.length > 0 ? (
      <PhysicianCard 
        key={filteredAppointments[0].physicianId} 
        physician={filteredAppointments[0]} // Pass the physician details as the prop
      />
    ) : (
      <p style={styles.noAppointments}>No physician found for the given appointment ID.</p>
    )}
  </div>
)}
    </div>
  );
}

export default FilterAppointment;

