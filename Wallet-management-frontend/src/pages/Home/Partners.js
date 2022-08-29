import React, { useContext } from "react";
import img1 from "../../images/./google.png";
import img2 from "../../images/./tudo.png";
import img3 from "../../images/./xerde.png";
import img4 from "../../images/./opay.png";
import img5 from "../../images/./inter.png";
import img6 from "../../images/./cpay.png";
import img7 from "../../images/./access.png";
import img8 from "../../images/./pwc.png";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

const words = {
  english: {
    hea: "Our Partners",
  },
  french: {
    hea: "Nos partenaires",
  },
};

const Partners = () => {
  const { lang, changeLanguage } = useContext(LanguageContext);
  const { hea } = words[lang];

  return (
    <div className="container">
      <div>
        <h2
          className="row justify-content-center align-items-center mb-5 mi"
          style={{ color: "white" }}
        >
          {hea}
        </h2>
      </div>
      <div className="row mb-3 justify-content-center align-items-center">
        <div className="col-lg-3 col-sm-6">
          <div>
            <img
              src={img8}
              alt="pwc"
              className="yes"
              style={{ width: "10rem", height: "8rem" }}
            />
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          <div>
            <img
              src={img1}
              alt="google"
              style={{ width: "10rem", height: "8rem" }}
              className="yes"
            />
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div>
            <img
              src={img3}
              alt="xerde"
              style={{ width: "9rem", height: "8rem" }}
              className="yes"
            />
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div>
            <img
              src={img4}
              alt="opay"
              style={{ width: "9rem", height: "8rem" }}
              className="yes"
            />
          </div>
        </div>
      </div>
      <div className="row mb-4 pb-3 justify-content-center text-align-center">
        <div class="col-lg-3  col-sm-6">
          <div>
            <img
              src={img6}
              alt="cpay"
              className="no"
              style={{ width: "10rem", height: "8rem" }}
            />
          </div>
        </div>
        <div class="col-lg-3  col-sm-6">
          <div>
            <img
              src={img2}
              alt="tudo"
              style={{ width: "10rem", height: "8rem" }}
              className="no"
            />
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div>
            <img
              src={img5}
              alt="interswitch"
              style={{ width: "10rem", height: "8rem" }}
              className="no"
            />
          </div>
        </div>
        <div class="col-lg-3  col-sm-6">
          <div>
            <img
              src={img7}
              alt="access"
              style={{ width: "10rem", height: "8rem" }}
              className="no"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
