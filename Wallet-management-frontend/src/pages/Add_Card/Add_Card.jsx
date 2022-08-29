import React from "react";
import "./Add_Card.css";

import BackVector from "./Images/BackVector.png";
import Image from "./Images/profile-image.png";
import Vector from "./Images/Vector.png";
import MastercardLogo from "./Images/mastercard-logo.png";
import VisaLogo from "./Images/visa-logo.png";

const Add_Card = () => {
  return (
    <>
      <div>
        <div className="addCard">
          <div>
            <div className="back">
              <img className="me-3" width="40" src={BackVector} alt="#" />
              <p className="back-text my-2 ms-1">Back</p>
            </div>
            <h3 className="add-card">Add a card</h3>
          </div>

          <div className="profile-detail">
            <div>
              <img src={Image} width="100" alt="profile-image" />
            </div>

            <div className="details">
              <h5>Amadi John</h5>
              <p>@johnamadi@gmail.com</p>
            </div>
            <div className="dropdown">
              <img src={Vector} alt="#" />
            </div>
          </div>
        </div>

        <hr />
        <div className="card">
          <div className="card-billing text-center">
            <p>card details</p>
            <p>Billing Information</p>
          </div>

          <div className="billing my-3">
            <h4 className="billing-text">Add Credit or Debit Card</h4>
            <img src={VisaLogo} alt="#" />
            <img src={MastercardLogo} alt="#" />
          </div>

          <form>
            <input
              type="text"
              className="firstName ps-5"
              name="firstName"
              placeholder="John Alfred"
            />
            <input
              type="text"
              className="lastName ps-5"
              name="lastName"
              placeholder="Amadi"
            />
            <input
              type="number"
              className="CardNum ps-5"
              name="card_number"
              placeholder="Card Number"
            />
            <input
              className="expiryDate ps-5"
              type="Date"
              name="state"
              placeholder="MM/YY"
            />
            <input
              className="CVV"
              type="tel"
              name="CVV/CVC"
              placeholder="CVV/CVC"
            />
            <button className="lock-card">Continue</button>
            <p className="charges text-center">No charges yet</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add_Card;
