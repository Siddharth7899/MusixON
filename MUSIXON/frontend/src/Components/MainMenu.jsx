import React , {useState,useEffect} from 'react';
import axios from 'axios';
import cors from "cors";
import "../Styles_sheet/MainMenu.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsFillPlayCircleFill} from "react-icons/bs"
import {FiCheck} from "react-icons/fi"
import {FaArrowCircleRight} from "react-icons/fa"
import {FaArrowCircleLeft} from "react-icons/fa"
import SliderList from "./SliderContent"
import Login from './Login';
import { Link,Outlet } from "react-router-dom";

function MainMenu() {
  //slider state hook
  const[slideIndex,setSlideIndex] = useState(1);
    const nextSlide = ()=>{
      if(slideIndex !== SliderList.length){
        setSlideIndex(slideIndex+1);
      }else if(slideIndex===SliderList.length){
        setSlideIndex(1);
      }
    }
    const prevSlide = ()=>{
       if(slideIndex !==1){
         setSlideIndex(slideIndex-1);
       }else if(slideIndex===1){
         setSlideIndex(SliderList.length);
       }
    }
  
  // const[token,setToken] = useState('');
  // useEffect(()=>{

  //   axios("https://accounts.spotify.com/api/token",{
  //     "method" : "POST",
  //     "headers" : {
  //       "content-type": "application/x-www-form-urlencoded",
  //       "Authorization": "Basic " + ("ddb448ccbaf141f6871b1018c54075fd"+ ":" +"8f4f4af304dd404ea4540d52f2850f43"),
  //     },
  //     "data": "grant_type=client_credientials"
  //   }).then(tokenresponse=>{
  //     console.log(tokenresponse.data.access_token);
  //     setToken(tokenresponse.data.access_token);
  //   }).catch(error=>console.log(error))

  // },[])
  
  const[loginPopup,setLoginPopup] = useState(false);

  return (
    <div className="mn_menu">
      <div className="sliderContainer">
      <div className="topEffect">
         <div className="lg-sg">
           <a href="#" onClick={()=>setLoginPopup(true)}>Login</a>
           <Login 
             open={loginPopup}
             close={()=>setLoginPopup(false)}
           />
         </div>
      </div>
          {
            SliderList && SliderList.map((obj,index)=>(
              <div className={slideIndex===index+1 ? "slides fade" : "slide"} key={obj.id}>
              <img src={obj.img} alt="pic" className="slider-img"/>

              <div className="slideContent">
                 <div className="middle">
                    <i onClick={prevSlide}><FaArrowCircleLeft/></i>
                    <h1>{obj.text}</h1>
                    <i onClick={nextSlide}><FaArrowCircleRight/></i>
                 </div>
                 <div className="bottom">
                    <a href="#" id="btm1">
                      <i><BsFillPlayCircleFill/></i>
                      <span>Play</span>
                    </a>
                    <a href="#" id="btm2">
                      <i><FiCheck/></i>
                      <span>Follow</span>
                    </a>
                 </div>
              </div>
              </div>
              ))
            }
        <div className="btmEffect"></div>
      </div>
    </div>
  )
}

export default MainMenu;