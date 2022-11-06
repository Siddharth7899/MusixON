import React,{useState,useEffect} from 'react';
import {GoVerified} from "react-icons/go";
import {FaHeart} from "react-icons/fa";
import {FiHeart} from "react-icons/fi";
import "../Styles_sheet/Artists.css";

function AlbumSongs({song,topImg,ret,songArray,likedSong}) {
  const[songs,setSongs] = useState(song);

  useEffect(()=>{
    const allPara = document.querySelector(".artist-container .song-container").querySelectorAll(".songName");
       
    function changeActive(){
      allPara.forEach((i)=>i.classList.remove("active"));
      this.classList.add("active");
    }
    
    allPara.forEach((i)=>i.addEventListener("click",changeActive));
  },[]);

  const changeFavourite = (id) =>{
    let song_obj;
    songs.forEach((sng)=>{
        if(sng.id===id){
          sng.fav = !sng.fav;
          song_obj = sng;
        }
    })
    setSongs([...songs]);
    return likedSong(song_obj);
  }

  const handleCurrSong = (obj) =>{
    let arr = [];
    arr.push(obj);
    return songArray(arr);
  }

  return (
    <div className="artist-container">
       <div className="top-section">
       <img src={topImg} alt="pic" />
        <div className="btm-effect"></div>
       </div>
       <div className="musicList">
         <h2 className="title">
             Popular <span id="bc-art-sec" onClick={()=>ret()}>Albums</span> </h2>
         <div className="song-container">
            {song && song.map((obj,idx)=>(
                <div className="songs" key={idx}>
                <div className="count">{idx+1}</div>
                <div className="song">
                    <div className="img">
                        <img src={obj.song_img_src} alt="pic" />
                    </div>
                     
                    <div className="content-section">
                        <p className="songName" onClick={()=>handleCurrSong(obj)}>
                            {obj.song_name}
                            <span className="singerName">{obj.singer_name}</span>
                        </p>

                       <div className="loved" onClick={()=>changeFavourite(obj.id)}>
                        {obj.fav ? <i id="fill-heart"><FaHeart /></i> : <i><FiHeart /></i>}
                       </div>
                    </div>
                </div>
            </div>
            ))}
         </div>
       </div>
    </div>
  );
}

export default AlbumSongs;