import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fundAccount, reset } from "../features/fundAccount/fundAccountSlice";
import Spinner from "../components/Spinner";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const FundAccount = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    amount: "",
    cvv: "",
    email: "",
    expiry_year: "",
    expiry_month: "",
  });

  const { cardNumber, amount, cvv, email, expiry_month, expiry_year } =
    formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.fundAccount
  );

  // get data from the user to autopoulate some of the wallet account fields
  // const fullName = user.firstName + user.lastName;

  useEffect(() => {
    if (isSuccess) {
      console.log(message);
      toast.success("Account funding successful");
      // navigate("/dashboard");
    }
    return () => {
      dispatch(reset());
    };
  }, [isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => {
      // if (e.target.name == "amount") {
      //   return {
      //     ...prevState,
      //     [e.target.name]: parseInt(e.target.value) * 100,
      //   };
      // }
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const cardData = {
      cardNumber,
      amount,
      cvv,
      email,
      expiry_month,
      expiry_year,
    };
    console.log(cardData);
    dispatch(fundAccount(cardData));
    // dispatch(register(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridcardNumber">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter card number"
              name="cardNumber"
              value={cardNumber}
              required
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Amount"
              name="amount"
              required
              onChange={onChange}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            required
            onChange={onChange}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCvv">
            <Form.Label>CVV</Form.Label>
            <Form.Control name="cvv" value={cvv} required onChange={onChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridExpmnth">
            <Form.Label>Expiry month</Form.Label>
            <Form.Control
              type="number"
              placeholder="month"
              name="expiry_month"
              value={expiry_month}
              required
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridExpyr">
            <Form.Label>Expiry year</Form.Label>
            <Form.Control
              type="number"
              placeholder="year"
              name="expiry_year"
              value={expiry_year}
              required
              onChange={onChange}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FundAccount;
