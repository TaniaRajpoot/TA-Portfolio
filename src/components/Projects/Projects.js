import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiVercel,
  SiTailwindcss,
  SiSocketdotio,
} from "react-icons/si";

import auth from "../Assets/auth app.png";
import "./Projects.css";
import { Link } from "react-router-dom";
import crownMarketImg from "../Assets/crownmarket.png";
import cart from "../Assets/Screenshot 2025-08-30 000555.png";
import estate from "../Assets/Screenshot 2025-08-29 214739.png";
import prescripto from "../Assets/Screenshot 2025-08-30 163849.png";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title about_project">Projects</h2>

      <div className="projects__grid">
        {/*---------- Project 1: Crown Market ----------*/}
        <div className="project">
          <img src={crownMarketImg} alt="Crown Market" />

          <h3 className="about_project">Crown Market</h3>

          <ul className="project__stack">
            <li className="project__stack-item" id="stacks">
              <SiTailwindcss size={30} title="Tailwind CSS" />
              <FaReact size={30} title="React" />
              <SiRedux size={30} title="Redux Toolkit" />
              <SiExpress size={30} title="Express.js" />
              <SiMongodb size={30} title="MongoDB" />
              <FaNodeJs size={30} title="Node.js" />
              <SiSocketdotio size={30} title="Socket.io" />
              <SiVercel size={30} title="Vercel" />
            </li>
          </ul>

          <div id="b">
            <a
              href="https://multivender-pt6u.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span type="button" className="btn btn--outline">
                Watch Live
              </span>
            </a>

            <Link
              to="/Project-Details/CrownMarket"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span type="button" className="btn btn--outline">
                Description
              </span>
            </Link>
          </div>
        </div>

        {/*---------- Project 2: Prescripto ----------*/}
        <div className="project">
          <img src={prescripto} alt="Prescripto" />

          <h3 className="about_project">Prescripto</h3>

          <ul className="project__stack">
            <li className="project__stack-item" id="stacks">
              <SiHtml5 size={30} />
              <SiCss3 size={30} />
              <FaReact size={30} />
              <SiExpress size={30} />
              <SiMongodb size={30} />
              <FaNodeJs size={30} />
              <SiVercel size={30} />
            </li>
          </ul>

          <div id="b">
            <a
              href="https://prescripto-booking-system.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span type="button" className="btn btn--outline">
                Watch Live
              </span>
            </a>

            <Link
              to="/Project-Details/Prescripto"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span type="button" className="btn btn--outline">
                Description
              </span>
            </Link>
          </div>
        </div>

        {/*---------- Project 3: Green Cart ----------*/}
        <div className="project">
          <img src={cart} alt="Green Cart" />

          <h3 className="about_project">Green Cart</h3>

          <ul className="project__stack">
            <li className="project__stack-item" id="stacks">
              <SiHtml5 size={30} />
              <SiCss3 size={30} />
              <FaReact size={30} />
              <SiExpress size={30} />
              <SiMongodb size={30} />
              <FaNodeJs size={30} />
              <SiVercel size={30} />
            </li>
          </ul>

          <div id="b">
            <a
              href="https://green-cart-frontend-eta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span type="button" className="btn btn--outline">
                Watch Live
              </span>
            </a>

            <Link
              to="/Project-Details/GreenCart"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span type="button" className="btn btn--outline">
                Description
              </span>
            </Link>
          </div>
        </div>

        {/*---------- Project 4: Taniva Estate ----------*/}
        <div className="project">
          <img src={estate} alt="Taniva Estate" />

          <h3 className="about_project">Taniva Estate</h3>

          <ul className="project__stack">
            <li className="project__stack-item" id="stacks">
              <SiHtml5 size={30} />
              <SiCss3 size={30} />
              <FaReact size={30} />
              <SiExpress size={30} />
              <SiMongodb size={30} />
              <FaNodeJs size={30} />
              <SiVercel size={30} />
            </li>
          </ul>

          <div id="b">
            <a
              href="https://taniva.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span type="button" className="btn btn--outline">
                Watch Live
              </span>
            </a>

            <Link
              to="/Project-Details/RealEstateAppCaseStudy"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span type="button" className="btn btn--outline">
                Description
              </span>
            </Link>
          </div>
        </div>

        {/*---------- Project 5: MERN Auth App ----------*/}
        <div className="project">
          <img src={auth} alt="MERN Auth app" />

          <h3 className="about_project">MERN Auth App</h3>

          <ul className="project__stack">
            <li className="project__stack-item" id="stacks">
              <SiHtml5 size={30} />
              <SiCss3 size={30} />
              <FaReact size={30} />
              <SiExpress size={30} />
              <SiMongodb size={30} />
              <FaNodeJs size={30} />
              <SiVercel size={30} />
            </li>
          </ul>

          <div id="b">
            <a
              href="https://auth-mern-app-frontend-zeta.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span type="button" className="btn btn--outline">
                Watch Live
              </span>
            </a>

            <Link
              to="/Project-Details/AuthApp"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span type="button" className="btn btn--outline">
                Description
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
