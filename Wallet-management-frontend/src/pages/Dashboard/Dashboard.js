import React, { useEffect } from "react";

import "./Dashboard.css";
import Logo from "../../images/logo.png";
import Icongroup from "../../images/icongroup.png";
// import ConverterDashboard from "../CurrencyConverter/ConverterDashboard";
import BillPayment from "../PayBills/BillPayment";
import ReactWhatsapp from "react-whatsapp";
import CreateAccount from "../CreateAccount/CreateAccount";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";
// import AccountSearch from "../AccountSearch";
// import Transfer from "../Transfer";
import UserHome from "../UserHome/UserHome";
import AddAccount from "../AddAccount/AddAccount";
import DashboardNav from "./DashboardNav";
import SendMoney from "../SendMoney_Steeper/SendMoney";
import Transactions from "../Transactions";
import FundAccount from "../FundAccount";
// import Transactions from "../Transactions/Transactions";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // //setting user's location
  // useEffect(() => {
  //   //checking if lat and log exists for user
  //   if (userInfo.lat === undefined) {
  //     console.log("not fetched yet");
  //   } else if (
  //     userInfo.lat === null ||
  //     userInfo.log === null ||
  //     userInfo.lat === "null" ||
  //     userInfo.log === "null" ||
  //     userInfo.log === userInfo.lat ||
  //     userInfo.log === "n/a" ||
  //     userInfo.lat === "n/a"
  //   ) {
  //     //grabbing the user's location
  //     if ("geolocation" in navigator) {
  //       navigator.geolocation.getCurrentPosition(function (position) {
  //         if (position.coords.latitude || position.coords.longitude) {
  //           setPos({
  //             ...pos,
  //             lat: position.coords.latitude.toString(),
  //             log: position.coords.longitude.toString(),
  //           });
  //         }
  //       });
  //     }
  //   }
  // }, [userInfo]);

  // //post request to update user's lat && log on the database
  // useEffect(() => {
  //   const data = new FormData();
  //   const token = localStorage.token;

  //   if (pos.lat !== null && pos.log !== null) {
  //     data.append("lat", pos.lat);
  //     data.append("log", pos.log);

  //     const config = {
  //       method: "post",
  //       url: "https://api.getsurveyplus.com/api/update-location",
  //       headers: {
  //         Authorization: `Token ${token}`,
  //       },
  //       data: data,
  //     };

  //     axios(config)
  //       .then(function (response) {
  //         console.log(JSON.stringify(response.data));
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  // }, [pos.log]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <div>
      <DashboardNav />
      <div className="d-flex align-items-start">
        <div
          className="nav sparanav col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <div className="d-flex specify">
            <div>
              <img className="iconimg" src={Icongroup} alt="" />
            </div>
            <div className="mt-3">
              <p className="step1  fw-bold">
                Step 1 <br />
                <span className="text-white fw-bold">Specify Activity</span>
              </p>
            </div>
          </div>

          <button
            className="nav-link active text-white"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            My Account
          </button>
          <button
            className="nav-link createaccount text-white"
            id="v-pills-account-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-account"
            type="button"
            role="tab"
            aria-controls="v-pills-account"
            aria-selected="true"
          >
            <i className="fa fa-plus"></i> Create Account
          </button>
          <button
            className="nav-link text-white"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            Add Money
          </button>
          <button
            className="nav-link text-white"
            id="v-pills-chat-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-chat"
            type="button"
            role="tab"
            aria-controls="v-pills-chat"
            aria-selected="false"
          >
            Send Money
          </button>
          <button
            className="nav-link text-white"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Pay Bills
          </button>

          <button
            className="nav-link text-white"
            id="v-pills-convert-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-convert"
            type="button"
            role="tab"
            aria-controls="v-pills-convert"
            aria-selected="false"
          >
            Convert Money
          </button>
          <button
            className="nav-link text-white"
            id="v-pills-card-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-card"
            type="button"
            role="tab"
            aria-controls="v-pills-card"
            aria-selected="false"
          >
            Add a Card
          </button>

          <button
            className="nav-link text-white"
            id="v-pills-transactions-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-transactions"
            type="button"
            role="tab"
            aria-controls="v-pills-transactions"
            aria-selected="false"
          >
            Transactions
          </button>
          <button
            className="nav-link text-white"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            <ReactWhatsapp
              className="nav-link text-white"
              number="2349055016590"
              message="Hello, My name is: (Kindly fill in your name)
               and my Account number is: (Kindly fill account number)
               
               Thanks for using Spara. "
            >
              Chat and Support
            </ReactWhatsapp>
          </button>
          <button
            className="nav-link text-white"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>

        <div className=" tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <UserHome />
            <AddAccount />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <FundAccount />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-chat"
            role="tabpanel"
            aria-labelledby="v-pills-chat-tab"
          >
            <SendMoney />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-chat"
            role="tabpanel"
            aria-labelledby="v-pills-chat-tab"
          >
            ...cgt
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            <BillPayment />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            ...settings
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-convert"
            role="tabpanel"
            aria-labelledby="v-pills-convert-tab"
          >
            {/* <ConverterDashboard /> */}
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-card"
            role="tabpanel"
            aria-labelledby="v-pills-card-tab"
          >
            Card
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-card"
            role="tabpanel"
            aria-labelledby="v-pills-card-tab"
          >
            Card transactions
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-account"
            role="tabpanel"
            aria-labelledby="v-pills-account-tab"
          >
            <CreateAccount />
          </div>

          <div
            className="tab-pane fade"
            id="v-pills-transactions"
            role="tabpanel"
            aria-labelledby="v-pills-transactions-tab"
          >
            <Transactions className="ttss" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
