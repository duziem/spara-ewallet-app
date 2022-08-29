// import React, { useState, useEffect } from "react";
// import "./CreateAccount.css";

// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import {
//   createAccountinfo,
//   reset,
// } from "../../features/accountinfos/accountinfoSlice";
// import Spinner from "../../components/Spinner";

// const CreateAccount = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     gender: "",
//     phoneNumber1: "",
//     bvn: "",
//     phoneNumber2: "",
//     address1: "",
//     country: "",
//     address2: "",
//     state: "",
//     dateOfBirth: "",
//     localGovernment: "",
//     howDidYouHearAboutUs: "",
//     postalCode: "",
//     acceptTerms: true,
//   });
//   const {
//     // firstName,
//     // lastName,
//     // email,
//     gender,
//     phoneNumber1,
//     bvn,
//     phoneNumber2,
//     address1,
//     country,
//     address2,
//     state,
//     dateOfBirth,
//     localGovernment,
//     howDidYouHearAboutUs,
//     postalCode,
//     acceptTerms,
//   } = formData;

//   // gender: "Male",
//   //   howDidYouHearAboutUs: "Facebook",
//   //   bvn: "1234567899",
//   //   address1: "Bode thomas",
//   //   address2: "Bode thomas",
//   //   dateOfBirth: "2020-12-11",
//   //   phoneNumber1: "0809000000",
//   //   phoneNumber2: "0809000000",
//   //   country: "Nigeria",
//   //   state: "Imo",
//   //   localGovernment: "Oru",
//   //   postalCode: "121",
//   //   acceptTerms: true,

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);
//   const { accountinfo, isLoading, isError, isSuccess, message } = useSelector(
//     (state) => state.accountinfo
//   );

//   // get data from the user to autopoulate some of the wallet account fields
//   // const fullName = user.firstName + user.lastName;

//   useEffect(() => {
//     if (isSuccess) {
//       console.log(accountinfo);
//       navigate("/dashboard");
//     }
//     // dispatch(reset());
//   }, [user, isError, isSuccess, message, navigate, dispatch]);

//   const onChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));

//     if (e.target.type == "checkbox" && e.target.checked) {
//       setFormData((prevState) => ({
//         ...prevState,
//         [e.target.name]: true,
//       }));
//     }
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();

//     // if (!bvn) {
//     //   toast.error("Registeration Failed");
//     // } else {
//     const userData = {
//       // firstName,
//       // lastName,
//       // email,
//       gender,
//       phoneNumber1,
//       bvn,
//       phoneNumber2,
//       address1,
//       country,
//       address2,
//       state,
//       dateOfBirth,
//       localGovernment,
//       howDidYouHearAboutUs,
//       postalCode,
//       acceptTerms,
//     };
//     console.log(userData);
//     dispatch(createAccountinfo(userData));
//     // dispatch(register(userData));
//     toast.success("Registration Successful");
//     // navigate("/dashboard");
//   };
//   if (isLoading) {
//     return <Spinner />;
//   }

//   return (
//     <div className="container-fluid createform">
//       <form className="formclass" onSubmit={onSubmit}>
//         <p className="text-center pcreate">Complete your account</p>
//         <div className="row">
//           <div className="col">
//             <label htmlFor="firstName">
//               First Name <span style={{ color: "red" }}>*</span>
//             </label>
//             <input
//               type="text"
//               placeholder="First Name"
//               id="firstName"
//               value={user.firstName}
//               onChange={onChange}
//               className="inputAccount"
//               name="firstName"
//               required
//               disabled
//             />
//           </div>
//           <div className="col">
//             <label htmlFor="lastName">
//               Last Name <span style={{ color: "red" }}>*</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={user.lastName}
//               onChange={onChange}
//               className="inputAccount"
//               id="lastName"
//               name="lastName"
//               required
//               disabled
//             />
//           </div>

//           {/* <div className="col">
//             <label htmlFor="middleName">
//               Middle Name <span style={{ color: "red" }}>*</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Middle Name"
//               value={middleName}
//               onChange={onChange}
//               className=""
//               id="middleName"
//               name="middleName"
//               required
//             />
//           </div> */}
//         </div>
//         <div className="row mb-3">
//           {/* <div className="col">
//             <label htmlFor="email">
//               Email Address <span style={{ color: "red" }}>*</span>
//             </label>
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={user.email}
//               onChange={onChange}
//               className="inputAccount"
//               id="email"
//               name="email"
//               required
//               disabled
//             />
//           </div> */}
//         </div>
//         <div className="row">
//           <div className="col">
//             <label htmlFor="gender">
//               Gender <span style={{ color: "red" }}>*</span>
//             </label>
//             <select
//               value={gender}
//               onChange={onChange}
//               className=""
//               id="gender"
//               name="gender"
//               required
//             >
//               <option value="" disabled>
//                 Select Gender
//               </option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//           </div>

//           <div className="col">
//             <label htmlFor="phoneNumber1">
//               Phone Number 1 <span style={{ color: "red" }}>*</span>
//             </label>
//             <input
//               type="number"
//               className="inputAccount"
//               placeholder="Phone Number 1"
//               value={phoneNumber1}
//               onChange={onChange}
//               id="phoneNumber1"
//               name="phoneNumber1"
//               required
//             />
//           </div>
//         </div>
//         <div className="row">
//           {/* <div className="col">
//             <label htmlFor="bvn">
//               BVN <span style={{ color: "red" }}>*</span>
//             </label>
//             <input
//               type="text"
//               placeholder="BVN"
//               value={bvn}
//               onChange={onChange}
//               className="inputAccount"
//               id="bvn"
//               name="bvn"
//             />
//           </div> */}
//           {/* <div className="col">
//             <label htmlFor="phoneNumber2">Phone Number 2</label>
//             <input
//               type="number"
//               className="inputAccount"
//               placeholder="Phone Number 2"
//               value={phoneNumber2}
//               onChange={onChange}
//               id="phoneNumber2"
//               name="phoneNumber2"
//             />
//           </div> */}
//         </div>
//         <div className="row">
//           <div className="col">
//             <label htmlFor="address1">
//               Residential Address 1<span style={{ color: "red" }}>*</span>
//             </label>
//             <input
//               type="text"
//               className="inputAccount"
//               placeholder="Residential Address 1"
//               value={address1}
//               onChange={onChange}
//               id="address1"
//               name="address1"
//               required
//             />
//           </div>

//           <div className="col">
//             <label htmlFor="country">
//               Country <span style={{ color: "red" }}>*</span>
//             </label>
//             <select
//               value={country}
//               onChange={onChange}
//               id="country"
//               name="country"
//               required
//             >
//               <option selected disabled value="">
//                 Select Country
//               </option>
//               <option value="America">America</option>
//               <option value="Nigeria">Nigeria</option>
//             </select>
//           </div>
//         </div>
//         <div className="row">
//           {/* <div className="col">
//             <label htmlFor="address2">
//               Residential Address 2<span style={{ color: "red" }}>*</span>
//             </label>
//             <input
//               type="text"
//               className="inputAccount"
//               placeholder="Residential Address 2"
//               value={address2}
//               onChange={onChange}
//               id="address2"
//               name="address2"
//               required
//             />
//           </div> */}
//           <div className="col">
//             <label htmlFor="state">
//               State <span style={{ color: "red" }}>*</span>
//             </label>
//             <input
//               type="text"
//               className="inputAccount"
//               placeholder="state"
//               value={state}
//               onChange={onChange}
//               id="state"
//               name="state"
//               required
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col">
//             <label htmlFor="dateOfBirth">
//               Date of birth<span style={{ color: "red" }}>*</span>
//             </label>
//             <input
//               type="date"
//               className="inputAccount"
//               id="dateOfBirth"
//               name="dateOfBirth"
//               required
//               onChange={onChange}
//             />
//           </div>
//           <div className="col">
//             <label htmlFor="localGovernment">
//               Local Government <span style={{ color: "red" }}>*</span>
//             </label>
//             <input
//               type="text"
//               className="inputAccount"
//               placeholder="Local Government"
//               value={localGovernment}
//               onChange={onChange}
//               id="localGovernment"
//               name="localGovernment"
//               required
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col">
//             <label htmlFor="howDidYouHearAboutUs">
//               How do you know about Us <span style={{ color: "red" }}>*</span>
//             </label>
//             <input
//               type="text"
//               className="inputAccount"
//               placeholder="How do you know about Us"
//               value={howDidYouHearAboutUs}
//               onChange={onChange}
//               id="howDidYouHearAboutUs"
//               name="howDidYouHearAboutUs"
//               required
//             />
//           </div>
//           <div className="col">
//             <label htmlFor="postcode">
//               Postal Code <span style={{ color: "red" }}>*</span>
//             </label>
//             <input
//               type="text"
//               className="inputAccount"
//               placeholder="Postal Code"
//               value={postalCode}
//               onChange={onChange}
//               id="postalCode"
//               name="postalCode"
//               required
//             />
//           </div>
//         </div>
//         <div className="row"></div>
//         <div className="form-group form-check" id="down-form">
//           <label className="form-check-label">
//             <input
//               className="form-check-input"
//               id="acceptTerms"
//               name="acceptTerms"
//               type="checkbox"
//               onChange={onChange}
//             />{" "}
//             I accept the <span className="text-info">Terms and Conditions</span>
//           </label>
//         </div>
//         <div className="d-grid gap-2 d-md-flex  justify-content-md-center mx-auto">
//           <button
//             type="submit"
//             className="btn btn-primary "
//             style={{ textAlign: "center" }}
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateAccount;

import React, { useState, useEffect } from "react";
import "./CreateAccount.css";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createAccountinfo,
  reset,
} from "../../features/accountinfos/accountinfoSlice";
import Spinner from "../../components/Spinner";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phoneNumber1: "",
    bvn: "",
    phoneNumber2: "",
    address1: "",
    country: "",
    address2: "",
    state: "",
    dateOfBirth: "",
    localGovernment: "",
    howDidYouHearAboutUs: "",
    postalCode: "",
    acceptTerms: true,
  });
  const {
    // firstName,
    // lastName,
    // email,
    gender,
    phoneNumber1,
    bvn,
    phoneNumber2,
    address1,
    country,
    address2,
    state,
    dateOfBirth,
    localGovernment,
    howDidYouHearAboutUs,
    postalCode,
    acceptTerms,
  } = formData;

  // gender: "Male",
  //   howDidYouHearAboutUs: "Facebook",
  //   bvn: "1234567899",
  //   address1: "Bode thomas",
  //   address2: "Bode thomas",
  //   dateOfBirth: "2020-12-11",
  //   phoneNumber1: "0809000000",
  //   phoneNumber2: "0809000000",
  //   country: "Nigeria",
  //   state: "Imo",
  //   localGovernment: "Oru",
  //   postalCode: "121",
  //   acceptTerms: true,

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { accountinfo, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.accountinfo
  );

  // get data from the user to autopoulate some of the wallet account fields
  // const fullName = user.firstName + user.lastName;

  useEffect(() => {
    if (isSuccess) {
      console.log(accountinfo);
      navigate("/dashboard");
    }
    // dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    if (e.target.type == "checkbox" && e.target.checked) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: true,
      }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // if (!bvn) {
    //   toast.error("Registeration Failed");
    // } else {
    const userData = {
      // firstName,
      // lastName,
      // email,
      gender,
      phoneNumber1,
      bvn,
      phoneNumber2,
      address1,
      country,
      address2,
      state,
      dateOfBirth,
      localGovernment,
      howDidYouHearAboutUs,
      postalCode,
      acceptTerms,
    };
    console.log(userData);
    dispatch(createAccountinfo(userData));
    // dispatch(register(userData));
    toast.success("Registeration Successful");
    //   navigate("/dashboard");
    // }
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container-fluid createform">
      <form className="formclass form-group" onSubmit={onSubmit}>
        <p className=" pcreate">Complete your account</p>
        <div className="row form-group">
          <div className="col ">
            <label htmlFor="firstName" className="lll">
              First Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              value={user.firstName}
              onChange={onChange}
              className="inputAccount form-control"
              name="firstName"
              required
              disabled
            />
          </div>
          <div className="col">
            <label htmlFor="lastName" className="lll">
              Last Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              value={user.lastName}
              onChange={onChange}
              className="inputAccount form-control"
              id="lastName"
              name="lastName"
              required
              disabled
            />
          </div>
        </div>
        {/* <div className="row mb-3">
          <div className="col">
            <label htmlFor="email" className="ll">
              Email Address <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              placeholder="Email Address"
              value={user.email}
              onChange={onChange}
              className="inputAccount form-control "
              id="email"
              name="email"
              required
              disabled
            />
          </div>
        </div> */}
        <div className="row kkk">
          <div className="col sec">
            <label htmlFor="gender" className="">
              Gender <span style={{ color: "red" }}>*</span>
            </label>
            <select
              value={gender}
              onChange={onChange}
              className="inputAccount"
              id="gender"
              name="gender"
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="col sec">
            <label htmlFor="country" className="">
              Country <span style={{ color: "red" }}>*</span>
            </label>
            <select
              value={country}
              onChange={onChange}
              id="country"
              name="country"
              required
              className="inputAccount"
            >
              <option selected disabled value="">
                Select Country
              </option>
              <option value="America">America</option>
              <option value="Nigeria">Nigeria</option>
            </select>
          </div>
        </div>
        <div className="row">
          {/* <div className="col">
            <label htmlFor="bvn" className="lll">
              BVN <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="BVN"
              value={bvn}
              onChange={onChange}
              className="inputAccount form-control"
              id="bvn"
              name="bvn"
            />
          </div> */}
          {/* <div className="col mb-3">
            <label htmlFor="phoneNumber2" className="lll">
              Phone Number 2
            </label>
            <input
              type="number"
              className="inputAccount form-control"
              placeholder="Phone Number 2"
              value={phoneNumber2}
              onChange={onChange}
              id="phoneNumber2"
              name="phoneNumber2"
            />
          </div> */}
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="address1" className="lll">
              Residential Address<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="inputAccount form-control"
              placeholder="Residential Address 1"
              value={address1}
              onChange={onChange}
              id="address1"
              name="address1"
              required
            />
          </div>
          <div className="col">
            <label htmlFor="phoneNumber1" className="lll">
              Phone Number <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="number"
              className="inputAccount form-control "
              placeholder="Phone Number 1"
              value={phoneNumber1}
              onChange={onChange}
              id="phoneNumber1"
              name="phoneNumber1"
              required
            />
          </div>
        </div>
        <div className="row">
          {/* <div className="col">
            <label htmlFor="address2" className="lll">
              Residential Address 2<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="inputAccount form-control"
              placeholder="Residential Address 2"
              value={address2}
              onChange={onChange}
              id="address2"
              name="address2"
              required
            />
          </div> */}
          <div className="col mt-3">
            {/* <label htmlFor="state" className="lll">
              State <span style={{ color: "red" }}>*</span>
            </label> */}
            <input
              type="text"
              className="inputAccount form-control"
              placeholder="state"
              value={state}
              onChange={onChange}
              id="state"
              name="state"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="dateOfBirth" className="lll">
              Date of birth<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="date"
              className="inputAccount form-control"
              id="dateOfBirth"
              name="dateOfBirth"
              required
              onChange={onChange}
            />
          </div>
          <div className="col">
            <label htmlFor="localGovernment" className="lll">
              Local Government <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="inputAccount form-control"
              placeholder="Local Government"
              value={localGovernment}
              onChange={onChange}
              id="localGovernment"
              name="localGovernment"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="howDidYouHearAboutUs" className="lll">
              How do you know about Us <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="inputAccount form-control"
              placeholder="How do you know about Us"
              value={howDidYouHearAboutUs}
              onChange={onChange}
              id="howDidYouHearAboutUs"
              name="howDidYouHearAboutUs"
              required
            />
          </div>
          <div className="col">
            <label htmlFor="postcode" className="lll">
              Postal Code <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="inputAccount form-control"
              placeholder="Postal Code"
              value={postalCode}
              onChange={onChange}
              id="postalCode"
              name="postalCode"
              required
            />
          </div>
        </div>
        <div className="row"></div>
        <div className="form-group form-check" id="down-form">
          <label className="lll">
            <input
              className="form-check-input form-control"
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              onChange={onChange}
            />
            {"   "}I accept the{" "}
            <span className="text-info">Terms and Conditions</span>
          </label>
        </div>
        <div className="d-grid gap-2 d-md-flex  justify-content-md-center mx-auto">
          <button
            type="submit"
            className="btn btn-primary "
            style={{ textAlign: "center" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
