// import React, { useRef, useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import OTPInput, { ResendOTP } from "otp-input-react";
// import logo from "../../images/logo.png";
// import "./Register.css";

// import AuthContext from "../../context/AuthProvider";
// import axios from "../../api/axios";
// import Verified from "./Verified";
// const OTP_URL = "/api/users/otp";

// const OTP = () => {
//   const [OTP, setOTP] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);
//   const { setAuth } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const errRef = useRef();

//   useEffect(() => {
//     if (success) {
//       navigate("/verified");
//     }
//   }, [OTP, success, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(OTP_URL, JSON.stringify({ otp: OTP }), {
//         headers: { "Content-Type": "application/json" },
//       });
//       console.log(JSON.stringify(response?.data));
//       //console.log(JSON.stringify(response));
//       const accessToken = response?.data?.accessToken;
//       const roles = response?.data?.roles;
//       setAuth({ OTP, roles, accessToken });
//       setOTP("");

//       setSuccess(true);
//     } catch (err) {
//       if (!err?.response) {
//         setErrMsg("No Server Response");
//       } else if (err.response?.status === 400) {
//         setErrMsg("Missing OTP");
//       } else if (err.response?.status === 401) {
//         setErrMsg("Unauthorized");
//       } else {
//         setErrMsg("OTP Verification Failed");
//       }
//       errRef.current.focus();
//     }
//   };

//   const renderButton = (buttonProps) => {
//     return (
//       <button {...buttonProps} className="btn btn-primary btn-sm mt-2">
//         Resend
//       </button>
//     );
//   };
//   console.log(OTP);
//   const renderTime = (remainingTime) => {
//     return (
//       <span className="text-white mt-2">{remainingTime} seconds remaining</span>
//     );
//   };

//   return (
//     <>
//       {success ? (
//         <Verified />
//       ) : (
//         <div className="container-fluid register">
//           <img className="navbar-brand login-logo mt-3" src={logo} alt="" />
//           <div className="text-center">
//             <h3 className="text-white fw-bold">Join The Most Fastest and</h3>
//             <h3 className="text-white fw-bold trusted">Trusted Network</h3>
//           </div>

//           <p
//             ref={errRef}
//             className={errMsg ? "errmsg" : "offscreen"}
//             aria-live="assertive"
//           >
//             {errMsg}
//           </p>
//           <p className="text-center text-white login-text">
//             Please enter the 6-digit verification code
//             <br /> sent to your email
//           </p>
//           <form
//             className="d-flex flex-column container align-items-center"
//             onSubmit={handleSubmit}
//           >
//             <OTPInput
//               value={OTP}
//               onChange={setOTP}
//               autoFocus
//               OTPLength={6}
//               otpType="number"
//               disabled={false}
//               secure={false}
//             />
//             <ResendOTP renderButton={renderButton} renderTime={renderTime} />
//             <br />
//             <div className="d-flex">
//               <Link to="/register">
//                 <button className="btn btn-outline-primary back">Back</button>
//               </Link>
//               <button className="submit fw-bold" type="submit">
//                 Continue
//               </button>
//             </div>
//           </form>

//           <p className="text-white text-center mt-4">
//             Already have an account?{" "}
//             <Link to="/login" className="text-decoration-none neutral-blue">
//               Login
//             </Link>
//           </p>
//         </div>
//       )}
//     </>
//   );
// };

// export default OTP;

import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import OTPInput, { ResendOTP } from "otp-input-react";
import logo from "../../images/logo.png";
import "./Register.css";

import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
import Verified from "./Verified";
const OTP_URL = "/api/users/otp";

const OTP = () => {
  const [OTP, setOTP] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  // const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const errRef = useRef();
  const API_URL = "http://localhost:4000/accounts/";

  useEffect(() => {
    if (success) {
      navigate("/verified/" + OTP);
      setOTP("");
    }
  }, [OTP, success, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(API_URL + "verify-token", { token: OTP.toString() })
        .then((res) => setSuccess(true));

      // const response = await axios.post(OTP_URL, JSON.stringify({ otp: OTP }), {
      //   headers: { "Content-Type": "application/json" },
      // });
      // console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      // const accessToken = response?.data?.accessToken;
      // const roles = response?.data?.roles;
      // setAuth({ OTP, roles, accessToken });
      // setOTP("");

      // setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing OTP");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("OTP Verification Failed");
      }
      errRef.current.focus();
    }
  };

  // const renderButton = (buttonProps) => {
  //   return (
  //     <button {...buttonProps} className="btn btn-primary btn-sm mt-2">
  //       Resend
  //     </button>
  //   );
  // };
  // console.log(OTP);
  // const renderTime = (remainingTime) => {
  //   return (
  //     <span className="text-white mt-2">{remainingTime} seconds remaining</span>
  //   );
  // };

  return (
    <>
      {/* {success ? (
        <Verified />
      ) : ( */}
      <div className="container-fluid register">
        <img className="navbar-brand login-logo mt-3" src={logo} alt="" />
        <div className="text-center">
          <h3 className="text-white fw-bold">Join The Fastest and</h3>
          <h3 className="text-white fw-bold trusted">Most Trusted Network</h3>
        </div>

        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <p className="text-center text-white login-text">
          Please enter the 6-digit verification code
          <br /> sent to your email
        </p>
        <form
          className="d-flex flex-column container align-items-center"
          onSubmit={handleSubmit}
        >
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
            secure={false}
          />
          {/* <ResendOTP renderButton={renderButton} renderTime={renderTime} /> */}
          <br />
          <div className="d-flex">
            <Link to="/register">
              <button className="btn btn-outline-primary back">Back</button>
            </Link>
            <button className="submit fw-bold" type="submit">
              Continue
            </button>
          </div>
        </form>

        {/* <p className="text-white text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none neutral-blue">
              Login
            </Link>
          </p> */}
      </div>
      {/* )} */}
    </>
  );
};

export default OTP;
