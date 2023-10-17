import React, { useState } from "react";
import "./register.scss";
import {  useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const initialValue = {fname:"", username:"", email:"", mobile:"",checkbox:""}
  const [formData, setFormData] = useState(initialValue)
  const [error, setError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

const handleChange=(e)=>{
  const {name, value, type, checked} = e.target;
  if (type === 'checkbox') {
    setFormData({
      ...formData,
      [name]: checked, 
    });
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  // console.log(formData)
}



const handleSubmit=(e)=>{
  e.preventDefault();
  setError(validation(formData))
  setIsSubmit(true)
  if (Object.keys(error).length === 0 && isSubmit) {
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/category");
  }
}


const validation=(data)=>{
 const errorMsg={}
 const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
 const mobileRegex = /^[0-9]{10}$/;

 if(!data.fname){
  errorMsg.fname = "Field is required";
 }

 if(!data.username){
  errorMsg.username = "Field is required";
 }
 if(!data.email){
  errorMsg.email = "Field is required";
 }
 else if(!emailRegex.test(data.email)){
  errorMsg.email = "enter valid email"
 }
 if(!data.mobile){
  errorMsg.mobile = "Field is required";
 }
 else if(!mobileRegex.test(data.mobile)){
  errorMsg.mobile = "enter 10 digit mobile number"
 }
 if(!data.checkbox ){
  errorMsg.checkbox = "Check this box if you want to proceed";
 }
 return errorMsg;
}


  return (
    <>
      <section className="register-container">

        <div className="left-box">
          <h1>Discover new things on Superapp</h1>
        </div>
        <div className="right-box">
          <div className="center">
            <div className="heading">
              <h1>Super App</h1>
              <p>Create your new account</p>
            </div>
            <div className="form-box">
              <form onSubmit={handleSubmit}>
                <div className="info">
                  <input type="text" placeholder="Name" name="fname" value={formData.fname} onChange={handleChange}/>
                  {error && <div className="errorMsg">{error.fname}</div>}
                  <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange}/>
                  {error && <div className="errorMsg">{error.username}</div>}
                  <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange}/>
                  {error && <div className="errorMsg">{error.email}</div>}
                  <input type="tel" placeholder="Mobile" name="mobile" value={formData.mobile} onChange={handleChange}/>
                  {error && <div className="errorMsg">{error.mobile}</div>}
                </div>
                <div className="checkbox">
                  <input type="checkbox" name="checkbox" value={formData.checkbox} onChange={handleChange}/>
                  <span>Share my registration data with Superapp</span>
                  {error && <div className="errorMsg">{error.checkbox}</div>}
                </div>
                <div className="buttons">
                  <button type="submit">Sign Up</button>
                </div>
              </form>
            </div>
            <div className="conditions">
              <p>
                By clicking on Sign up. you agree to Superapp <span>Terms and
                Conditions of Use</span>
              </p>
              <p>
                To learn more about how Superapp collects, uses, shares and
                protects your personal data please head Superapp <span>Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
