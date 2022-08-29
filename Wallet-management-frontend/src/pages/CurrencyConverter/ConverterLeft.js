import React from "react";
import PropTypes from "prop-types";
import countryCodes from "./CountryData";

// Flag Icons
import { FlagIcon } from "react-flag-kit";

const ConverterLeft = (props) => {
  const getCountryName = (code) => {
    const fullCountry = countryCodes.filter((country) => country.code === code);
    return fullCountry[0].name;
  };
  return (
    <div>
      <div className="converter-left">
        <div className="top-left">
          <small>You Have</small>
          {/* Dynamically pass in the country name here */}
          <small className="country">
            {getCountryName(props.currency[0] + props.currency[1])}
          </small>
        </div>
        <div className="body-left">
          <div className="input-group">
            <input
              className="currencyinput"
              type="number"
              value={props.amount}
              onChange={(e) => props.onAmountChange(e.target.value)}
            />

            <select
              className="selectcurrency"
              id="country"
              value={props.currency}
              onChange={(e) => props.onCurrencyChange(e.target.value)}
            >
              {props.currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            {/* Pass a prop here code={country-code} to change flag dynamically */}
            <FlagIcon
              className="flag"
              code={props.currency[0] + props.currency[1]}
              width={18}
              height={15}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ConverterLeft.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default ConverterLeft;
