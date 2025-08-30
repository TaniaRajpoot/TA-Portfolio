import React, { useContext, useEffect } from "react";
import "./GreenCart.css";
import GreenCart_Sys from "../../Assets/Auth_DB.png";
import GreenCart_DB from "../../Assets/Auth_Sys.png";
import { ThemeContext } from "../../../contexts/theme";
import Footer from "../../Footer/Footer";

const GreenCart = () => {
  const [{ themeName }] = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`ninja-container ${themeName === "dark" ? "dark" : ""}`}>
      <a href="/">Go Back</a>
      <h1 className="ninja-title">GreenCart Grocery App Case Study</h1>

      {/* Project Overview */}
      <section className="ninja-section">
        <h2>Project Overview</h2>
        <p>
          <strong>GreenCart</strong> is an online grocery marketplace
          application built to provide a seamless shopping experience.
          Customers can browse fresh groceries, vegetables, fruits, and
          essential items with real-time stock updates. The app includes
          user authentication, shopping cart functionality, secure online
          payments, order tracking, and admin dashboard for managing products
          and inventory.
        </p>
      </section>

      {/* Demo Video */}
      <section className="ninja-section">
        <h2>Demo Walkthrough</h2>
        <div className="ninja-video">
           <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/yHoTHZ6f4bU"
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
          <li><strong>Frontend:</strong> React, Tailwind CSS</li>
          <li><strong>Backend:</strong> Node.js, Express.js, REST APIs</li>
          <li><strong>Database:</strong> MongoDB with Mongoose</li>
          <li><strong>Authentication:</strong> JWT & OAuth 2.0</li>
          <li><strong>Payment:</strong> Stripe API</li>
          <li><strong>Deployment:</strong> Vercel (Frontend & Backend)</li>
        </ul>
      </section>

      {/* Features & Challenges */}
      <section className="ninja-section ninja-features">
        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 45%" }}>
            <h3>Features</h3>
            <ul className="ninja-list">
              <li>User-friendly grocery browsing</li>
              <li>Shopping cart and wishlist</li>
              <li>Secure checkout & payments</li>
              <li>Order history & tracking</li>
              <li>Admin dashboard for managing products</li>
              <li>Responsive design for all devices</li>
              <li>Search and filter for products</li>
              <li>Image upload for products</li>
            </ul>
          </div>
          <div style={{ flex: "1 1 45%" }}>
            <h3>Challenges & Solutions</h3>
            <ul className="ninja-list">
              <li>Real-time stock updates via MongoDB change streams</li>
              <li>Payment security using Stripe and encrypted data</li>
              <li>Performance optimization for large product lists</li>
              <li>Mobile responsiveness and PWA features</li>
              <li>State management with Redux Toolkit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="ninja-section">
        <h2>System Architecture</h2>
        <p>
          Diagram showing interaction between React frontend, Express backend,
          MongoDB, Stripe payment gateway, and admin panel for product
          management.
        </p>
        <img
          src={GreenCart_Sys}
          alt="GreenCart System Architecture"
          className="ninja-img"
        />
      </section>

      {/* Database Design */}
      <section className="ninja-section">
        <h2>Database Design & Data Flow</h2>
        <p>
          Database schema includes Users, Orders, Products, Categories,
          and Inventory collections with relationships and data flow
          for seamless shopping experience.
        </p>
        <img
          src={GreenCart_DB}
          alt="GreenCart Database Design"
          className="ninja-img"
        />
      </section>

      {/* API Endpoints */}
      <section className="ninja-section">
        <h2>API Endpoints</h2>
        <ul className="ninja-list">
          <li><strong>Products:</strong> GET/POST/PUT/DELETE /api/products</li>
          <li><strong>Users:</strong> Authentication & Profile /api/users</li>
          <li><strong>Orders:</strong> POST /api/orders, GET /api/orders/:id</li>
          <li><strong>Cart:</strong> GET/POST /api/cart</li>
          <li><strong>Payments:</strong> POST /api/payments</li>
        </ul>
      </section>

      {/* Security Features */}
      <section className="ninja-section">
        <h2>Security & Performance</h2>
        <ul className="ninja-list">
          <li>JWT authentication & refresh tokens</li>
          <li>Input validation with Joi</li>
          <li>Secure Stripe integration</li>
          <li>Rate limiting and CORS configuration</li>
          <li>Database indexing & caching with Redis</li>
        </ul>
      </section>

      {/* Roadmap */}
      <section className="ninja-section">
        <h2>Future Roadmap</h2>
        <ul className="ninja-list">
          <li>Real-time order notifications</li>
          <li>AI-based product recommendations</li>
          <li>Mobile app with React Native</li>
          <li>Subscription-based grocery plans</li>
          <li>Multi-language support</li>
        </ul>
      </section>

      {/* Links */}
      <section className="ninja-section">
        <h2>Project Links</h2>
        <ul className="ninja-link-list">
          <li>
            <a
              href="https://green-cart-frontend-eta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </li>
          <li>
            <a
              href="https://github.com/TaniaRajpoot/GreenCart"
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

export default GreenCart;
