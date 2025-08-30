import React, { useContext,useEffect } from "react";
import "./RealEstateApp.css";
import RealEstate_Sys from "../../Assets/taniva estate sys.png";
import RealEstate_DB from "../../Assets/taniva estate db.png";
import { ThemeContext } from "../../../contexts/theme";
import Footer from "../../Footer/Footer";

const RealEstateCaseStudy = () => {
  const [{ themeName }] = useContext(ThemeContext);
  
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);
  return (
    <div className={`ninja-container ${themeName === "dark" ? "dark" : ""}`}>
      <a
        style={{ padding: "6px", display: "inline-block", border: "1px solid" }}
        href="/"
      >
        Go Back
      </a>
      <h1 className="ninja-title">Real Estate MERN App Case Study</h1>

      {/* Project Description */}
      <section className="ninja-section">
        <h2>Project Overview</h2>
        <p>
          <strong>Real Estate MERN App</strong> is a comprehensive property
          marketplace platform built with the MERN stack (MongoDB, Express,
          React, Node.js). It features property listings, advanced search
          filters, user authentication, property management, and booking
          functionality. The platform supports multiple user roles including
          buyers, sellers, and agents, with secure image uploads, interactive
          maps integration, and real-time messaging. The application implements
          modern UI/UX principles with responsive design and includes features
          like property favorites, virtual tours, and integrated payment
          processing for premium listings.
        </p>
      </section>

      {/* Video */}
      <section className="ninja-section">
        <h2>Demo Walkthrough</h2>
        <div className="ninja-video">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/Z5goHf_GYqM"
            title="Real Estate MERN App Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="ninja-section">
        <h2>Tech Stack</h2>
        <ul className="ninja-list">
          <li>
            <strong>Frontend:</strong> React,Tailwind
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js, RESTful APIs
          </li>
          <li>
            <strong>Database:</strong> MongoDB with Mongoose ODM
          </li>
          <li>
            <strong>Authentication:</strong> JWT (JSON Web Tokens), OAuth 2.0
          </li>
          <li>
            <strong>File Storage:</strong> Cloudinary for image uploads
          </li>
          <li>
            <strong>Payment:</strong> Stripe for premium features
          </li>
          <li>
            <strong>Deployment:</strong> Vercel (Frontend), Vercel (Backend),
            MongoDB Atlas
          </li>
        </ul>
      </section>

      {/* Features & Challenges */}
      <section className="ninja-section ninja-features">
        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 45%" }}>
            <h3>Features</h3>
            <ul className="ninja-list">
              <li>Property listing creation and management</li>
              <li>Advanced search with filters (location, price, type)</li>
              <li>Interactive maps with property markers</li>
              <li>User authentication and role-based access</li>
              <li>Image gallery with drag-and-drop upload</li>
              <li>Favorites and wishlist functionality</li>
              <li>Contact forms and inquiry management</li>
              <li>Responsive design for all devices</li>
              <li>Property comparison tool</li>
              <li>Virtual tour integration</li>
            </ul>
          </div>
          <div style={{ flex: "1 1 45%" }}>
            <h3>Challenges & Solutions</h3>
            <ul className="ninja-list">
              <li>
                Image optimization: implemented Cloudinary auto-optimization and
                lazy loading
              </li>
              <li>
                Search performance: created MongoDB indexes and implemented
                pagination
              </li>
              <li>
                Map integration: handled geolocation services and marker
                clustering
              </li>
              <li>
                File upload security: implemented file type validation and size
                limits
              </li>
              <li>
                State management: used Redux Toolkit for complex application
                state
              </li>
              <li>
                Mobile responsiveness: implemented progressive web app features
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="ninja-section">
        <h2>System Architecture</h2>
        <p>
          The following diagram illustrates the comprehensive system
          architecture showing how the React frontend interacts with the Express
          backend, MongoDB database, and third-party services like Cloudinary
          and Google Maps through well-structured API endpoints.
        </p>
        <img
          src={RealEstate_Sys}
          alt="Real Estate System Architecture Diagram"
          className="ninja-img"
        />
      </section>

      {/* DB Architecture */}
      <section className="ninja-section">
        <h2>Database Design & Data Flow</h2>
        <p>
          Database schema showing relationships between Users, Properties,
          Inquiries, and Favorites collections, along with the complete data
          flow from property creation to user interactions and search
          functionality.
        </p>
        <img
          src={RealEstate_DB}
          alt="Database Design and Data Flow Diagram"
          className="ninja-img"
        />
      </section>

      {/* API Endpoints */}
      <section className="ninja-section">
        <h2>API Endpoints</h2>
        <ul className="ninja-list">
          <li>
            <strong>Properties:</strong> GET/POST/PUT/DELETE /api/properties
          </li>
          <li>
            <strong>Search:</strong> GET /api/properties/search with query
            parameters
          </li>
          <li>
            <strong>Users:</strong> Authentication and profile management
          </li>
          <li>
            <strong>Favorites:</strong> POST/DELETE /api/users/favorites
          </li>
          <li>
            <strong>Inquiries:</strong> POST /api/inquiries for contact forms
          </li>
          <li>
            <strong>File Upload:</strong> POST /api/upload for image handling
          </li>
          <li>
            <strong>Maps:</strong> GET /api/properties/nearby for location-based
            search
          </li>
        </ul>
      </section>

      {/* Security Features */}
      <section className="ninja-section">
        <h2>Security & Performance</h2>
        <ul className="ninja-list">
          <li>JWT-based authentication with refresh tokens</li>
          <li>Input validation and sanitization using Joi</li>
          <li>Image upload security with file type and size validation</li>
          <li>Rate limiting for API endpoints</li>
          <li>CORS configuration for secure cross-origin requests</li>
          <li>MongoDB injection prevention</li>
          <li>Encrypted sensitive data storage</li>
          <li>Image optimization and CDN delivery</li>
          <li>Database indexing for fast search queries</li>
          <li>Caching implementation with Redis</li>
        </ul>
      </section>

      {/* Future Roadmap */}
      <section className="ninja-section">
        <h2>Future Roadmap</h2>
        <ul className="ninja-list">
          <li>Real-time chat between buyers and sellers</li>
          <li>AI-powered property recommendations</li>
          <li>Mortgage calculator integration</li>
          <li>Virtual reality (VR) property tours</li>
          <li>Mobile app development (React Native)</li>
          <li>Advanced analytics dashboard for agents</li>
          <li>Integration with MLS (Multiple Listing Service)</li>
          <li>Blockchain-based property verification</li>
          <li>Smart contracts for property transactions</li>
          <li>Multi-language support</li>
        </ul>
      </section>

      {/* Links */}
      <section className="ninja-section">
        <h2>Project Links</h2>
        <ul className="ninja-link-list">
          <li>
            <a
              href="https://taniva.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </li>
          <li>
            <a
              href="https://github.com/TaniaRajpoot/MERN-Real-Estate"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default RealEstateCaseStudy;
