import React, { useState,useEffect } from 'react'
import RecentList from './RecentList';
import {BsFillPlayCircleFill} from "react-icons/bs"

function Recently({songArray}){
  // const[recentPlayed,setRecentPlayed] = useState(null);
  
  function handleSong(obj){
    let arr = [];
    arr.push(obj);
    return songArray(arr);
  }

  return (
    <>
    <h2 id="recent">Recently Played</h2>
    <div className="songs-card">
           {
            RecentList && RecentList.map((obj,idx)=>(
               <div className="songs" key={obj.id} onClick={()=>handleSong(obj)}>
               <img src={obj.song_img_src} alt="pic" />
               <i><BsFillPlayCircleFill/></i>
               <h3 id="name">{obj.song_name}</h3>
               <h3 id="singer">{obj.singer_name}</h3>
               </div>
            ))
           }
    </div>
    </>
  );
}

export default Recently;