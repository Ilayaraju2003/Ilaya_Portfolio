import React from "react";
import "./Header.css";
import RESUME from "./Ilayaraju 28.pdf";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaSalesforce } from "react-icons/fa"; // Salesforce icon


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div style={{ textAlign: 'center', lineHeight: '2', marginBottom: '12px' }}>
          <h6 >Hello, I'm</h6>
          <h1 >ILAYARAJU</h1>
          <h6 className="text-light" >Front-End Developer</h6>

          <p style={{ fontStyle: "italic", color: "#ccc" }}>
            Passionate about crafting clean, responsive, and user-friendly web experiences 🚀
          </p>
          <p style={{ fontSize: "14px", color: "#aaa" }}>
            Salem, Tamil Nadu, India
          </p>
        </div>
        <div className="action">
          <a className="btn" href={RESUME} target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
          <a className="btn btn-primary" href="#contact">
            Contact me!
          </a>
        </div>

        <div class="header__socials">
          <a href="http://www.linkedin.com/in/ilaya2003" target="_blank">
            <BsLinkedin size={30} color="#0A66C2" />
          </a>
          <a href="https://github.com/Ilayaraju2003" target="_blank">
            <BsGithub size={30} color="#fff" />
          </a>
          <a href="https://www.salesforce.com/trailblazer/ilayarajuc" target="_blank">
            <FaSalesforce size={30} color="#00A1E0" />
          </a>
        </div>


        <a className="scroll__down " href="#contact">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
