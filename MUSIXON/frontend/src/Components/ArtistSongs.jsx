import React,{useState,useEffect} from 'react';
import {GoVerified} from "react-icons/go";
import {FaHeart} from "react-icons/fa";
import {FiHeart} from "react-icons/fi";
import "../Styles_sheet/Artists.css";

function ArtistSongs({singerName,song,singerImage,ret,currSong}) {
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
    songs.forEach((sng)=>{
        if(sng.id===id){
            sng.fav = !sng.fav;
        }
    })
    setSongs([...songs]);
  }
  
  const handleCurrSong = (song_src,img_src,song_name,singer_name) =>{
    return currSong(song_src,img_src,song_name,singer_name);
  }

  return (
    <div className="artist-container">
       <div className="top-section">
       <img src={singerImage} alt="pic" />
          <div className="content">
            <div className="top-content">
                <i><GoVerified/></i>
                <p>Verified Artist</p>
            </div>
            <h2>{singerName}</h2>
          </div>
          <div className="btm-effect"></div>
       </div>
       <div className="musicList">
         <h2 className="title">
             Popular <span id="bc-art-sec" onClick={()=>ret()}>Artists</span> </h2>
         <div className="song-container">
            {song && song.map((obj,idx)=>(
                <div className="songs" key={idx}>
                <div className="count">{idx+1}</div>
                <div className="song">
                    <div className="img">
                        <img src={obj.song_img_src} alt="pic" />
                    </div>
                     
                    <div className="content-section">
                        <p className="songName" onClick={()=>handleCurrSong(obj.song_src,obj.song_img_src,obj.song_name,singerName)}>
                            {obj.song_name}
                            <span className="singerName">{singerName}</span>
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

export default ArtistSongs;