import React from "react";
import "./Hero.css";
import image1 from "../Images/abdo.png";
import image2 from "../Images/Ellipse3.png";
import image3 from "../Images/janee.png";
import image4 from "../Images/Ellipse2.png";

const Hero = () => {
  return (
    <>
      <section className="max-wrapper hero-wrapper">
        <div className="hero">
          <div className="hero-content-wrapper">
            <div className="hero-header">
              <h1>
                Making opportunities <span className="access">accessible</span>{" "}
                to everyone
              </h1>
            </div>

            <div className="hero-paragraph">
              <p>
                Delivering on the promise of financial inclusion in Africa today
                to safely connect people with the places, opportunities, and
                experiences that they truly care about.
              </p>
            </div>
          </div>

          <div className="hero_img-wrapper col-hero p-5">
            <div className="row-hero">
              <div className="image_1">
                <img src={image1} alt="e2" />
              </div>
              <div className="janeeImage">
                <img src={image2} alt="e2" />
              </div>
            </div>

            <div className="row-hero">
              <div className="image_3">
                <img src={image3} alt="e2" />
              </div>
              <div className="img2">
                <img src={image4} alt="e2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
