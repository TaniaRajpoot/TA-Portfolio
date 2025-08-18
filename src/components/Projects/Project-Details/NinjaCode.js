import React,{useContext} from "react";
import "./NinjaCaseStudy.css"; 
import Ninja_Sys from "../../Assets/ninjasys.png";
import Ninja_DB from "../../Assets/ninjadb.png";
import { ThemeContext } from "../../../contexts/theme";
import Footer from "../../Footer/Footer";

const NinjaCaseStudy = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div className={`ninja-container ${themeName === 'dark' ? 'dark' : ''}`}>
      <a style={{ padding: "6px", display: "inline-block", border: "1px solid" }} href="/">
        Go Back
      </a>
      <h1 className="ninja-title">NinjaCode Case Study</h1>

    {/* Project Description */}
    <section className="ninja-section">
      <h2>Project Overview</h2>
      <p>
        <strong>NinjaCode</strong> is a browser-based code playground built with React.  
        It lets users write HTML, CSS, and JavaScript with syntax highlighting (via CodeMirror),  
        preview output in real-time, save workspace state in localStorage.  
        The project is deployed on Netlify and the source code is available on GitHub.
      </p>
    </section>

    {/* Video */}
    <section className="ninja-section">
      <h2>Video Demonstration</h2>
      <div className="ninja-video">
        <iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/UccFU3nILB8"
  title="NinjaCode Demo"
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
        <li><strong>Frontend:</strong> React, Tailwind CSS</li>
        <li><strong>Editor:</strong> CodeMirror</li>
        <li><strong>Storage:</strong> LocalStorage</li>
        <li><strong>Deployment:</strong> Netlify</li>
      </ul>
    </section>

    {/* Features & Challenges */}
    <section className="ninja-section ninja-features">
      <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 45%" }}>
          <h3>🛠️ Features</h3>
          <ul className="ninja-list">
            <li>Real time code preview</li>
            <li>Syntax highlighting with CodeMirror</li>
            <li>Save and restore sessions via LocalStorage</li>
            <li>Reset and download options</li>
            <li>Responsive UI</li>
          </ul>
        </div>
        <div style={{ flex: "1 1 45%" }}>
          <h3>⚠️ Challenges & Solutions</h3>
          <ul className="ninja-list">
            <li>🔄 Synchronizing multiple editors and preview: used debounce and React refs</li>
            <li>🧹 Preventing memory leaks in iframes: cleaned up listeners on unmount</li>
            <li>💾 Persisting code efficiently with throttled localStorage saves</li>
          </ul>
        </div>
      </div>
    </section>

    {/* System Architecture */}
    <section className="ninja-section">
      <h2>System Architecture</h2>
      <p>The following diagram shows high-level system architecture — how the UI interacts with storage and the preview sandbox.</p>
      <img
        src={Ninja_Sys}
        alt="System Architecture Diagram"
        className="ninja-img"
      />
    </section>

    {/* DB Architecture */}
    <section className="ninja-section">
      <h2>DB & Data Flow</h2>
      <p>Diagram illustrating how code snippets and settings are stored and retrieved from LocalStorage.</p>
      <img
        src={Ninja_DB}
        alt="Database Architecture Diagram"
        className="ninja-img"
      />
    </section>

    {/* Roadmap */}
    <section className="ninja-section">
      <h2>🔮 Future Roadmap</h2>
      <ul className="ninja-list">
        <li>Enable authenticated user accounts with cloud backups</li>
        <li>Shareable links for live code snippets</li>
        <li>Support templates and code snippets library</li>
      </ul>
    </section>

    {/* Links */}
    <section className="ninja-section">
      <h2>Project Links</h2>
      <ul className="ninja-link-list">
        <li>
          <a href="https://ninja-code.netlify.app/" target="_blank" rel="noopener noreferrer">
            Live Site
          </a>
        </li>
        <li>
          <a href="https://github.com/its-hafsa04/NinjaCode" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </li>
      </ul>
    </section>
    <Footer />
  </div>
);
}
export default NinjaCaseStudy;
