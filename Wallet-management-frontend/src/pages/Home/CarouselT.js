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
import image3 from "../../images/creditcard.png";

const words = {
  french: {
    Tthree: "Spara ",
    Tthree1: "Carte de Débit ",
    Tthree2: "Toujours Disponible.",
    Tp: "Vous souhaitez conserver des fonds sur votre compte spara et les dépenser ? Ensuite vous pouvez Spara émet une carte de débit Spara et utilise le solde directement deVotre compte. Commencez avec Spara Wallet.",
    but: "Créer un compte",
  },
  english: {
    Tthree: "Spara ",
    Tthree1: "Debit Card ",
    Tthree2: "Always Available.",
    Tp: "Want to keep funds in your spara account and spend it? Then you can Spara issues a Spara debit card and use the balance directly fromyour account. Get started with Spara Wallet.",
    but: "Create an account",
  },
};
const CarouselT = () => {
  const { lang, changeLanguage } = useContext(LanguageContext);
  const { Tthree, Tthree1, Tthree2, Tp, but } = words[lang];

  return (
    <>
      <Col className="col-lg-5">
        <div
          id="carousel-heading"
          style={{ paddingLeft: "80px", width: "30rem" }}
        >
          <h3 className="mb-5 colorwhite">
            {Tthree}
            <span className="diff">{Tthree1}</span>
            {Tthree2}
          </h3>

          <p className="mb-4 mt-3 colorwhiten " id="pee">
            {Tp}
          </p>

          <a className="btn btn-primary" href="">
            {but}
          </a>
        </div>
      </Col>
      <Col className="col-lg-6">
        <div className="justify-content-center" style={{ paddingLeft: "80px" }}>
          <img id="tw" src={image3} alt="iphone" style={{ width: "40rem" }} />
        </div>
      </Col>
    </>
  );
};

export default CarouselT;
