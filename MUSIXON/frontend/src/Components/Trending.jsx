import React, { useState,useEffect } from 'react'
import TrendingList from './TrendingList';
import {BsFillPlayCircleFill} from "react-icons/bs"

function Trending({songArray}){

  function handleSong(obj){
    let arr = [];
    arr.push(obj);
    return songArray(arr);
  }

  return (
    <>
    <h2 id="recent">Trending This Week!!</h2>
    <div className="songs-card">
           {
            TrendingList && TrendingList.map((obj,idx)=>(
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

export default Trending;