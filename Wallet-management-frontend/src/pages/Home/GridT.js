import React, { useContext, useEffect } from "react";
import image1 from "../../images/mobile.png";
import image2 from "../../images/Teth.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../App.css";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

const go = {
  french: {
    gth: "Spara portable",
    gtob: "Avec Spara, vous pouvez effectuer des virements, paiements, retraits rapides et conversions. Ceci est facilement géré sur votre téléphone avec un connexion sécurisée au système.",
    dig: "Transfert numérique",
    digp: "Utilisez Spara pour envoyer des virements en ligne à vos proches. Déplacer et collecter vos fonds en utilisant vos devises préférées où qu'elles soient Peut être.",
  },
  english: {
    gth: " Spara Mobile",
    gtob: "Get to save your money with Spara Wallet. Start saving smartly with any of our savings products and get up to 20% interest returns per annum. Withdraw your money at your own convenience.",
    dig: "Digital Transfer",
    digp: " Use Spara to send online transfers to your loved ones. Move and collect your funds using your preferred currencies wherever they may be.",
  },
};

const GridT = () => {
  const { lang, changeLanguage } = useContext(LanguageContext);
  const { gth, gtob, dig, digp } = go[lang];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="row mb-4">
      <div className="col-lg-6" style={{ paddingLeft: "60px" }}>
        <div data-aos="flip-left" className="cardfoot mb-4">
          <div
            className="card "
            style={{ width: "23rem", borderRadius: "0.9rem", height: "253px" }}
          >
            <div className="card-body">
              <h5 id="h5" className="card-title">
                <img
                  style={{ width: "6rem", height: "6rem" }}
                  src={image1}
                  alt="mobile"
                />
                {gth}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <p className="card-text">
                {gtob}
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6" style={{ paddingLeft: "60px" }}>
        <div data-aos="flip-right" className="cardfoot mt-2">
          <div
            className="card"
            style={{
              width: "23rem",
              borderRadius: "0.9rem",
              height: "253px",
            }}
          >
            <div className="card-body">
              <h5 id="h5" className="card-title">
                <img
                  style={{ width: "6rem", height: "6rem" }}
                  src={image2}
                  alt="tether"
                />
                {dig}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <p className="card-text">{digp}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridT;
