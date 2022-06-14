import React from "react";
import "./experience.css";
// import { AiFillCheckCircle } from "react-icons/ai";

import { FaPython } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { DiRubyRough } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { ImHtmlFive } from "react-icons/im";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <ImHtmlFive className="experience__details-icon" />
              <div>
                <h4>HTML5</h4>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaSass className="experience__details-icon" />
              <div>
                <h4>SCSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <DiRubyRough className="experience__details-icon" />
              <div>
                <h4>Ruby</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaPython className="experience__details-icon" />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiRubyonrails className="experience__details-icon" />
              <div>
                <h4>Ruby on Rails</h4>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineConsoleSql className="experience__details-icon" />
              <div>
                <h4>SQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
