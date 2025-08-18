import React, { useContext } from "react";
import "./MartCaseStudy.css";
import Mart_Sys from "../../Assets/martsys.png";
import Mart_DB from "../../Assets/martdb.png";
import { ThemeContext } from "../../../contexts/theme";
import Footer from "../../Footer/Footer";

const MartCaseStudy = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div className={`mart-container ${themeName === "dark" ? "dark" : ""}`}>
    <a style={{ padding: "6px", display: "inline-block", border: "1px solid" }} href="/">
        Go Back
      </a>
      <h1 className="mart-title">MulMart Case Study</h1>

      {/* Project Overview */}
      <section className="mart-section">
        <h2>Project Overview</h2>
        <p>
          <strong>MulMart</strong> is a full featured online marketplace where
          multiple vendors can list products, and customers can browse, filter,
          and purchase items. Built using React for the frontend, this platform
          offers user authentication, product search, vendor dashboards,
          cart/wishlist functionality, and responsive design. Deployed on Vercel
          with the codebase available on GitHub.
        </p>
      </section>

      {/* Video Demo */}
      <section className="mart-section">
        <h2>🎥 Demo Walkthrough</h2>
        <div className="mart-video">
          <iframe
            src="https://www.youtube.com/embed/Q951iWyOXgA"
            title="MulMart Demo"
            allowFullScreen
            width="100%"
            height="400"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mart-section">
        <h2>Tech Stack</h2>
        <ul className="mart-list">
          <li>
            <strong>Frontend:</strong> React, Tailwind CSS
          </li>
          <li>
            <strong>State & API:</strong> Redux, RTK Query / Axios
          </li>
          <li>
            <strong>Routing:</strong> React Router
          </li>
          <li>
            <strong>Storage:</strong> LocalStorage (for cart & auth tokens)
          </li>
          <li>
            <strong>Deployment:</strong> Vercel
          </li>
        </ul>
      </section>

      {/* Key Features & Challenges */}
      <section className="mart-section">
        <div className="mart-features">
          <div className="mart-col">
            <h3>🛠️ Key Features</h3>
            <ul className="mart-list">
              <li>Multi vendor registration & dashboard</li>
              <li>Product search, filters & categories</li>
              <li>Shopping cart and wishlist functionality</li>
              <li>Customer and vendor authentication</li>
              <li>Responsive UI across devices</li>
            </ul>
          </div>
          <div className="mart-col">
            <h3>⚠️ Challenges & Solutions</h3>
            <ul className="mart-list">
              <li>
                🔄 Managing complex state: used Redux Toolkit and normalized
                store slices
              </li>
              <li>
                📦 Dynamic routing for vendors/products: leveraged React Router
                nesting
              </li>
              <li>
                💾 Persistent cart and user sessions: synced Redux store with
                LocalStorage
              </li>
              <li>
                🚀 Ensuring fast load times: optimized images and code‑split
                routes
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="mart-section">
        <h2>System Architecture</h2>
        <p>
          High-level view of application structure—how components, state stores,
          and backend services interact.
        </p>
        <img
          src={Mart_Sys}
          alt="System Architecture Diagram"
          className="mart-img"
        />
      </section>

      {/* DB / Data Architecture */}
      <section className="mart-section">
        <h2>DB & Data Flow</h2>
        <p>
          Diagram outlining data models (Users, Vendors, Products, Orders) and
          API interactions.
        </p>
        <img
          src={Mart_DB}
          alt="Database Architecture Diagram"
          className="mart-img"
        />
      </section>

      {/* Future Roadmap */}
      <section className="mart-section">
        <h2>🔮 Future Roadmap</h2>
        <ul className="mart-list">
          <li>Admin panel for vendor onboarding and management</li>
          <li>Payment gateway integration (Stripe/PayPal)</li>
          <li>Real time chat between buyers and vendors</li>
          <li>Ratings, reviews, and recommendation engine</li>
        </ul>
      </section>

      {/* Project Links */}
      <section className="mart-section">
        <h2>🔗 Project Links</h2>
        <ul className="mart-link-list">
          <li>
            <a
              href="https://multivendor-e-shop-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </li>
          <li>
            <a
              href="https://github.com/its-hafsa04/Multivendor-e-shop"
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
export default MartCaseStudy;
