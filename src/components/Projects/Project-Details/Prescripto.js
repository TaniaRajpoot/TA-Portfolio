import React, { useContext, useEffect } from "react";
import "./Prescripto.css";
import Prescripto_Sys from "../../Assets/Auth_Sys.png"; // System architecture image
import Prescripto_DB from "../../Assets/Auth_DB.png"; // Database design image
import { ThemeContext } from "../../../contexts/theme";
import Footer from "../../Footer/Footer";

const PrescriptoCaseStudy = () => {
  const [{ themeName }] = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`ninja-container ${themeName === "dark" ? "dark" : ""}`}>
      <a href="/" style={{ padding: "6px", display: "inline-block", border: "1px solid" }}>
        Go Back
      </a>

      <h1 className="ninja-title">Prescripto Doctor Booking System Case Study</h1>

      {/* Project Overview */}
      <section className="ninja-section">
        <h2>Project Overview</h2>
        <p>
          <strong>Prescripto</strong> is a comprehensive doctor booking system built for clinics and hospitals. It allows patients to register, search for doctors, book appointments, and access prescriptions online. Doctors can manage schedules, patient records, and provide virtual consultations. The platform ensures secure handling of sensitive medical data and supports multiple roles including patients, doctors, and admins.
        </p>
      </section>

      {/* Demo Video */}
      <section className="ninja-section">
        <h2>Demo Walkthrough</h2>
        <div className="ninja-video">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/xYY72W_heO0?start=123"
            title="Prescripto Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="ninja-section">
        <h2>Tech Stack</h2>
        <ul className="ninja-list">
          <li><strong>Frontend:</strong> React, Tailwind CSS</li>
          <li><strong>Backend:</strong> Node.js, Express.js, RESTful APIs</li>
          <li><strong>Database:</strong> MongoDB with Mongoose ODM</li>
          <li><strong>Authentication:</strong> JWT, OAuth 2.0</li>
          <li><strong>File Storage:</strong> Cloudinary for reports & profile images</li>
          <li><strong>Payment:</strong> Stripe (for consultation fees)</li>
          <li><strong>Deployment:</strong> Vercel (Frontend), Render (Backend)</li>
        </ul>
      </section>

      {/* Features & Challenges */}
      <section className="ninja-section ninja-features">
        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 45%" }}>
            <h3>Features</h3>
            <ul className="ninja-list">
              <li>Patient registration and profile management</li>
              <li>Doctor directory with specialization filters</li>
              <li>Appointment booking and scheduling</li>
              <li>Virtual consultations via video chat</li>
              <li>Prescription management and history tracking</li>
              <li>Admin dashboard for analytics and user management</li>
              <li>Secure payment gateway integration</li>
            </ul>
          </div>
          <div style={{ flex: "1 1 45%" }}>
            <h3>Challenges & Solutions</h3>
            <ul className="ninja-list">
              <li>Handling patient privacy: implemented secure JWT authentication</li>
              <li>Appointment clashes: added calendar conflict checks</li>
              <li>Data consistency: used MongoDB transactions for critical operations</li>
              <li>Video call stability: integrated WebRTC with fallback mechanisms</li>
              <li>Scalability: separated backend APIs for modularity and load balancing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="ninja-section">
        <h2>System Architecture</h2>
        <p>
          Diagram showing how the React frontend interacts with Express backend, MongoDB database, and third-party services like Cloudinary and Stripe through secure APIs.
        </p>
        <img src={Prescripto_Sys} alt="Prescripto System Architecture" className="ninja-img" />
      </section>

      {/* Database Design */}
      <section className="ninja-section">
        <h2>Database Design & Data Flow</h2>
        <p>
          Shows relationships between Patients, Doctors, Appointments, Prescriptions, and Payments, including data flow from booking to consultation.
        </p>
        <img src={Prescripto_DB} alt="Database Design Diagram" className="ninja-img" />
      </section>

      {/* API Endpoints */}
      <section className="ninja-section">
        <h2>API Endpoints</h2>
        <ul className="ninja-list">
          <li><strong>Patients:</strong> GET/POST /api/patients</li>
          <li><strong>Doctors:</strong> GET /api/doctors</li>
          <li><strong>Appointments:</strong> POST/GET/PUT /api/appointments</li>
          <li><strong>Prescriptions:</strong> GET/POST /api/prescriptions</li>
          <li><strong>Payments:</strong> POST /api/payments</li>
        </ul>
      </section>

      {/* Security & Performance */}
      <section className="ninja-section">
        <h2>Security & Performance</h2>
        <ul className="ninja-list">
          <li>JWT authentication with refresh tokens</li>
          <li>Input validation and sanitization using Joi</li>
          <li>Encrypted sensitive medical data storage</li>
          <li>Rate limiting for APIs</li>
          <li>Database indexing for fast queries</li>
          <li>Video streaming optimization</li>
        </ul>
      </section>

      {/* Future Roadmap */}
      <section className="ninja-section">
        <h2>Future Roadmap</h2>
        <ul className="ninja-list">
          <li>AI-based doctor recommendation system</li>
          <li>Mobile app development (React Native)</li>
          <li>Integration with pharmacy delivery services</li>
          <li>Real-time notifications for patients and doctors</li>
          <li>Advanced analytics dashboard for admins</li>
        </ul>
      </section>

      {/* Project Links */}
      <section className="ninja-section">
        <h2>Project Links</h2>
        <ul className="ninja-link-list">
          <li><a href="https://prescripto-booking-system.vercel.app" target="_blank" rel="noopener noreferrer">Live Site</a></li>
          <li><a href="https://github.com/TaniaRajpoot/Prescripto-Doctor-Booking-System" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default PrescriptoCaseStudy;
