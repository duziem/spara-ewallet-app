import React, { useState, useEffect } from "react";
import axios from "axios";

import { useSelector } from "react-redux";

// sort transactions in descending order using the transaction date
const sortTransactions = (a, b) => {
  const dateA = new Date(a.createdAt);
  const dateB = new Date(b.createdAt);
  if (dateB.getTime() > dateA.getTime()) return 1;
  if (dateB.getTime() < dateA.getTime()) return -1;
  return 0;
};

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { fundAccount } = useSelector((state) => state.fundAccount);
  const { transferInfo } = useSelector((state) => state.transfer);
  const { accountinfo } = useSelector((state) => state.accountinfo);

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
  }, [accountinfo, user, fundAccount, transferInfo]);

  return (
    <div>
      {transactions.length > 0 &&
        transactions.sort(sortTransactions).map((t) => (
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
              <h5>
                {t.transactionType == "debit" ? "- " : " "}₦{t.amount}
              </h5>
            </div>
            <hr />
            <p>{t.purpose}</p>
          </div>
        ))}
    </div>
  );
};

export default Transactions;
