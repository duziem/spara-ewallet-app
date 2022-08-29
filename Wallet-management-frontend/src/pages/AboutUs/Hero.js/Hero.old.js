import React from "react";
import "./Hero.css";
import ab from "../Images/abdo.jpg";
import e3 from "../Images/Ellipse3.jpg";
import e2 from "../Images/Ellipse2.png";
import janee from "../Images/janee.jpg";

const Hero = () => {
  return (
    <section className="max-wrapper hero-wrapper">
      <div className="hero">
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h2>
              Making opportunities <span>accessible</span> to everyone
            </h2>
            <p>
              Delivering on the promise of financial inclusion in Africa today
              to safely connect people with the places, opportunities, and
              experiences that they truly care about.
            </p>
          </div>
        </div>
        <div className="hero_img-wrapper">
          <div className="hero_img">
            <img src={ab} alt="ab" className="img1" />
            <img src={e2} alt="e2" className="img2" />
            <img src={e3} alt="e3" className="img3" />
            <div className="janee">
              <img src={janee} alt="my pics" className="janee" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
