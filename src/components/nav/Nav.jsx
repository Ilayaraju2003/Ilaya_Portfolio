import React, { useState } from "react";
import "./Nav.css";
import { BiHome, BiUser, BiCodeAlt, BiMessageDots } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";

const Nav = () => {
  const [active, setActive] = useState("#");

  return (
    <nav>
      <a
        href="#"
        className={active === "#" ? "active" : ""}
        onClick={() => setActive("#")}
      >
        <BiHome />
      </a>
      <a
        href="#about"
        className={active === "#about" ? "active" : ""}
        onClick={() => setActive("#about")}
      >
        <BiUser />
      </a>
      <a
        href="#skills"
        className={active === "#skills" ? "active" : ""}
        onClick={() => setActive("#skills")}
      >
        <BiCodeAlt />
      </a>
      <a
        href="#projectwork"
        className={active === "#projectwork" ? "active" : ""}
        onClick={() => setActive("#projectwork")}
      >
        <MdWorkOutline />
      </a>
      <a
        href="#contact"
        className={active === "#contact" ? "active" : ""}
        onClick={() => setActive("#contact")}
      >
        <BiMessageDots />
      </a>
    </nav>
  );
};

export default Nav;
