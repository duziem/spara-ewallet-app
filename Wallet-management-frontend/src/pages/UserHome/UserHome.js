import React, { useState, useEffect } from "react";
import "./UserHome.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const UserHome = () => {
  const [walletAccount, setWalletAccount] = useState({});
  const { user } = useSelector((state) => state.auth);
  const { accountinfo } = useSelector((state) => state.accountinfo);
  const { fundAccount } = useSelector((state) => state.fundAccount);
  const { transferInfo } = useSelector((state) => state.transfer);
  // const dispatch = useDispatch();

  const API_URL = "http://localhost:4000/wallets/";

  // create new account info
  // const getWalletAcount = async (token) => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   const response = await axios.get(API_URL + user.id, config);
  //   //   console.log(response.data);
  //   return response.data;
  // };

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.jwtToken}`,
      },
    };
    axios
      .get(API_URL + user.id, config)
      .then((res) => setWalletAccount(res.data));
    // const acc = getWalletAcount(user.jwtToken);
    // if (acc) {
    //   setWalletAccount(acc);
    // }
  }, [accountinfo, fundAccount, transferInfo]);

  return (
    <div>
      <div className="containerH">
        <div className="mobileH">
          <div className="headerH"></div>
          <div className="contentH">
            <p className="text-center userrName">
              {user.firstName + " " + user.lastName}
            </p>
            <div className="totalH ">
              <div className="labelH m-3 lightB">Total balance: {"   "} </div>
              <div className="valueH ">
                {walletAccount.balance ? "₦" + walletAccount.balance : "₦0.00"}
                {/* {accountinfo.balance ? accountinfo.balance : "₦0.00"} */}
              </div>
            </div>
            <div className="totalH ">
              <div className="labelH m-3 lightB">Account number: {"   "} </div>
              <div className="valueH ">
                {walletAccount.accountNumber ? walletAccount.accountNumber : ""}
              </div>
            </div>
            <div className="balanceH">
              <span className="sav">Spara Awoof: {"  "}</span>₦0.00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
