import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import GoogleLogin from "react-google-login";
import {AiOutlineClose} from "react-icons/ai";
import Signup from './Signup';
import "../Styles_sheet/Login.css"

function Login({open,close}) {
  const[loginData,setLoginData] = useState({
    email:"",
    password:""
  });
  
  const[loginPage,setLoginPage] = useState(true);

  function handleChange(e){
    const {name,value} = e.target;
    setLoginData((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    return close();
  }

  if(!open) return null;
  return ReactDOM.createPortal(
   <>
   { loginPage ? <form className="overLay" onSubmit={handleSubmit}>
        <div className="lg-container">
            <div className="top-lg">
              <img
              src="https://w0.peakpx.com/wallpaper/451/187/HD-wallpaper-billie-eilish-billie-eilish-thumbnail.jpg"
              alt="img"
              className="avatar-img"
              />
              <i onClick={()=>close()}><AiOutlineClose /></i>
            </div>
            <h2>Get Started</h2>
           <div className="lg">
              <h2>Email</h2>
              <input type="email" name="email" placeholder="Enter Email" onChange={handleChange}/>
           </div>
           <div className="lg">
              <h2>Password</h2>
              <input type="password" name="password" placeholder="Enter Password" onChange={handleChange}/>
           </div>
           <div className="lg">
              <input type="submit" value="Login"/>
            </div>
            <div>
              <GoogleLogin
                className="google-login"
                buttonText="Login with google"
              />
            </div>
            <div className="btm-content">
                <p>Dont have an account ?</p>
                <a href="#" onClick={()=>setLoginPage(false)}>Register</a>
            </div>
            <div className="btm-content">
                <p>password ?</p>
                <a href="#">forgetPassword</a>
            </div>
        </div>
    </form> : <Signup signup={()=>{setLoginPage(true);close()}}/> }
    </>,
    document.getElementById("portal1")
  );
}

export default Login