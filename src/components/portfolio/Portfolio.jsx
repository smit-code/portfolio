/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./portfolio.css";
import workwise from "../../assets/workwise.png";
import travellist from "../../assets/travellist.png";
import portfolio from "../../assets/portfolio.png";

// // // // // // DATA // // // // //
// https://github.com/chriswhunter89/workwise
// https://github.com/chriswhunter89/travellist
// https://github.com/chriswhunter89/react-portfolio-v1

const data = [
  {
    id: 1,
    image: workwise,
    title: "Workwise",
    github: "https://github.com/",
    demo: "http://www.workwise.live/",
  },
  {
    id: 2,
    image: travellist,
    title: "Travellist",
    github: "https://github.com/",
    demo: "http://www.travellist.uk/",
  },
  {
    id: 3,
    image: portfolio,
    title: "Portfolio",
    github: "https://github.com/",
    demo: "https://www.chrishunter.info/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  View Live
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
