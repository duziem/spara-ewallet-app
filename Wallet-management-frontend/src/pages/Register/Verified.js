import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Verified = () => {
  // const [verifyToken, setVerifyToken]= useState("");
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();
  const API_URL = "http://localhost:4000/accounts/";

  useEffect(() => {
    const tokenData = {
      token,
    };
    axios.post(API_URL + "verify-email", tokenData).then((res) => {
      // if(res.data.message){
      setIsVerified(true);
      // }
    });
  }, []);

  const routeToLogin = () => {
    setTimeout(() => {
      navigate("/login");
    }, 7000);
  };

  useEffect(() => {
    if (isVerified) {
      routeToLogin();
    }
  }, [isVerified]);

  return (
    <div>
      {isVerified && (
        <h3>
          Verification successful - you are about to be redirected to the login
          page
        </h3>
      )}
    </div>
  );
};

// export default Verification;

export default Verified;
