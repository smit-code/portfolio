import React from "react";
import "./about.css";
import ME from "../../assets/me2.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About pic" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h5>Background</h5>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                magnam dolorem quaerat quis iste ratione aliquam deleniti
                perferendis dolor est, quas sequi quasi rem, in dolores nostrum
                cupiditate nam natus.
              </small>
            </article>
            <article className="about__card">
              <h5>Hobbies & Interests</h5>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                magnam dolorem quaerat quis iste ratione aliquam deleniti
                perferendis dolor est, quas sequi quasi rem, in dolores nostrum
                cupiditate nam natus.
              </small>
            </article>
            <article className="about__card">
              <h5>Projects</h5>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                magnam dolorem quaerat quis iste ratione aliquam deleniti
                perferendis dolor est, quas sequi quasi rem, in dolores nostrum
                cupiditate nam natus.
              </small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
