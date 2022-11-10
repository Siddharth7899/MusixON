import React , {useEffect , useState} from 'react';
import  {GiMusicSpell}  from "react-icons/gi";
import  {BsThreeDots}  from "react-icons/bs";
import "../Styles_sheet/leftSidebar.css";
import NavBarList from './NavBarList';
import { Link } from "react-router-dom"
import Artists from './Artists';
import MainMenu from './MainMenu';
import {Cookies, useCookies} from 'react-cookie';
import axios from 'axios';

function Home({userId}) {
  const [cookies,removeCookies] = useCookies([]);

  // useEffect(()=>{
  //   const func = async()=>{
  //     if(!cookies.jwt){
  //       console.log("NO cookie set");
  //       // redirect to main page..
  //     }
  //     else{
  //       console.log("func function called here....huihuihi");
  //       const { data } = await axios.post(
  //         "http://localhost:5000/giveRecentSongs",
  //         {id:userId},
  //         { withCredentials: true }
  //       );
  //       console.log(data);
  //       console.log("till here we are in home");
  //     }
  //   }
  //   func();
  // },[cookies,removeCookies]);

  // useEffect(()=>{
  //   const func = async()=>{
  //     console.log("func function called here....huihuihi");
  //     if(!cookies.jwt){
  //       // console.log("NO cookie set");
  //       // setUserExists(false);
  //       // redirect to main page..
  //     }
  //     else{
  //       console.log("yes im in home page");
  //       const {data} = await axios.post(
  //         "http://localhost:5000/giveRecentSongs",
  //         {id:userId},
  //         { withCredentials: true }
  //       );
  //       console.log(data);
  //       console.log('______ID',data.guest._id);
  //       console.log("till here we are in home");

  //       // if(!data.status){
  //       //   removeCookies("jwt");
  //       //   // console.log("error cookie");
  //       //   // redirect to signup page..
  //       // }
  //       // else{
  //       //   // console.log("you are in haome page");
  //       //   // console.log(data);
  //       //   // home..
  //       // }
  //     }
  //   }
  //   func();
  // },[cookies]);


  //Adding active class on the navbars
  useEffect(()=>{
    const allAnchor = document.querySelector(".lf_menu .sectionContainer").querySelectorAll("a");
       
    function changeActive(){
      allAnchor.forEach((i)=>i.classList.remove("active"));
      this.classList.add("active");
    }
    
    allAnchor.forEach((i)=>i.addEventListener("click",changeActive));
  },[]);

  return(
    <div className="lf_menu">
      
      {/* Logo section */}

      <div className="logoContainer">
         <i className="first-logo"><GiMusicSpell /></i>
         <h2>MusixON</h2>
         <i className="second-logo"><BsThreeDots /></i>
      </div>
      
      {/* This section conatins various navigation bar links */}
      <div className="sectionContainer">
      {
        NavBarList && NavBarList.map((obj)=>(
          <div className="chSecContaier" key={obj.id}>
          <Link to={`/${obj.name}`}>
          <i className='sec-logo'> {obj.icon} </i>
          <span className="sec-head"> {obj.name} </span>
          </Link>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Home;