import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import GoogleLogin from "react-google-login";
import {AiOutlineClose} from "react-icons/ai"
import "../Styles_sheet/Login.css"

function Signup({signup}) {
  const[registerData,setRegisterData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  function handleChange(e){
    const {name,value} = e.target;
    setRegisterData((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    return signup();
  }

  return(
    <form className="overLay" onSubmit={handleSubmit}>
        <div className="lg-container sg-container">
            <div className="top-lg">
              <img
              src="https://w0.peakpx.com/wallpaper/451/187/HD-wallpaper-billie-eilish-billie-eilish-thumbnail.jpg"
              alt="img"
              className="avatar-img sgavatar-img"
              />
              <i onClick={()=>signup()}><AiOutlineClose /></i>
            </div>
            <h2>Get Started</h2>
            <div className="lg sg">
              <h2>Name</h2>
              <input type="text" name="name" placeholder="Enter Name" onChange={handleChange}/>
           </div>
           <div className="lg sg">
              <h2>Email</h2>
              <input type="email" name="email" placeholder="Enter Email" onChange={handleChange}/>
           </div>
           <div className="lg sg">
              <h2>Password</h2>
              <input type="password" name="password" placeholder="Enter Password" onChange={handleChange}/>
           </div>
           <div className="lg sg">
              <h2>Confirm Password</h2>
              <input type="password" name="password" placeholder="Re-Enter Password" onChange={handleChange}/>
           </div>
           <div className="lg">
              <input type="submit" value="SignUp"  />
            </div>
            <div>
              <GoogleLogin
                className="google-login"
                buttonText="SignUp with google"
              />
            </div>
        </div>
    </form>
  );
}

export default Signup;