import React , {useState,useEffect} from 'react';
import axios from 'axios';
import cors from "cors";
import "../Styles_sheet/MainMenu.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsFillPlayCircleFill} from "react-icons/bs";
import {MdArrowDropDown} from "react-icons/md";
import {FiCheck} from "react-icons/fi"
import {FaArrowCircleRight} from "react-icons/fa"
import {FaArrowCircleLeft} from "react-icons/fa"
import SliderList from "./SliderContent"
import { Link,Outlet } from "react-router-dom";
import Recently from './Recently';
import Trending from './Trending';
import SliderSong from './SliderSong';
import SliderSongList from "./SliderSongList";
import { Cookies, useCookies } from "react-cookie";

function MainMenu({userId,songList,name,recentSongsList,logout}) {
  const[shw,setShw] = useState(true);
  const[songs,setSongs] = useState(null);
  const [cookies,setCookies,removeCookies] = useCookies([]);
  const [isLogout,setLogout] = useState(false);
  
  // useEffect(() => {
  //   const func = async () => {
  //     if (!cookies.jwt) {
  //       console.log("user not present");
  //     } else {
  //       const { data } = await axios.post(
  //         "http://localhost:5000/giveLikedSong",
  //         { id: userId },
  //         { withCredentials: true }
  //       );
  //       console.log(data.likedSongList);
  //     }
  //   };
  //   func();
  // }, [cookies]);

  //slider state hook
  const[slideIndex,setSlideIndex] = useState(1);
    const nextSlide = ()=>{
      if(slideIndex !== SliderList.length){
        setSlideIndex(slideIndex+1);
      }else if(slideIndex===SliderList.length){
        setSlideIndex(1);
      }
      // console.log(slideIndex+" next");
    }
    const prevSlide = ()=>{
       if(slideIndex !==1){
         setSlideIndex(slideIndex-1);
       }else if(slideIndex===1){
         setSlideIndex(SliderList.length);
       }
      //  console.log(slideIndex+" prev");
    }
  
  
  const[loginPopup,setLoginPopup] = useState(false);

  const handleSongArray = (arr) =>{
    return songList(arr);
  }

  const handleClick = (id) => {
    SliderSongList.forEach((song)=>{
      if(song.id===id){
        setSongs(song.songs);
      }
    }) 
    if(songs!==null) setShw(false);
  }

  const handleLogout = async()=>{
    setLoginPopup(true);
    removeCookies("jwt");
    // got to main login/signup page
    return logout();
  }

  return (
    <div className="mn_menu">
      <div className="sliderContainer">
      {shw ? 
         <div className="topEffect">
         <div className="lg-sg">
           <a href="#" onClick={()=>setLogout(prevValue => !prevValue)}>{name?name:"MusixON"}</a>
           { isLogout ? <a href="#" id="logout-btn" onClick={handleLogout}>Logout</a> : null}
         </div>
      </div> : null}
          {
            SliderList && SliderList.map((obj,index)=>(
              <div className={slideIndex===index+1 ? "slides fade" : "slide"} key={obj.id}>
              <img src={obj.img} alt="pic" className={ shw ? "slider-img" : "rmvFltr"} />

              { shw ? <div className="slideContent">
                 <div className="middle">
                    <i onClick={prevSlide}><FaArrowCircleLeft/></i>
                    <h1>{obj.text}</h1>
                    <i onClick={nextSlide}><FaArrowCircleRight/></i>
                 </div>
                 <div className="bottom">
                    <a href="#" id="btm1" onClick={()=>handleClick(obj.id)}>
                      <i><BsFillPlayCircleFill/></i>
                      <span>Play</span>
                    </a>
                    <a href="#" id="btm2">
                      <i><FiCheck/></i>
                      <span>Follow</span>
                    </a>
                 </div>
              </div> : null }
              </div>
              ))
            }
        <div className="btmEffect"></div>
      </div>
      { shw ?
        <div className="songs-container">
        <Trending songArray={handleSongArray}/>
         <Recently songArray={handleSongArray} recentList={recentSongsList}/>
        </div> :
        <SliderSong song={songs} ret={()=>setShw(true)} songArray={handleSongArray}/>
      }   
    </div>
  )
}

export default MainMenu;