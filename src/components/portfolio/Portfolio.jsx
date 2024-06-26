import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Modern Portfolio Website",
    demo: "https://malahim.tech/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Real Estate Website",
    demo: "https://midzaaj.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Ecommerce Printing Website",
    demo: "https://wizeink.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Attendance Management System",
    pr: "https://www.upwork.com/freelancers/~0165719fb0b09ae02d?referrer_url_path=/nx/search/talent/details/~0165719fb0b09ae02d/profile&p=1794364274086100992",
  },
  {
    id: 5,
    image: IMG5,
    title: "Online Movie Booking System",
    pr: "https://www.upwork.com/freelancers/~0165719fb0b09ae02d?referrer_url_path=/nx/search/talent/details/~0165719fb0b09ae02d/profile&p=1794360509671886848",
  },

];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, demo, pr }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              {!demo ? (
                <div className="portfolio__item-cta">
                  <a href={pr} className="btn btn-primary" target="_blank">
                    View Portfolio
                  </a>
                </div>
              ) : (
                <div className="portfolio__item-cta">
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
