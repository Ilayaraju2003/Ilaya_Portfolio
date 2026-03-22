import React from "react";
import "./Header.css";
import RESUME from "./Ilayaraju C 1.pdf";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaSalesforce } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <h5>Hello, I'm</h5>
        <h1>ILAYARAJU</h1>
        <h2 className="text-light">Full-Stack Developer</h2>

        <p className="header__tagline">
          Passionate about crafting clean, responsive, and dynamic web applications 
          with modern front-end and back-end technologies 🚀
        </p>

        <p className="header__location">
          Salem, Tamil Nadu, India
        </p>

        {/* Buttons */}

        <div className="action">
          <a
            className="btn"
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>

          <a className="btn btn-primary" href="#contact">
            Contact Me
          </a>
        </div>

        {/* Social Links */}

        <div className="header__socials">

          <a
            href="https://www.linkedin.com/in/ilaya2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/Ilayaraju2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>

          <a
            href="https://www.salesforce.com/trailblazer/ilayarajuc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSalesforce />
          </a>

        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

      </div>
    </header>
  );
};

export default Header;