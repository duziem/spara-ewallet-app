import React, { useContext, useEffect } from "react";
import image1 from "../../images/Awoof.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import image2 from "../../images/card.png";
import "../../App.css";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

const go = {
  french: {
    gh: "Spara Awoof",
    gob: "Où que vous soyez, ajoutez de l'argent à votre porte-monnaie Spara. Vous pouvez rechargez rapidement votre compte par virement bancaire ou débit/crédit cartes.",
    paymp:
      "Effectuez des paiements en ligne avec votre compte Spara. Effectuez vos paiements dans le confort de votre foyer ou en déplacement. Payez votre câble électricité, taxes et plus.",
    paym: "Paiements",
  },
  english: {
    gh: " Spara Awoof",
    gob: " No matter where you are, add money to your Spara wallet.You can quickly top up your account with bank transfers or debit/credit cards.",
    paymp:
      "Make online payments with your Spara account. Make your payments from the comfort of your homes or on-the-go. Pay for your cable electricity, tax and more.",
    paym: "Payments",
  },
};
const GridTh = () => {
  const { lang, changeLanguage } = useContext(LanguageContext);
  const { gh, gob, paymp, paym } = go[lang];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="row mb-5">
      <div className="col-lg-6" style={{ paddingLeft: "60px" }}>
        <div data-aos="flip-left" className="cardfoot mb-4">
          <div
            className="card"
            style={{ width: "23rem", borderRadius: "0.9rem", height: "253px" }}
          >
            <div className="card-body">
              <h5 id="h5" className="card-title">
                <img
                  style={{ width: "6rem", height: "6rem" }}
                  src={image1}
                  alt="awoof"
                />
                {gh}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <p className="card-text">{gob}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6" style={{ paddingLeft: "60px" }}>
        <div data-aos="flip-left" className="cardfoot mt-2">
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
                  src={image1}
                  alt="ethereum"
                />
                {paym}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <p className="card-text">{paymp}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridTh;
