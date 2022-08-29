import React, { useContext, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import image1 from "../../images/Ethereum.png";
import image2 from "../../images/card.png";
import "../../App.css";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

const go = {
  french: {
    gh: "Des économies",
    gob: "Économisez votre argent avec Spara Wallet. Commencez à épargner intelligement avec l'un de nos produits d'épargne et levez-vous jusqu'à 20 % d'intérêts par a. Retirez votre argent à votre propre convenance.",
    fd: "Carte de débit/crédit",
    fdh: "Obtenez votre carte de débit/crédit gratuite en ayant simplement un compte chez nous. Nous fournissons carte de débit/crédit gratuite à nos clients. Voyagez n'importe où et sentez-vous libre avec nos cartes.",
  },
  english: {
    gh: "Savings",
    gob: "Get to save your money with Spara Wallet. Start saving smartly with any of our savings products and get up to 20% interest returns per annum. Withdraw your money at your own convenience.",
    fd: "Free Debit/Credit Card",
    fdh: "Get your free debit/credit card by just having an account with us. We provide free debit/credit card to our customers. Travel anywhere and feel free with our cards.",
  },
};

const GridO = () => {
  const { lang, changeLanguage } = useContext(LanguageContext);
  const { gh, gob, fd, fdh } = go[lang];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="row mt-4">
      <div className=" col-lg-6 mb-4" style={{ paddingLeft: "60px" }}>
        <div data-aos="flip-left" className="cardfoot">
          <div
            className="card"
            style={{ width: "23rem", borderRadius: "0.9rem" }}
          >
            <div className="card-body">
              <h5 id="h5" className="card-title">
                <img
                  style={{ width: "6rem", height: "6rem" }}
                  src={image1}
                  alt="ethereum"
                />
                {gh}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <p className="card-text">{gob}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-lg-6 mb-4" style={{ paddingLeft: "60px" }}>
        <div data-aos="flip-right" className="cardfoot">
          <div
            className="card"
            style={{ width: "23rem", borderRadius: "0.9rem" }}
          >
            <div className="card-body">
              <h5 id="h5" className="card-title">
                <img
                  style={{ width: "6rem", height: "6rem" }}
                  src={image2}
                  alt="card"
                />
                {fd}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <p className="card-text">{fdh}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridO;
