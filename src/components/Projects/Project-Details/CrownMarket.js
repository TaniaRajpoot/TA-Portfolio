import React, { useContext, useEffect } from "react";
import "./CrownMarket.css";
import crownHero from "../../Assets/crownmarket.png";
import MartSys from "../../Assets/martsys.png";
import MartDB from "../../Assets/martdb.png";
import { ThemeContext } from "../../../contexts/theme";
import Footer from "../../Footer/Footer";
import { FaExternalLinkAlt, FaGithub, FaShoppingCart, FaStore, FaUserShield, FaBolt } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiRedux, SiTailwindcss, SiSocketdotio, SiStripe, SiVercel } from "react-icons/si";

const CrownMarket = () => {
  const [{ themeName }] = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`crown-container ${themeName === "dark" ? "dark" : ""}`}>
      <a href="/" className="crown-back-btn">
        ← Back to Projects
      </a>

      <h1 className="crown-title">Crown Market</h1>
      <p className="crown-subtitle">
        Enterprise-Grade Full-Stack Multi-Vendor E-Commerce Marketplace
      </p>

      {/* Action Buttons */}
      <div className="crown-links-wrapper" style={{ justifyContent: "center", marginBottom: "2rem", marginTop: "-1rem" }}>
        <a
          href="https://multivender-pt6u.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="crown-btn-primary"
        >
          <FaExternalLinkAlt /> Live Demo
        </a>
        <a
          href="https://github.com/TaniaRajpoot/multivender"
          target="_blank"
          rel="noopener noreferrer"
          className="crown-btn-secondary"
        >
          <FaGithub /> GitHub Repository
        </a>
      </div>

      {/* Hero Preview Image */}
      <div className="crown-hero-img-wrap">
        <img
          src={crownHero}
          alt="Crown Market Multi-Vendor Platform"
          className="crown-hero-img"
        />
      </div>

      {/* Project Overview */}
      <section className="crown-section">
        <h2>Project Overview</h2>
        <p>
          <strong>Crown Market</strong> is a full-featured, scalable multi-vendor e-commerce platform built to seamlessly connect buyers, independent shop sellers, and platform administrators. Built with <strong>React 18</strong>, <strong>Node.js</strong>, <strong>Express 5</strong>, <strong>MongoDB Atlas</strong>, <strong>Socket.io</strong>, and <strong>Redux Toolkit</strong>, the application delivers high-performance catalog browsing, vendor store management, timed flash sale promotions, and robust checkout flows.
        </p>
        <p>
          The system supports multi-role access control, secure JWT-authenticated sessions via HTTP-only cookies, live buyer-seller WebSocket messaging, multi-gateway transactions with Stripe and PayPal, dynamic coupon discounts, and comprehensive analytical dashboards for vendors and platform admins.
        </p>

        <div className="crown-badges">
          <span className="crown-badge"><SiReact /> React 18 & Vite</span>
          <span className="crown-badge"><SiRedux /> Redux Toolkit</span>
          <span className="crown-badge"><SiTailwindcss /> Tailwind CSS</span>
          <span className="crown-badge"><SiNodedotjs /> Node.js</span>
          <span className="crown-badge"><SiExpress /> Express 5</span>
          <span className="crown-badge"><SiMongodb /> MongoDB Atlas</span>
          <span className="crown-badge"><SiSocketdotio /> Socket.io</span>
          <span className="crown-badge"><SiStripe /> Stripe & PayPal</span>
          <span className="crown-badge"><SiVercel /> Vercel</span>
        </div>
      </section>

      {/* Tech Stack Breakdown */}
      <section className="crown-section">
        <h2>Tech Stack Breakdown</h2>
        <div className="crown-grid-2">
          <div className="crown-card">
            <h3>Frontend Architecture</h3>
            <ul className="crown-list">
              <li><strong>Core & Build:</strong> React 18.3, Vite 7.2 (fast HMR and optimized asset bundling)</li>
              <li><strong>State Management:</strong> Redux Toolkit 2.8, React-Redux, and Redux Thunk for asynchronous state</li>
              <li><strong>Routing:</strong> React Router v7 for client-side routing & protected route guards</li>
              <li><strong>UI & Styling:</strong> Tailwind CSS v4, Material-UI (MUI Material v7 & MUI DataGrid)</li>
              <li><strong>HTTP Client:</strong> Axios with interceptors and cookie credentials</li>
              <li><strong>Payments:</strong> Stripe Elements SDK (`@stripe/react-stripe-js`) & PayPal JS SDK</li>
            </ul>
          </div>

          <div className="crown-card">
            <h3>Backend & Cloud Services</h3>
            <ul className="crown-list">
              <li><strong>Server Framework:</strong> Node.js with Express.js 5.1 REST API architecture</li>
              <li><strong>Database & ODM:</strong> MongoDB Atlas with Mongoose 8.17 schemas and indexing</li>
              <li><strong>Real-Time Messaging:</strong> Dedicated Socket.io 4.8 WebSocket gateway server</li>
              <li><strong>Authentication & Security:</strong> JSONWebToken (JWT), BcryptJS, Cookie-Parser, CORS policies</li>
              <li><strong>Media Storage:</strong> Multer memory buffer and Cloudinary CDN v2.9 for instant image delivery</li>
              <li><strong>Email Notifications:</strong> Nodemailer with SMTP activation token verification</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Platform Pillars */}
      <section className="crown-section">
        <h2>Core Platform Pillars</h2>
        <div className="crown-grid-2">
          <div className="crown-card">
            <h3><FaShoppingCart /> Buyer Experience</h3>
            <ul className="crown-list">
              <li><strong>Account Security:</strong> Secure sign-up with email activation tokens via Nodemailer.</li>
              <li><strong>Search & Discovery:</strong> Dynamic search with keyword suggestions, category filtering, and sorting.</li>
              <li><strong>Interactive Cart:</strong> Slide-over drawer with vendor-grouped cart items and auto calculations.</li>
              <li><strong>Multi-Gateway Checkout:</strong> Stripe credit cards, PayPal integration, and Cash on Delivery (COD).</li>
              <li><strong>Order Tracking:</strong> Live status indicators (Processing, Shipping, Delivered, Refunded).</li>
              <li><strong>Live Messaging:</strong> Real-time WebSocket chat directly with vendors from product pages.</li>
              <li><strong>Reviews & Ratings:</strong> Verified buyer product ratings and feedback submission.</li>
            </ul>
          </div>

          <div className="crown-card">
            <h3><FaStore /> Seller (Vendor) Portal</h3>
            <ul className="crown-list">
              <li><strong>Storefront Setup:</strong> Custom shop registration, branded logos, avatars, and descriptions.</li>
              <li><strong>Inventory Management:</strong> Create, catalog, and update products with multi-image Cloudinary uploads.</li>
              <li><strong>Flash Deals:</strong> Host promotional discount events with real-time countdown timers.</li>
              <li><strong>Coupon Generator:</strong> Create discount codes with minimum order thresholds and expiry dates.</li>
              <li><strong>Fulfillment & Logistics:</strong> Process incoming orders, update shipping stages, and handle refund requests.</li>
              <li><strong>Financial Balances:</strong> Real-time sales analytics, revenue balance tracking, and payout withdrawals.</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <div className="crown-card">
            <h3><FaUserShield /> Admin Governance Dashboard</h3>
            <ul className="crown-list">
              <li><strong>Marketplace Analytics:</strong> Real-time platform metrics for gross revenue, active sellers, registered buyers, and total orders.</li>
              <li><strong>User & Seller Moderation:</strong> Inspect, verify, and manage user and vendor storefront accounts.</li>
              <li><strong>Withdrawal Approvals:</strong> Review payout requests submitted by vendors, verify balances, and record payment transaction IDs.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="crown-section">
        <h2>System Architecture</h2>
        <p>
          The system architecture follows a decoupled, service-oriented model. The React SPA interfaces with an Express 5 API gateway handling authentication, role guards, and business logic, while a dedicated Socket.io instance handles bidirectional live messaging.
        </p>
        <img
          src={MartSys}
          alt="Crown Market System Architecture"
          className="crown-img"
        />
      </section>

      {/* Database Schema & Data Modeling */}
      <section className="crown-section">
        <h2>Database Schema & Entity Relationships</h2>
        <p>
          The MongoDB data architecture is designed with clear entity relationships and indexing for fast query execution across Users, Shops, Products, Orders, Carts, Events, and Reviews.
        </p>
        <img
          src={MartDB}
          alt="Crown Market Database Schema"
          className="crown-img"
        />
      </section>

      {/* API Endpoints Summary */}
      <section className="crown-section">
        <h2>RESTful API Architecture</h2>
        <p>Clean and modular API route design with specialized role guards:</p>
        <div className="crown-table-wrapper">
          <table className="crown-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>Endpoint</th>
                <th>Description</th>
                <th>Authorization</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>POST</strong></td>
                <td><code>/api/v2/user/create-user</code></td>
                <td>Register user & send activation mail</td>
                <td>Public</td>
              </tr>
              <tr>
                <td><strong>POST</strong></td>
                <td><code>/api/v2/user/activation</code></td>
                <td>Verify email account activation token</td>
                <td>Public</td>
              </tr>
              <tr>
                <td><strong>POST</strong></td>
                <td><code>/api/v2/user/login-user</code></td>
                <td>Authenticate user & issue HTTP-only cookie</td>
                <td>Public</td>
              </tr>
              <tr>
                <td><strong>POST</strong></td>
                <td><code>/api/v2/shop/create-shop</code></td>
                <td>Register and configure new seller storefront</td>
                <td>Public</td>
              </tr>
              <tr>
                <td><strong>POST</strong></td>
                <td><code>/api/v2/product/create-product</code></td>
                <td>Upload and catalog product with Cloudinary images</td>
                <td>Seller (Vendor)</td>
              </tr>
              <tr>
                <td><strong>GET</strong></td>
                <td><code>/api/v2/product/get-all-products</code></td>
                <td>Fetch marketplace catalog with filters & sorting</td>
                <td>Public</td>
              </tr>
              <tr>
                <td><strong>POST</strong></td>
                <td><code>/api/v2/event/create-event</code></td>
                <td>Schedule promotional flash sale event</td>
                <td>Seller (Vendor)</td>
              </tr>
              <tr>
                <td><strong>POST</strong></td>
                <td><code>/api/v2/order/create-order</code></td>
                <td>Process cart checkout and generate orders</td>
                <td>User (Buyer)</td>
              </tr>
              <tr>
                <td><strong>POST</strong></td>
                <td><code>/api/v2/payment/process</code></td>
                <td>Create Stripe PaymentIntent & verify capture</td>
                <td>User (Buyer)</td>
              </tr>
              <tr>
                <td><strong>POST</strong></td>
                <td><code>/api/v2/withdraw/create-withdraw-request</code></td>
                <td>Submit seller earnings payout withdrawal request</td>
                <td>Seller (Vendor)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Challenges & Technical Solutions */}
      <section className="crown-section">
        <h2>Key Technical Challenges & Solutions</h2>
        <div className="crown-grid-2">
          <div className="crown-card">
            <h3><FaBolt /> Real-Time Bidirectional Chat</h3>
            <p>
              <strong>Challenge:</strong> Enabling simultaneous private communication between thousands of buyers and independent vendors without degrading REST server performance.
            </p>
            <p>
              <strong>Solution:</strong> Deployed a dedicated Socket.io gateway tracking online presence, mapping user IDs to socket IDs, persisting message history in MongoDB, and broadcasting read-receipt events.
            </p>
          </div>

          <div className="crown-card">
            <h3><FaBolt /> Multi-Vendor Split Orders & Payments</h3>
            <p>
              <strong>Challenge:</strong> Processing single customer checkouts containing items from multiple distinct vendors while maintaining individual order tracking and vendor payout accounting.
            </p>
            <p>
              <strong>Solution:</strong> Engineered an order orchestration pipeline in Express that verifies inventory, applies targeted coupon codes, creates sub-orders grouped by seller, and records escrow balances.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Walkthrough Video */}
      <section className="crown-section">
        <h2>🎥 Platform Video Walkthrough</h2>
        <div className="crown-video">
          <iframe
            src="https://www.youtube.com/embed/Q951iWyOXgA"
            title="Crown Market Multi-Vendor Demo"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="crown-section">
        <h2>Future Roadmap</h2>
        <ul className="crown-list">
          <li><strong>AI Product Recommendations:</strong> Personalize the buyer feed based on browsing patterns and purchase history.</li>
          <li><strong>Mobile App:</strong> Native iOS and Android mobile app built with React Native.</li>
          <li><strong>Automated Logistics Integration:</strong> Direct shipping label generation and parcel tracking via courier APIs (FedEx, DHL).</li>
          <li><strong>Multi-Currency & Internationalization:</strong> Dynamic currency conversion and multi-language support.</li>
        </ul>
      </section>

      {/* Project Links Footer */}
      <section className="crown-section">
        <h2>Project Links</h2>
        <div className="crown-links-wrapper">
          <a
            href="https://multivender-pt6u.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="crown-btn-primary"
          >
            <FaExternalLinkAlt /> Visit Live Application
          </a>
          <a
            href="https://github.com/TaniaRajpoot/multivender"
            target="_blank"
            rel="noopener noreferrer"
            className="crown-btn-secondary"
          >
            <FaGithub /> View Source on GitHub
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CrownMarket;
