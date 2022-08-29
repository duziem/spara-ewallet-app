import React, { useState, useEffect } from "react";
import axios from "axios";

import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import {
//   getTransactions,
//   reset,
// } from "../features/transactions/transactionSlice";
// import Spinner from "../components/Spinner";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  //   const { transactions, isError, isSuccess, isLoading, message } = useSelector(
  //     (state) => state.transaction
  //   );

  useEffect(() => {
    if (transactions) {
      console.log(transactions);
    }

    // toast.success();
    //   navigate("/dashboard");
  }, [transactions]);

  useEffect(() => {
    // if (transactions.length) dispatch(reset());
    // dispatch(getTransactions(user.id));

    const config = {
      headers: {
        Authorization: `Bearer ${user.jwtToken}`,
      },
    };

    axios
      .get("http://localhost:4000/transactions/" + user.id, config)
      .then((res) => setTransactions(res.data));
  }, [user]);

  return (
    <div>
      {transactions.length > 0 &&
        transactions.map((t) => (
          <div
            key={t.id}
            className="m-5 p-3 row"
            style={{
              boxShadow: "2px 2px 4px rgba(0,0,0,.4)",
              minWidth: "100%",
              borderRadius: "10px",
              borderLeft:
                t.transactionType == "debit"
                  ? "4px solid red"
                  : "4px solid green",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h5>{t.createdAt.substring(0, t.createdAt.indexOf("T"))}</h5>
              <h5>₦{t.amount}</h5>
            </div>
            <hr />
            <p>{t.purpose}</p>
          </div>
        ))}
    </div>
  );
};

export default Transactions;
