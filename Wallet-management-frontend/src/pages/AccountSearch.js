import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { getAccountinfos } from "../features/accountinfos/accountinfoSlice";
// import { getAccountinfos } from "../features/payments/transferSlice";

const AccountSearch = () => {
  //   const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);
  const { accountinfos, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.accountinfo
  );

  useEffect(() => {
    dispatch(getAccountinfos());
  }, []);

  useEffect(() => {
    // console.log(accountinfos);
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      accountinfos.forEach((acc) => console.log(acc.account));
      // console.log(accountinfos);
      // navigate("/dashboard");
    }
    // dispatch(reset());
  }, [accountinfos, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    // if (accountinfos.length > 0) {
    if (e.target.value.length == 0) {
      setSearchResult([]);
      return;
    }
    setSearchResult(
      accountinfos.filter((acc) => acc.accountNumber.includes(e.target.value))
    );
    // }
  };
  // define onChange
  //   const onChange = (e) =>
  //     setInput(e.target.vak)
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [e.target.name]: e.target.value.toLowerCase(),
  //     }));

  return (
    <div className="container-fluid acccc">
      {/* search field */}

      <div className="mb-3 mt-4 form-check">
        <label className="form" htmlFor="example">
          Search a Spara User
        </label>
        <br />
        <input
          placeholder="search a user"
          className="accountSearch"
          type="text"
          onChange={onChange}
        />
      </div>
      {/* result */}
      {searchResult.map((acc) => (
        <>
          {/* <Link key={acc.accountNumber} to={`/transfer/${acc.id}`}>
            <div style={{ backgroundColor: "#f1f1f1" }}>
              <h3>{acc.name}</h3>
              <h4>{acc.accountNumber}</h4>
            </div>
          </Link> */}
          <div
            key={acc.id}
            id={acc.id}
            style={{
              backgroundColor: "#0294f4",
              padding: "5px",
            }}
          >
            <p className="text-white" style={{ fontSize: "20px" }}>
              Name: {acc.name}
            </p>
            <p className="text-white" style={{ textDecoration: "none" }}>
              Account: {acc.accountNumber}
            </p>
            <p className="text-white" style={{ textDecoration: "none" }}>
              Email: {acc.account.email && acc.account.email}
            </p>
          </div>
          <br />
        </>
      ))}
    </div>
  );
};

export default AccountSearch;
