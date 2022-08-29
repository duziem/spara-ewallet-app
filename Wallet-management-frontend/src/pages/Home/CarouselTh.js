import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import {
  Carousel,
  Card,
  Container,
  Row,
  Col,
  ContainerFluid,
} from "react-bootstrap";
import image4 from "../../images/creamcan.png";
const worded = {
  french: {
    Ththree: "Sécurisé et Facile ",
    Th2: "Paiement Avec ",
    Th3: "Spara Porte monnaie.",
    Thp: " Les paiements d'objectifs peuvent être effectués facilement et en toute sécurité avec des partenaires locaux et cartes internationales de manière anonyme ou avec un compte Tudo. Ussd les paiements sont également entièrement pris en charge.",
    but: "Créer un compte",
  },
  english: {
    Ththree: "Secure and Easy ",
    Th2: "Payment With  ",
    Th3: " Spara Wallet.",
    Thp: "Goal payments can be made easily and securely with both local and international cards anonymously or with a Tudo account. Ussd payments are also fully supported.",
    but: "Create an account",
  },
};

const CarouselTh = () => {
  const { lang, changeLanguage } = useContext(LanguageContext);
  const { Ththree, Thp, but, Th2, Th3 } = worded[lang];

  return (
    <>
      <Col className="col-lg-5 gh">
        <div
          id="carousel-heading"
          style={{ paddingLeft: "80px", width: "30rem" }}
        >
          <h3 className="mb-5 colorwhite">
            {Ththree}
            <span className="diff">{Th2}</span>
            {Th3}
          </h3>

          <p className="mb-4 mt-3 colorwhiten ">{Thp}</p>

          <a className="btn btn-primary" href="">
            {but}
          </a>
        </div>
      </Col>
      <Col className="col-lg-6 ">
        <div style={{ paddingLeft: "200px" }}>
          <img id="th" src={image4} alt="iphone" />
        </div>
      </Col>
    </>
  );
};

export default CarouselTh;
