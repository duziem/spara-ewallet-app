import React, { useContext, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import image5 from "../../images/phone.png";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

const mp = {
  english: {
    hea: "Do More With Spara Wallet",
    mps: "With Spara Wallet, you can pay goods and send funds! Here's what Spara Wallet offers to global users",
  },
  french: {
    hea: "Faites-en plus avec le portefeuille Spara",
    mps: "Avec Spara Wallet, vous pouvez payer des marchandises et envoyer des fonds ! Voici ce que Spara Wallet offre aux utilisateurs du monde entier",
  },
};

const Middle = () => {
  const { lang, changeLanguage } = useContext(LanguageContext);
  const { hea, mps } = mp[lang];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 mb-5" style={{ paddingLeft: "60px" }}>
          <h3 data-aos="fade-up" className="colorwhite ">
            {hea}
          </h3>

          <p data-aos="fade-up" className="colorwhiten">
            {mps}
          </p>
        </div>
        <div
          data-aos="fade-up"
          className=" row justify-content-center align-items-center mb-5"
        >
          <img
            style={{ width: "400px", height: "400px" }}
            src={image5}
            alt="phone"
          />
        </div>
      </div>
    </div>
  );
};

export default Middle;
