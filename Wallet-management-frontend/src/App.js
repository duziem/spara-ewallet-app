import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import OTP from "./pages/Register/OTP";
import Verified from "./pages/Register/Verified";
import Contact from "./pages/Contact/Contact";
import Faqs from "./pages/FAQs/Faqs";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import ThemeProvider from "./context/ThemeContext";
import LanguageProvider from "./context/LanguageContext";
import AccountSearch from "./pages/AccountSearch";
import Transfer from "./pages/Transfer";
import Blog from "../src/pages/Blog/Blog";

//import Header from "../src/components/Header/Header";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <LanguageProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/otp" element={<OTP />} />
              <Route path="/verified/:token" element={<Verified />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </BrowserRouter>
          <ToastContainer />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
