import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { upload } from "@testing-library/user-event/dist/upload";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";

const words = {
  english: {
    home: "Home",
    about: "AboutUs",
    contact: "ContactUs",
    services: "Services",
    faq: "FAQ",
    blog: "Blog",
    login: "Login",
    signup: "SignUp",
  },
  french: {
    home: "Domicile",
    about: "Àpropos",
    contact: " Contacter",
    services: "Services",
    faq: "FAQ",
    blog: "Blog",
    login: "Connexion",
    signup: "S'inscrire",
  },
};

const Header = () => {
  const { lang, changeLanguage } = useContext(LanguageContext);
  const { isDarkMode, toggleTheme, light } = useContext(ThemeContext);
  const { home, about, contact, services, blog, login, signup, faq, article } =
    words[lang];
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <img className="navbar-brand logo" src={logo} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="nav-item" onClick={toggleTheme}>
                {light ? (
                  <BsToggle2Off
                    size={35}
                    style={{
                      color: "#0294f4",
                      marginTop: "5px",
                      marginRight: "13px",
                    }}
                  />
                ) : (
                  <BsToggle2On
                    size={35}
                    style={{
                      color: "white",
                      marginTop: "5px",
                      marginRight: "13px",
                    }}
                  />
                )}
              </div>
              <div className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  {home}
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/aboutus" className="nav-link" aria-current="page">
                  {about}
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/contact" className="nav-link" aria-current="page">
                  {contact}
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/services" className="nav-link" aria-current="page">
                  {services}
                </Link>
              </div>

              <div className="nav-item">
                <Link to="/faqs" className="nav-link" aria-current="page">
                  {faq}
                </Link>
              </div>

              <div className="nav-item">
                <Link to="/blog" className="nav-link" aria-current="page">
                  {blog}
                </Link>
              </div>

              <div className="nav-item">
                <Link to="/login" className="nav-link" aria-current="page">
                  {login}
                </Link>
              </div>

              <div className="nav-item">
                <Link
                  to="/register"
                  className="nav-link btn-signup fw-bold"
                  aria-current="page"
                >
                  {signup}
                </Link>
              </div>

              <div className="nav-item">
                <select name="lang" id="lang" onChange={changeLanguage}>
                  <option value="english">English</option>
                  <option value="french">French</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
