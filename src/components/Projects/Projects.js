import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiTypescript,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiVercel,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import mart from "../Assets/mulmart.png";
import ninja from "../Assets/ninjacode.png";
import auth from "../Assets/auth app.png";
import "./Projects.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title about_project">Projects</h2>

      <div className="projects__grid">
        {/* ----- Project 1 -----
        <div className="project">
          <img src={mart} alt="MulMart" />

          <h3 className="about_project">MulMart</h3>

          <ul className="project__stack">
            <li className="project__stack-item" id="stacks">
              <SiHtml5 size={30} />
              <IoLogoJavascript size={30} />
              <SiCss3 size={30} />
              <FaReact size={30} />
              <SiRedux size={30} />
              <SiExpress size={30} />
              <SiMongodb size={30} />
              <FaNodeJs size={30} />
              <SiVercel size={30} />
            </li>
          </ul>

          <div id="b">
            <a
              href="https://multivendor-e-shop-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span type="button" className="btn btn--outline">
                Watch Live
              </span>
            </a>

            <Link
              to="/Project-Details/MulMart"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span type="button" className="btn btn--outline">
                Description
              </span>
            </Link>
          </div>
        </div> */}

        {/* ----- Project 2 -----
        <div className="project">
          <img src={ninja} alt="NinjaCode" />

          <h3 className="about_project">NinjaCode</h3>

          <ul className="project__stack">
            <li className="project__stack-item" id="stacks">
              <SiHtml5 size={30} />
              <SiTypescript size={30} />
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
              href="https://ninja-code.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span type="button" className="btn btn--outline">
                Watch Live
              </span>
            </a>

            <Link to="/Project-Details/NinjaCode">
              <span type="button" className="btn btn--outline">
                Description
              </span>
            </Link>
          </div>
        </div> */}

        {/* ----- Project 3 ----- */}
        <div className="project">
          <img src={auth} alt="Auth app" />

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
