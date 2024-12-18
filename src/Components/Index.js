import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Index() {
  return (
    <div>
      {/* Navbar with Shadow */}
      <Navbar expand="lg" style={{ backgroundColor: '#ff66b2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ color: '#ffffff', fontWeight: 'bold' }}>Evergreen Healthcare</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" style={{ color: '#ffffff', fontWeight: 'bold' }}>Home</Nav.Link>
              <Nav.Link href="#services" style={{ color: '#ffffff', fontWeight: 'bold' }}>Services</Nav.Link>
              <Nav.Link href="#about" style={{ color: '#ffffff', fontWeight: 'bold' }}>About Us</Nav.Link>
              <Nav.Link href="#contact" style={{ color: '#ffffff', fontWeight: 'bold' }}>Contact</Nav.Link>
              <NavDropdown title="Login as" id="basic-nav-dropdown" style={{ color: '#ffffff' }}>
                {/* Link for Admin */}
                <NavDropdown.Item as={Link} to="/home" style={{ fontWeight: 'bold' }}>Admin</NavDropdown.Item>
                <NavDropdown.Item href="#physician" style={{ fontWeight: 'bold' }}>Physician</NavDropdown.Item>
                <NavDropdown.Item href="#receptionist" style={{ fontWeight: 'bold' }}>Receptionist</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content Section with Cover Image */}
      <Container fluid
        style={{
          backgroundImage: 'url("https://cdna.artstation.com/p/marketplace/presentation_assets/002/964/164/large/file.jpg?1693155098")', // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          marginTop: '0', // Remove default margin
          color: '#f9f9f9', // Light color for better contrast with the pink tones
        }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <Row className="justify-content-center text-center" style={{ zIndex: 1 }}>
          <Col lg={8} md={10} sm={12}>
            <h1 className="display-4" style={{ color: "#ffb3d9", fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
              Welcome to Evergreen Healthcare
            </h1> {/* Soft Pink for Headline */}
            <p className="lead" style={{ color: "#ff66b2", fontWeight: 'bold', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)' }}>
              Your health is our priority. We provide world-class healthcare services with compassion.
            </p>
            <Button variant="success" size="lg" as={Link} to="/services">
              Explore Our Services
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Hospital Services Cards Section with Shadows */}
      <Container fluid className="mt-5">
        <Row className="mt-5">
          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card bg="info" text="white" className="shadow-lg">
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Emergency Care</Card.Title>
                <Card.Text style={{ fontWeight: 'bold' }}>
                  24/7 emergency care with a dedicated team of healthcare professionals.
                </Card.Text>
                <Button variant="outline-light" as={Link} to="/services/emergency">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card bg="warning" text="dark" className="shadow-lg">
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Consultation</Card.Title>
                <Card.Text style={{ fontWeight: 'bold' }}>
                  Get expert consultations with our experienced doctors in various specialties.
                </Card.Text>
                <Button variant="outline-dark" as={Link} to="/services/consultation">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card bg="success" text="white" className="shadow-lg">
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Diagnostics</Card.Title>
                <Card.Text style={{ fontWeight: 'bold' }}>
                  Advanced diagnostic services to get accurate results for better treatment.
                </Card.Text>
                <Button variant="outline-light" as={Link} to="/services/diagnostics">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* About Us Section */}
        <Row className="mt-5 bg-light py-5">
          <Col lg={6} md={12}>
            <h2 className="text-primary" style={{ fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>About Our Hospital</h2>
            <p className="text-muted" style={{ fontWeight: 'bold' }}>
            Established with a vision to provide comprehensive and compassionate healthcare, Evergreen Healthcare offers a wide range of medical services, from emergency care to specialized consultations, diagnostics, and treatments.
            </p>
          </Col>
          <Col lg={6} md={12}>
            <img
              src="https://static1.squarespace.com/static/618caae4b0100b73d31a572a/t/661d740bfc109b403452ed6f/1713206292128/Screenshot+2024-04-15+at+2.37.43+PM.png?format=1500w"
              alt="Hospital"
              className="img-fluid rounded"
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              
            />
          </Col>
        </Row>
      </Container>

      {/* Footer with Shadow */}
      <footer className="bg-dark text-white text-center py-4" style={{ boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.2)' }}>
        <p>&copy; 2024 Evergreen Healthcare | All Rights Reserved</p>
        <p>Contact us at: <a href="mailto:contact@hospitalsystem.com" className="text-white" style={{ fontWeight: 'bold' }}>contact@hospitalsystem.com</a></p>
      </footer>
    </div>
  );
}

export default Index;
