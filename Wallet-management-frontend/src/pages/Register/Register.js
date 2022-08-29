import React, { useRef, useState, useEffect } from "react";
import "react-phone-number-input/style.css";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner";

import "./Register.css";
import logo from "../../images/logo.png";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { firstName, lastName, email, password, confirmPassword } = formData;
  const userRef = useRef();

  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error("Registration failed. Please try again");
    }
    // if (isSuccess) {
    //   navigate("/login");
    // }
    if (isSuccess) {
      setIsRegistered(true);
      dispatch(reset());
      navigate("/OTP");
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const v1 = PWD_REGEX.test(confirmPassword);
    const v2 = PWD_REGEX.test(password);
    if (v1 !== v2) {
      toast.error("Password do not match");
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      };
      dispatch(register(userData));
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      {isRegistered ? (
        <>
          <h2>Registered - check your email</h2>
        </>
      ) : (
        <div className="container-fluid register">
          <img className="navbar-brand login-logo mt-3" src={logo} alt="" />

          <div className="text-center">
            <h3 className="text-white fw-bold">Join The Fastest and</h3>
            <h3 className="text-white fw-bold trusted">Trusted Network</h3>
          </div>
          <h3 className="text-center fw-bold text-white login-text">Sign Up</h3>
          <div className="container-fluid">
            <form
              className="d-flex flex-column container align-items-center"
              onSubmit={onSubmit}
            >
              <div className="input-icons text-center">
                <i className="fa fa-user-circle-o icon"></i>
                <input
                  type="text"
                  className="input-field"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  ref={userRef}
                  autoComplete="off"
                  placeholder="Enter your First Name"
                  onChange={onChange}
                  required
                />
              </div>

              <div className="input-icons text-center">
                <i className="fa fa-user-circle-o icon"></i>
                <input
                  type="text"
                  className="input-field"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  ref={userRef}
                  autoComplete="off"
                  placeholder="Enter your Last Name"
                  onChange={onChange}
                  required
                />
              </div>

              <div className="input-icons text-center">
                <i className="fa fa-user-circle-o icon"></i>
                <input
                  type="email"
                  className="input-field"
                  id="email"
                  name="email"
                  value={email}
                  ref={userRef}
                  autoComplete="off"
                  placeholder="Enter your Email"
                  onChange={onChange}
                  required
                />
              </div>

              <div className="input-icons text-center">
                <i
                  className={
                    isRevealPwd ? "fa fa-eye-slash icon" : "fa fa-eye icon"
                  }
                  title={isRevealPwd ? "Hide password" : "Show password"}
                  src={isRevealPwd ? "hide" : "show"}
                  onClick={() => setIsRevealPwd((prevState) => !prevState)}
                ></i>
                <input
                  type={isRevealPwd ? "text" : "password"}
                  className="input-field"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter your Password"
                  onChange={onChange}
                  required
                />
              </div>

              <div className="input-icons text-center">
                <i
                  className={
                    isRevealPwd ? "fa fa-eye-slash icon" : "fa fa-eye icon"
                  }
                  title={isRevealPwd ? "Hide password" : "Show password"}
                  src={isRevealPwd ? "hide" : "show"}
                  onClick={() => setIsRevealPwd((prevState) => !prevState)}
                ></i>
                <input
                  className="input-field"
                  type={isRevealPwd ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirm your Password"
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-check text-white">
                <input
                  className="form-check-input border border-primary bg-transparent"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  required
                />
                <p className="text-white text-center mb-4">
                  I agree to Spara{" "}
                  <a className="neutral-blue" href="/signup">
                    terms of services{" "}
                    <span className="text-decoration-none">and</span>{" "}
                    <span className="neutral-blue" href="/signup">
                      privacy policy
                    </span>
                  </a>
                </p>
              </div>

              <button
                disabled={
                  !firstName || !lastName || !email || !password ? true : false
                }
                className="submit fw-bold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
