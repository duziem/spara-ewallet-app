import React, { useContext } from "react";
import jane from "../../images/jane.png";
import smart from "../../images/smart.png";
import { ThemeContext } from "../../context/ThemeContext";
import "./carousel.css";
import { BsStarFill } from "react-icons/bs";
import { LanguageContext } from "../../context/LanguageContext";

const words = {
  english: {
    gb: "I love Spara Wallet because their security level is high with due processes to avoid hackers.",
    gh: "The most dependable platform i've ever used is Spara. They have outstanding dispute resolution and a very quick response time. I always feel secure when i'm using Spara.",
  },
  french: {
    gb: "J'adore Spara Wallet parce que leur niveau de sécurité est élevé avec procédures régulières pour éviter les pirates.",
    gh: "La plate-forme la plus fiable que j'ai jamais utilisée est Spara. Ils ont un règlement des différends exceptionnel et un temps de réponse très rapide. je me sens toujours en sécurité lorsque j'utilise Spara.",
  },
};

const Tot = () => {
  const { lang, changeLanguage } = useContext(LanguageContext);
  const { gb, gh } = words[lang];
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="row mt-4">
      <div className=" col-lg-6" style={{ paddingLeft: "60px" }}>
        <div className="cardfoot mb-3">
          <div
            className="card"
            id={isDarkMode ? "To" : "Top"}
            style={{
              width: "23rem",
              borderRadius: "0.9rem",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <img
                  style={{ width: "6rem", height: "6rem" }}
                  src={jane}
                  alt="jane"
                />
                Jane Doe{" "}
                <BsStarFill style={{ color: "gold", marginLeft: "10px" }} />
                <BsStarFill style={{ color: "gold" }} />
                <BsStarFill style={{ color: "gold" }} />
                <BsStarFill style={{ color: "gold" }} />
                <BsStarFill style={{ color: "gold" }} />
              </h5>
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <p className="card-text">{gb}</p>
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
                  src={smart}
                  alt="smart"
                />
                Smart Peace{" "}
                <BsStarFill style={{ color: "gold", marginLeft: "10px" }} />
                <BsStarFill style={{ color: "gold" }} />
                <BsStarFill style={{ color: "gold" }} />
                <BsStarFill style={{ color: "gold" }} />
                <BsStarFill style={{ color: "gold" }} />
              </h5>
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <p className="card-text">{gh}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tot;
