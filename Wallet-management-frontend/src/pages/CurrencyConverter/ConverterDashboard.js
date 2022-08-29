import "./Converter.css";
import Converter from "./Converter";
import { useState, useEffect } from "react";

function ConverterDashboard() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("NGN");
  const [rates, setRates] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "U7Sp0MAGnh6EkvT6KLyVAVQHHt8Ocecm");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      "https://api.apilayer.com/exchangerates_data/latest?base=EUR",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setRates(result.rates);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const forAmount1Change = (amount1) => {
    setAmount2(((amount1 * rates[currency2]) / rates[currency1]).toFixed(5));
    setAmount1(amount1);
  };

  const forAmount2Change = (amount2) => {
    setAmount1(((amount2 * rates[currency1]) / rates[currency2]).toFixed(5));
    setAmount2(amount2);
  };

  const forCurrency1Change = (currency1) => {
    setAmount2(((amount1 * rates[currency2]) / rates[currency1]).toFixed(5));
    setCurrency1(currency1);
  };

  const forCurrency2Change = (currency2) => {
    setAmount1(((amount2 * rates[currency1]) / rates[currency2]).toFixed(5));
    setCurrency2(currency2);
  };

  useEffect(() => {
    if (rates) {
      forAmount1Change(1);
    }
  }, [rates]);

  return (
    <div className="App">
      <Converter
        currencies={Object.keys(rates)}
        amount1={amount1}
        amount2={amount2}
        currency1={currency1}
        currency2={currency2}
        onAmountChange1={forAmount1Change}
        onAmountChange2={forAmount2Change}
        onCurrencyChange1={forCurrency1Change}
        onCurrencyChange2={forCurrency2Change}
        rates={rates}
      />
    </div>
  );
}

export default ConverterDashboard;
