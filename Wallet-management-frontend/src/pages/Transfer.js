import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

// import { PaystackButton } from "react-paystack";
import { usePaystackPayment } from "react-paystack";
// import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { makeTransfer } from "../features/transfer/transferSlice";

function Transfer() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);

  // const { id } = useParams(); // get the wallet account id from the route
  const [config, setConfig] = useState({});

  // const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const { transferInfo, isError, isSuccess, message } = useSelector(
  //   (state) => state.fundAccount
  // );

  // switch to paystack hook
  // you can call this function anything
  // const reqConfig = {
  //   headers: {
  //     Authorization: `Bearer ${user.jwtToken}`,
  //   },
  // };
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);

    let ref = reference.reference;
    dispatch(makeTransfer(ref));
    // axios
    //   .get(
    //     "http://localhost:4000/transactions/verify?reference=" +
    //       reference.reference +
    //       "&senderId=" +
    //       id,
    //     reqConfig
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     navigate("/dashboard");
    //   });
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  useEffect(() => {
    if (email.length && amount.length) {
      setConfig({
        reference: new Date().getTime().toString(),
        email,
        amount: amount * 100,
        publicKey: "pk_test_3b30ece1e82621f8f0f721c8c3cabb15f26ce1ed",
      });
    }
  }, [email, amount]);

  const PaystackHook = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <button
          onClick={() => {
            initializePayment(onSuccess, onClose);
            console.log(email, amount);
          }}
        >
          Transfer
        </button>
      </div>
    );
  };

  return (
    // <div className="container">
    //   <PaystackButton className="button" {...componentProps} />
    // </div>
    <>
      {/* <input
        type="email"
        id="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <input
        type="number"
        id="amount"
        name="amount"
        onChange={(e) => setAmount(e.target.value)}
        required
      /> */}
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridemail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            placeholder="Enter amount"
            type="number"
            id="amount"
            name="amount"
            onChange={(e) => {
              const amount = e.target.value;
              setAmount(amount);
            }}
            required
          />
        </Form.Group>
      </Row>
      <br />
      <PaystackHook />
    </>
  );
}

export default Transfer;
