import React, { useState } from "react";
import Logo from "./faqs-logo.png";
import Help from "./help-circle.png";
import "./Faqs.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const list = [
  {
    question: "What is Spara Wallet?",
    answer:
      "The goal of Spara Wallet, an agency banking solution, is to give those who are underserved and unbanked access to the financial system.",
  },
  {
    question: "Is Spara Wallet Network available for 24 hours?",
    answer:
      "The Spara Wallet Network is continuously accessible for 24 uninterrupted hours every day. You can mail or deposit money at odd hours of the day, and you can pay your bills whenever it's convenient for you.",
  },
  {
    question: "How does it work?",
    answer:
      "It operates by making use of a network of agents and ambassadors who represent Spara Wallet on the ground in outlying areas and offer financial services there and nearby.",
  },
  {
    question: "Is there a limit to the transaction I can do?",
    answer:
      "There is no restriction on how many transactions you can complete. You are limited to a Cash-Out limit of $30,000 and a Funds Transfer limit of $100,000.",
  },
  {
    question: "How soon after I apply can I begin to transact??",
    answer:
      "Once all prerequisites for pre-enrollment have been met, you can start transacting right away.",
  },
  {
    question: "What bank cards can be used on Spara Wallet?",
    answer:
      "The Spara Wallet application accepts all Nigeria Debit and Credit cards.",
  },
  {
    question:
      "Who can I talk to if i need information or run into problems usind Spara Wallet? ",
    answer:
      "To speak with a Spara Wallet support representative, phone any of our service lines or use the chat feature in the app.",
  },
  {
    question: "Which state do Spara Wallet operate?",
    answer:
      "There are agents for Spara Wallet all across the country. To guarantee that residents of both rural and urban areas of Nigeria have streamlined access to financial and banking services, we are open to receiving more applications from all over the country.",
  },
  {
    question: "I think a Spara Wallet agent has cheated me. What do i do?",
    answer:
      "We firmly oppose our agents engaging in dishonest behavior. Please contact our Customer Success Team by phoning +234 9055016590, emailing sparawallet@gmail.com, or using the contact form on this website's Contact page to register your complaint.",
  },
  {
    question: "What services does Spara Wallet offer?",
    answer:
      "All regular bank services such as withdrawal, funds transfer, deposit, bill payments etc",
  },
];

const Faqs = () => {
  const [newSearchedList, setNewSearchedList] = useState([]);

  const handleChange = (e) => {
    const input = e.target.value;
    setNewSearchedList(
      list.filter(
        (item) =>
          item.question.toLowerCase().includes(input.toLowerCase()) ||
          item.answer.toLowerCase().includes(input.toLowerCase())
      )
    );
  };

  return (
    <>
      <Header/>

      <div className="container-md-4 xs-12">
        <div className="text-center my-5 py-3 -md-">
          <img width="400" height="300" src={Logo} alt="faqs-logo" />
        </div>

        <div className="text-center my-5 py-3">
          <h4 className="brand_text">Got any question?</h4>
          <form className="nosubmit">
            <input
              id="myInput"
              onChange={handleChange}
              type="search"
              className="nosubmit ps-5 pe-3 me-3 mt-4 mb-1 py-2 -md-"
              placeholder="Ask a question"
            />
          </form>
        </div>

        <div
          className="container-faq accordion mb-5 mx-auto "
          id="accordionPanelsStayOpenExample"
        >
          {newSearchedList.length > 0
            ? newSearchedList.map((elem, index) => (
                <div class="accordion-item">
                  <h2
                    class="accordion-header"
                    id={`panelsStayOpen-heading${index}`}
                  >
                    <button
                      class="accordion-button brand_text collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#panelsStayOpen-collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`panelsStayOpen-collapse${index}`}
                    >
                      <img
                        width="20"
                        className="me-3"
                        src={Help}
                        alt="help-icon"
                      />
                      {elem.question}
                    </button>
                  </h2>
                  <div
                    id={`panelsStayOpen-collapse${index}`}
                    class="accordion-collapse collapse"
                    aria-labelledby={`panelsStayOpen-collapse${index}`}
                  >
                    <div class="accordion-body brand_text">{elem.answer}</div>
                  </div>
                </div>
              ))
            : list.map((elem, index) => (
                <div class="accordion-item">
                  <h2
                    class="accordion-header"
                    id={`panelsStayOpen-heading${index}`}
                  >
                    <button
                      class="accordion-button brand_text collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#panelsStayOpen-collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`panelsStayOpen-collapse${index}`}
                    >
                      <img
                        width="20"
                        className="me-3"
                        src={Help}
                        alt="help-icon"
                      />
                      {elem.question}
                    </button>
                  </h2>
                  <div
                    id={`panelsStayOpen-collapse${index}`}
                    class="accordion-collapse collapse"
                    aria-labelledby={`panelsStayOpen-collapse${index}`}
                  >
                    <div class="accordion-body brand_text">{elem.answer}</div>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Faqs;