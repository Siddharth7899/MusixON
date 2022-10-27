import React , {useEffect , useState} from 'react';
import  {GiMusicSpell}  from "react-icons/gi";
import  {BsThreeDots}  from "react-icons/bs";
import "../Styles_sheet/leftSidebar.css";
import NavBarList from './NavBarList';
import MyPlaylist from './MyPlaylist';
import UserPlaylist from './UserPlaylist';

function LeftSidebar() {
  
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
          <a  href="#">
          <i className='sec-logo'> {obj.icon} </i>
          <span className="sec-head"> {obj.name} </span>
          </a>
          </div>
        ))
      }
      </div>
    <MyPlaylist userList = {UserPlaylist}/>
    </div>
  );
}

export default LeftSidebar;