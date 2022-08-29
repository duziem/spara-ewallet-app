import React, { useContext } from "react";
import {
  Carousel,
  Card,
  Container,
  Row,
  Col,
  ContainerFluid,
} from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

const words = {
  english: {
    eoh: "Get Started With Spara Wallet",
    po: "Be among the lucky users to create account with Spara",
    poo: "Start your financial journey with us",
    Obut: "Create an account",
  },
  french: {
    eoh: "Premiers Pas Avec le Portefeuille Spara",
    po: "Soyez parmi les utilisateurs chanceux pour créer un compte avec Spara",
    poo: "Commencez votre parcours financier avec nous",
    Obut: "Créer un compte",
  },
};

const EndOne = () => {
  const { lang, changeLanguage } = useContext(LanguageContext);
  const { eoh, po, poo, Obut } = words[lang];
  return (
    <div className="container ">
      <div className="row justify-content-center align-items-center ">
        <div className="col-lg-5 mb-5 mt-5" style={{ paddingLeft: "60px" }}>
          <h3 className="text-center" style={{ color: "white" }}>
            {eoh}
          </h3>
          <p className="text-center" style={{ color: "white" }}>
            {po} {poo}
          </p>

          <button
            className="btn btn-primary text-center"
            href=""
            style={{ marginLeft: "90px" }}
          >
            {Obut}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndOne;
