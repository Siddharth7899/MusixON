import React, { useState,useEffect } from 'react'
import {BsFillPlayCircleFill} from "react-icons/bs"

function Recently({songArray,recentList}){
  // const[recentPlayed,setRecentPlayed] = useState(null);
  
  function handleSong(obj){
    let arr = [];
    arr.push(obj);
    return songArray(arr);
  }

  return (
    <>
    <h2 id="recent">Recently Played</h2>
    <div className="songs-row">
    <div className="songs-card recent-song-card">
           {
            recentList && recentList.map((obj,idx)=>(
               <div className="songs" key={idx} onClick={()=>handleSong(obj)}>
               <img src={obj.song_img_src} alt="pic" />
               <i><BsFillPlayCircleFill/></i>
               <h3 id="name">{obj.song_name}</h3>
               <h3 id="singer">{obj.singer_name}</h3>
               </div>
            ))
           }
    </div>
    </div>
    </>
  );
}

export default Recently;