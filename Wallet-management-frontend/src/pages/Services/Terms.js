import React from 'react'
import './Services.css'
import logo from './logo.png'
import { useForm } from "react-hook-form";
 

const Terms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  
  return (
    <div className='container justify-content-center'>
    <img className="col-sm-4" src={logo} style={{width:"100px", height:'50px'}} alt=''/>
    <h6 className="medium" style={{textAlign:"center",}}>
Be rest assure that your information are securely safe with us.<br/> Your 
information will never be divulge to anyone without your consent</h6>
<p>All Fields in asteriks <span style={{color:"red"}}>*</span> are important</p>
      <form action="/action_page.php" onSubmit={handleSubmit(onSubmit)}> 
      <div className='row'>

  <div className="col">
    <label htmlFor="fname">First Name <span style={{color:"red"}}>*</span></label>
    <input type="text" 
    placeholder='First Name'
     id="fname"
    className={`form-control ${errors.fname && "invalid"}`}
                {...register("fname", { required: "First Name is Required" })}
                onKeyUp={() => {
                  trigger("fname");
                }}
    />
    {errors.fname && (
                <small className="text-danger">{errors.fname.message}</small>
              )}
  </div>


  <div className="col">
    <label htmlFor="mname">Middle Name <span style={{color:"red"}}>*</span></label>
    <input type="text" 
    placeholder='Middle Name'
    className={`form-control ${errors.mname && "invalid"}`}
                {...register("mname", { required: "Middle Name is Required" })}
                onKeyUp={() => {
                  trigger("mname");
                }} id="mname"/>
                   {errors.mname && (
                <small className="text-danger">{errors.mname.message}</small>
              )}
  </div></div>
      <div className='row'>
      <div className="col">
    <label htmlFor="lname">Last Name <span style={{color:"red"}}>*</span></label>
    <input type="text" 
    placeholder='Last Name'
    className={`form-control ${errors.lname && "invalid"}`}
                {...register("lname", { required: "Last Name is Required" })}
                onKeyUp={() => {
                  trigger("lname");
                }} id="lname"/>
                 {errors.lname && (
                <small className="text-danger">{errors.lname.message}</small>
              )}
  </div>
  
  <div className="col">
    <label htmlFor="email">Email Address <span style={{color:"red"}}>*</span></label>
    <input type="email" 
    placeholder='Email Address'
    className={`form-control ${errors.email && "invalid"}`}
                {...register("email", { required: "Email is Required", 
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}
                onKeyUp={() => {
                  trigger("email");
                }} id="email"/>
                   {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
  </div></div>
      <div className='row'>

      <div className="col">
  <label htmlFor="gender">Gender <span style={{color:"red"}}>*</span></label>
  <select 
  className={`form-control ${errors.mname && "invalid"}`}
                {...register("gender", { required: "Select gender is Required" })}
                onKeyUp={() => {
                  trigger("gender");
                }} id="gender">
                 {errors.gender && (
                <small className="text-danger">{errors.gender.message}</small>
              )}
    <option>Select Gender</option>
    <option value ="male">Male</option>
    <option value="female">Female</option>
  </select>
 
  </div>

  
  <div className="col">
    <label htmlFor="tel1">Phone Number 1 <span style={{color:"red"}}>*</span></label>
    <input type="tel" 
    placeholder='Phone Number 1'
    className={`form-control ${errors.tel1 && "invalid"}`}
                {...register("tel1", { required: "Phone Number is Required",  
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },
               })}
                onKeyUp={() => {
                  trigger("tel1");
                }} id="tel1"/>
                   {errors.tel1 && (
                <small className="text-danger">{errors.tel1.message}</small>
              )}
  </div></div>
      <div className='row'>

  <div className="col">
    <label htmlFor="bvn">BVN <span style={{color:"red"}}>*</span></label>
    <input type="text" 
    placeholder='BVN'
    className={`form-control ${errors.bvn && "invalid"}`}
                {...register("bvn", { required: "BVN Number is Required",
                min: {
                    value: 10,
                    message: "Minimum Required age is 10",
                  },
                  max: {
                    value:10,
                    message: "Maximum allowed age is 10",
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Only numbers are allowed",
                  } })}
                onKeyUp={() => {
                  trigger("bvn");
                }} id="bvn"/>
                      {errors.bvn && (
                <small className="text-danger">{errors.bvn.message}</small>
              )}
  </div>
  <div className="col">
    <label htmlFor="tel2">Phone Number 2 <span style={{color:"red"}}>*</span></label>
    <input type="tel" 
    placeholder='Phone Number 2'
    className={`form-control ${errors.tel2 && "invalid"}`}
                {...register("tel2", { required: "Other phone Number is Required",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                }, 
                })}
                onKeyUp={() => {
                  trigger("tel2");
                }} id="tel2"/>
                   {errors.tel2 && (
                <small className="text-danger">{errors.tel2.message}</small>
              )}
  </div></div>
      <div className='row'>

  <div className="col">
    <label htmlFor="address1">Residential Address 1<span style={{color:"red"}}>*</span></label>
    <input type="text" 
    placeholder='Residential Address 1'
    className={`form-control ${errors.address1 && "invalid"}`}
                {...register("address1", { required: "Residential address is Required" })}
                onKeyUp={() => {
                  trigger("address1");
                }}   id="address1"/>
                    {errors.address1 && (
                <small className="text-danger">{errors.address1.message}</small>
              )}
  </div>

    <div className="col">
  <label htmlFor="sel1">Country <span style={{color:"red"}}>*</span></label>
  <select className="form-control dropdown-toggle" data-toggle="dropdown" id="sel1">
    <option>Select Country</option>
    <option>America</option>
    <option>Nigeria</option>
  </select>
  </div>
  
  </div>
      <div className='row'>

 
  <div className="col">
    <label htmlFor="address2">Residential Address 2<span style={{color:"red"}}>*</span></label>
    <input type="text" 
    placeholder='Residential Address 2'
    className={`form-control ${errors.address2 && "invalid"}`}
                {...register("address2", { required: "Other residential address is Required" })}
                onKeyUp={() => {
                  trigger("address2");
                }}   id="address2"/>
                    {errors.address2 && (
                <small className="text-danger">{errors.address2.message}</small>
              )}
  </div> 
  <div className="col">
    <label htmlFor="state">State <span style={{color:"red"}}>*</span></label>
    <input type="text" 
    placeholder='state'
    className={`form-control ${errors.state && "invalid"}`}
                {...register("state", { required: "State of origin is Required" })}
                onKeyUp={() => {
                  trigger("state");
                }}   id="state"/>
                      {errors.state && (
                <small className="text-danger">{errors.state.message}</small>
              )}
  </div>
  </div>
      <div className='row'>
      <div className="col">
    <label htmlFor="dob">Date of birth<span style={{color:"red"}}>*</span></label>
    <input type="date" className="form-control"  id="dob"/>
  </div>

  <div className="col">
    <label htmlFor="lga">Local Government <span style={{color:"red"}}>*</span></label>
    <input type="text" 
    placeholder='Local Government'
    className={`form-control ${errors.lga && "invalid"}`}
                {...register("lga", { required: "Local Government is Required" })}
                onKeyUp={() => {
                  trigger("lga");
                }} id="lga"/>
                 {errors.lga && (
                <small className="text-danger">{errors.lga.message}</small>
              )}
  </div>
</div>
      <div className='row'>

  <div className="col">
    <label htmlFor="msg">How do you know about Us <span style={{color:"red"}}>*</span></label>
    <input type="text" 
    placeholder='How do you know about Us'
    className={`form-control ${errors.msg && "invalid"}`}
                {...register("msg", { required: "Message is Required",
                minLength: {
                  value: 10,
                  message: "Minimum Required length is 10",
                },
                maxLength: {
                  value: 50,
                  message: "Maximum allowed length is 50 ",
                }
                 })}
                onKeyUp={() => {
                  trigger("msg");
                }} id="msg"/>
                 {errors.msg && (
                <small className="text-danger">{errors.msg.message}</small>
              )}
  </div>
  <div className="col">
    <label htmlFor="postcode">Postal Code <span style={{color:"red"}}>*</span></label>
    <input type="text" 
    placeholder='Postal Code'
    className={`form-control ${errors.postalcode && "invalid"}`}
                {...register("postalcode", { required: "Postal code is Required" })}
                onKeyUp={() => {
                  trigger("postalcode");
                }} id="postcode"/>
                  {errors.postalcode && (
                <small className="text-danger">{errors.postalcode.message}</small>
              )}
  </div></div>
      <div className='row'>
</div>
  <div className="form-group form-check" id='down-form'>
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox"/> I accept the <span className='text-info'>Terms and Conditions</span>
    </label>
  </div>
  <div className='d-grid gap-2 d-md-flex  justify-content-md-center mx-auto'>
  <button type="submit" className="btn btn-primary " style={{textAlign:'center'}} value="Send message">Submit</button></div>
</form>
    </div>
  )
}

export default Terms