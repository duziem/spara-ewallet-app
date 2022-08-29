import React, { useContext } from "react";
import felix from "../../images/felix.png";
import caleb from "../../images/caleb.png";
import { ThemeContext } from "../../context/ThemeContext";
import "./carousel.css";
import { BsStarFill } from "react-icons/bs";
import { LanguageContext } from "../../context/LanguageContext";

const words = {
  french: {
    ca: "Le service est livré rapidement et efficacement",
    fe: "Je suis satisfait du produit Spara et de ses services.",
  },
  english: {
    ca: "The service is delivered quickly and effectively",
    fe: "I am satisifed with the Spara product and their services.",
  },
};

const Ttt = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { lang, changeLanguage } = useContext(LanguageContext);
  const { ca, fe } = words[lang];
  return (
    <div className="row mt-4">
      <div className=" col-lg-6" style={{ paddingLeft: "60px" }}>
        <div className="cardfoot mb-3">
          <div
            className="card"
            id={isDarkMode ? "To" : "Top"}
            style={{ width: "23rem", borderRadius: "0.9rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <img
                  style={{ width: "6rem", height: "6rem" }}
                  src={felix}
                  alt="felix"
                />
                Caleb Jude{" "}
                <BsStarFill style={{ color: "gold", marginLeft: "10px" }} />
                <BsStarFill style={{ color: "gold" }} />
                <BsStarFill style={{ color: "gold" }} />
                <BsStarFill style={{ color: "gold" }} />
                <BsStarFill style={{ color: "gold" }} />
              </h5>
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <p className="card-text">{ca}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-lg-6" style={{ paddingLeft: "60px" }}>
        <div className="cardfoot">
          <div
            className="card"
            id={isDarkMode ? "To" : "Top"}
            style={{ width: "23rem", borderRadius: "0.9rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <img
                  style={{ width: "6rem", height: "6rem" }}
                  src={caleb}
                  alt="caleb"
                />
                Felix Morgan{" "}
                <BsStarFill style={{ color: "gold", marginLeft: "10px" }} />
                <BsStarFill style={{ color: "gold" }} />
                <BsStarFill style={{ color: "gold" }} />
                <BsStarFill style={{ color: "gold" }} />
                <BsStarFill style={{ color: "gold" }} />
              </h5>
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <p className="card-text">{fe}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ttt;
