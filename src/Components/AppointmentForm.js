import React, { useState } from 'react';
import "./AppointForm.css"
const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    examinationRoom: '',
    physicianId: '',
    nurseId: '',
    patientId: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle time input change and format to HH:mm:ss
  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    let formattedTime = value;

    // Format time to include seconds (HH:mm:ss)
    if (formattedTime.length === 5) {
      formattedTime = `${formattedTime}:00`;
    }
    setFormData({
      ...formData,
      [name]: formattedTime,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      {/* Header Section - Navbar */}
      <div className="hero_area">
        <div className="hero_bg_box">
          <img src="images/hero-bg.png" alt="Background" />
        </div>

        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <span>Orthoc</span>
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="departments.html">
                      Departments
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="doctors.html">
                      Doctors
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact Us
                    </a>
                  </li>
                  <form className="form-inline">
                    <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </div>
      {/* End Header Section */}

      {/* Appointment Form Section */}
      <section className="appointment_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Schedule an Appointment</h2>
            <p>Please fill in the details below to schedule your appointment.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="startTime">Start Time (HH:mm:ss)</label>
              <input
                type="text"
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={handleTimeChange} // Custom handler for time format
                className="form-control"
                placeholder="Enter time (HH:mm:ss)"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="endTime">End Time (HH:mm:ss)</label>
              <input
                type="text"
                id="endTime"
                name="endTime"
                value={formData.endTime}
                onChange={handleTimeChange} // Custom handler for time format
                className="form-control"
                placeholder="Enter time (HH:mm:ss)"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="examinationRoom">Examination Room</label>
              <input
                type="text"
                id="examinationRoom"
                name="examinationRoom"
                value={formData.examinationRoom}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter room name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="physicianId">Physician ID</label>
              <input
                type="number"
                id="physicianId"
                name="physicianId"
                value={formData.physicianId}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="nurseId">Nurse ID</label>
              <input
                type="number"
                id="nurseId"
                name="nurseId"
                value={formData.nurseId}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="patientId">Patient ID</label>
              <input
                type="number"
                id="patientId"
                name="patientId"
                value={formData.patientId}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <button type="submit">Submit Appointment</button>
          </form>
        </div>
      </section>
      {/* End Appointment Form Section */}

      {/* Footer Section */}
      <footer className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 footer_col">
              <h4>Contact</h4>
              <div className="footer_contact">
                <div className="contact_link_box">
                  <a href="tel:+1123456789">+1 123 456 789</a>
                  <a href="mailto:info@orthoc.com">info@orthoc.com</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer_col">
              <h4>About Us</h4>
              <p>We provide top-notch orthopedic care and support for our patients.</p>
            </div>
            <div className="col-md-6 col-lg-3 footer_col">
              <h4>Links</h4>
              <div className="footer_links">
                <a href="about.html">About</a>
                <a href="services.html">Services</a>
                <a href="contact.html">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer Section */}
    </div>
  );
};

export default AppointmentForm;
