import React, { useContext } from "react";
import "./AuthApp.css"; 
import Auth_Sys from "../../Assets/Auth_Sys.png"
import Auth_DB from "../../Assets/Auth_DB.png";
import { ThemeContext } from "../../../contexts/theme";
import Footer from "../../Footer/Footer";

const AuthCaseStudy = () => {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <div className={`ninja-container ${themeName === 'dark' ? 'dark' : ''}`}>
      <a style={{ padding: "6px", display: "inline-block", border: "1px solid" }} href="/">
        Go Back
      </a>
      <h1 className="ninja-title">Auth MERN App Case Study</h1>

      {/* Project Description */}
      <section className="ninja-section">
        <h2>Project Overview</h2>
        <p>
          <strong>Auth MERN App</strong> is a full-stack authentication system built
          with the MERN stack (MongoDB, Express, React, Node.js). It features user registration,
          login, logout, and protected routes using JSON Web Tokens (JWT). Passwords are securely
          hashed with bcrypt, and the app includes error handling, validation, and persistent sessions 
          via HTTP-only cookies. The frontend is built with React and styled for a clean user experience,
          while the backend manages user data and authentication logic using a RESTful API.
        </p>
      </section>

      {/* Video */}
      <section className="ninja-section">
        <h2>Demo Walkthrough</h2>
        <div className="ninja-video">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/WUSbkrc9jeU"
            title="Auth MERN App Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="ninja-section">
        <h2>Tech Stack</h2>
        <ul className="ninja-list">
          <li><strong>Frontend:</strong> React, CSS</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> MongoDB</li>
          <li><strong>Authentication:</strong> JWT (JSON Web Tokens)</li>
          <li><strong>Password Hashing:</strong> bcrypt</li>
          <li><strong>Deployment:</strong> Vercel (Frontend), MongoDB Atlas (Database)</li>
        </ul>
      </section>

      {/* Features & Challenges */}
      <section className="ninja-section ninja-features">
        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 45%" }}>
            <h3>Features</h3>
            <ul className="ninja-list">
              <li>User Registration & Login</li>
              <li>JWT-based Authentication</li>
              <li>Password hashing with bcrypt</li>
              <li>Protected routes and middleware</li>
              <li>HTTP-only cookies for security</li>
              <li>Form validation and error handling</li>
              <li>Responsive user interface</li>
              <li>Session persistence</li>
            </ul>
          </div>
          <div style={{ flex: "1 1 45%" }}>
            <h3>Challenges & Solutions</h3>
            <ul className="ninja-list">
              <li>Secure password handling: implemented bcrypt hashing with salt rounds</li>
              <li>Session management: used HTTP-only cookies to prevent XSS attacks</li>
              <li>Route protection: created middleware to verify JWT tokens</li>
              <li>CORS issues: configured proper CORS settings for cross-origin requests</li>
              <li>Token expiry handling: implemented refresh token logic</li>
            </ul>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="ninja-section">
        <h2>System Architecture</h2>
        <p>The following diagram shows the high-level system architecture — how the React frontend communicates with the Express backend and MongoDB database through RESTful API endpoints.</p>
        <img
          src={Auth_Sys}
          alt="System Architecture Diagram"
          className="ninja-img"
        />
      </section>

      {/* DB Architecture */}
      <section className="ninja-section">
        <h2>Database & Authentication Flow</h2>
        <p>Diagram illustrating the user authentication flow, from registration to login, including JWT generation and validation processes.</p>
        <img
          src={Auth_DB}
          alt="Database and Authentication Flow Diagram"
          className="ninja-img"
        />
      </section>

      {/* Security Features */}
      <section className="ninja-section">
        <h2>Security Features</h2>
        <ul className="ninja-list">
          <li>Password hashing with bcrypt (12 salt rounds)</li>
          <li>HTTP-only cookies to prevent XSS attacks</li>
          <li>JWT token expiration and refresh mechanisms</li>
          <li>Input validation and sanitization</li>
          <li>Protected routes with authentication middleware</li>
          <li>CORS configuration for secure cross-origin requests</li>
        </ul>
      </section>

      {/* Roadmap */}
      <section className="ninja-section">
        <h2>Future Roadmap</h2>
        <ul className="ninja-list">
          <li>Email verification for new user registration</li>
          <li>Password reset functionality via email</li>
          <li>OAuth integration (Google, Facebook)</li>
          <li>Two-factor authentication (2FA)</li>
          <li>User profile management with image upload</li>
          <li>Role-based access control (RBAC)</li>
          <li>Activity logging and audit trails</li>
        </ul>
      </section>

      {/* Links */}
      <section className="ninja-section">
        <h2>Project Links</h2>
        <ul className="ninja-link-list">
          <li>
            <a href="https://auth-mern-app-frontend-zeta.vercel.app" target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
          </li>
          <li>
            <a href="https://github.com/TaniaRajpoot/Auth-Mern-App" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default AuthCaseStudy;
