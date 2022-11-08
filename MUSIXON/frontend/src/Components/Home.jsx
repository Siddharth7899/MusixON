import React , {useEffect , useState} from 'react';
import  {GiMusicSpell}  from "react-icons/gi";
import  {BsThreeDots}  from "react-icons/bs";
import "../Styles_sheet/leftSidebar.css";
import NavBarList from './NavBarList';
import MyPlaylist from './MyPlaylist';
import UserPlaylist from './UserPlaylist';
import { Link } from "react-router-dom"
import Artists from './Artists';
import MainMenu from './MainMenu';
import Profile from './Profile';
import {Cookies, useCookies} from 'react-cookie';
import axios from 'axios';

function Home() {
  const [cookies,removeCookies] = useCookies([]);
  useEffect(()=>{
    const verifyUser = async()=>{
      if(!cookies.jwt){
        // console.log("NO cookie set");
        // setUserExists(false);
        // redirect to main page..
      }
      else{
        const { data } = await axios.post(
          "http://localhost:5000",
          {},
          { withCredentials: true }
        );

        console.log(data.guest._id);

        if(!data.status){
          removeCookies("jwt");
          // console.log("error cookie");
          // redirect to signup page..
        }
        else{
          // console.log("you are in haome page");
          // console.log(data);
          // home..
        }
      }
    }
    verifyUser();
  },[cookies,removeCookies]);
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
    <MyPlaylist userList = {UserPlaylist}/>
    </div>
  );
}

export default Home;