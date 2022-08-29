import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import "./Login.css";
import Header from "../../components/Header/Header";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // if (isSuccess || user) {
    if (isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="container-fluid login">
        <Header />
        <div className="text-center">
          <h3 className="text-white fw-bold">
            Join The Fastest and <br />
            Trusted Network
          </h3>
        </div>
        <h3 className="text-center fw-bold text-white login-text">Login</h3>
        <div className="container-fluid">
          <form
            className="d-flex flex-column container align-items-center"
            onSubmit={onSubmit}
          >
            <div className="input-icons text-center">
              <i className="fa fa-user-circle-o icon"></i>
              <input
                className="input-field"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Email"
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
                id="password"
                name="password"
                value={password}
                placeholder="Enter your Password"
                onChange={onChange}
                required
              />
            </div>
            <Link
              to="/"
              className="text-decoration-none text-white text-right mb-3 forgot-password"
              aria-current="page"
            >
              Forgot Password
            </Link>

            <button className="submit fw-bold" type="submit">
              Login
            </button>
          </form>
          <p className="text-white text-center mb-4">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-decoration-none text-white text-right mb-3 forgot-password"
              aria-current="page"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
