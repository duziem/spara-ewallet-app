import React, { useState } from "react";
import NigeriaFlag from "./Images/nigeria.png";
import Whatsapp from "../../images/whatsapp.png";
import Plus from "./Images/plus.png";
import Send from "./Images/send.png";
import Exchange from "./Images/ArrowsLeftRight.png";

import "./AddAccount.css";

const AddAccount = () => {
  const [name, setName] = useState("");

  return (
    <>
      <div className="addAccount container">
        <div className="addAccounts mx-auto">
          <div>
            <img className="nigeria" src={NigeriaFlag} alt="#" />
            <p className="usd">NGN ₦0.00</p>
          </div>

          <div>
            <button className="btn-add">▼{"  "}Transactions</button>
          </div>

          <div>
            <button className="btn-send">
              Send Money <img className="ms-3" src={Send} alt="" />
            </button>
          </div>

          <div>
            <button className="btn-convert">
              Convert Money <img className="ms-3" src={Exchange} alt="" />
            </button>
          </div>
        </div>

        <div className="add-btn">
          <button className="addBtn">
            <img className="me-2 wwhh" src={Whatsapp} alt="" />
            Chat Now
          </button>
        </div>
      </div>
    </>
  );
};

export default AddAccount;
