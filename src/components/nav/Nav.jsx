/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { RiChatSmile2Line } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBookBookmark />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <RiChatSmile2Line />
      </a>
    </nav>
  );
};

export default Nav;
