import React, { useState,useEffect } from 'react'
import { BsFillPlayBtnFill } from 'react-icons/bs';
import RecentList from './RecentList';
import CurrentPlayingSong from "./CurrentPlayingSong";
import {BsFillPlayCircleFill} from "react-icons/bs"

function Recently({currSong}){
  const[recentPlayed,setRecentPlayed] = useState();
  
  function handleSong(song,img,name,singer){
    const obj = {
      song_src : song,
      img_src : img,
      name : name,
      singer : singer
    }
    setRecentPlayed(obj);
    // console.log(recentPlayed);
    return currSong(obj);
  }


  return (
    <>
    <h2 id="recent">Recently Played</h2>
    <div className="songs-card">
           {
            RecentList && RecentList.map((obj,idx)=>(
               <div className="songs" key={obj.id} onClick={()=>handleSong(obj.song_src,obj.img_src,obj.name,obj.singer)}>
               <img src={obj.img_src} alt="pic" />
               <i><BsFillPlayCircleFill/></i>
               <h3 id="name">{obj.name}</h3>
               <h3 id="singer">{obj.singer}</h3>
               </div>
            ))
           }
    </div>
    </>
  );
}

export default Recently;