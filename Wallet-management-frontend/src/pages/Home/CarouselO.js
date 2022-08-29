import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import Header from "../../components/Header/Header";
import {
  Carousel,
  Card,
  Container,
  Row,
  Col,
  ContainerFluid,
} from "react-bootstrap";
import image1 from "../../images/image1.png";
import image2 from "../../images/iPhone13.png";

const word = {
  french: {
    Ohthree: "Faisons La Vie Avec Une Nouvelle Devise ",
    Ohthree1: "En Rendant Les Services Financiers ",
    Ohthree2: "Plus Accessible à vous",
    Op: "Spara Wallet vous offre la plateforme pour effectuer des paiements rapides et faciles et gagner plus. Dépensez intelligemment et économisez plus",
    Obut: "Créer un compte",
  },
  english: {
    Ohthree: " Let's Make Life With New Currency, ",
    Ohthree1: "By Making Financial Services ",
    Ohthree2: "More Accessible To you.",
    Op: "Spara Wallet gives you the platform to make quick and easy payments and earn more. Spend smart and save more",
    Obut: "Create an account",
  },
};

const CarouselO = () => {
  const { lang, changeLanguage } = useContext(LanguageContext);
  const { Ohthree, Op, Obut, Ohthree1, Ohthree2 } = word[lang];

  return (
    <>
      <Col className="col-lg-6">
        <div
          id="carousel-heading"
          style={{ paddingLeft: "60px", width: "30rem" }}
        >
          <h3 className="mb-5 colorwhite">
            {Ohthree}
            <span className="diff">{Ohthree1}</span>
            {Ohthree2}
          </h3>
          <p className="mb-4 mt-4 colorwhiten">{Op}</p>
          <a className="btn btn-primary" href="">
            {Obut}
          </a>
        </div>
      </Col>
      <Col className="col-lg-2"></Col>
      <Col className="col-lg-6">
        <div style={{ marginLeft: "90px" }}>
          <img
            id="banner-img"
            src={image1}
            alt="sim"
            style={{ width: "30rem" }}
          />
          <img
            id="banner-imgs"
            src={image2}
            alt="iphone"
            style={{ width: "25rem" }}
          />
        </div>
      </Col>
    </>
  );
};

export default CarouselO;
