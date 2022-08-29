import React, { useContext } from "react";
import Tot from "./Tot";
import Ttt from "./Ttt";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

const word = {
  english: {
    te: "Testimonials",
  },
  french: {
    te: "Témoignages",
  },
};

const Testimonials = () => {
  const { lang, changeLanguage } = useContext(LanguageContext);
  const { te } = word[lang];
  return (
    <section className="container mb-4">
      <div className="row justify-content-center align-items-center ">
        {" "}
        <h2
          className="row justify-content-center align-items-center"
          style={{ color: "white" }}
        >
          {te}
        </h2>
      </div>
      <Tot />
      <Ttt />
    </section>
  );
};

export default Testimonials;
