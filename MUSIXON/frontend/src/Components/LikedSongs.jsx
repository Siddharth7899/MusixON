import React,{useState,useEffect} from 'react';
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { GoPlay } from 'react-icons/go';
import "../Styles_sheet/LikedSong.css";
import "../Styles_sheet/Artists.css";

function LikedSongs({likedSong}) {
  return (
    <div className="liked-song-container">
      <div className="top-lk-sec">
        <div className="img-lk-sec">
         <img src="https://i.scdn.co/image/ab67616d00001e0289f0f3145bcdd71276f3e78e" alt="pic" />
         </div>
         <div className="content-lk-sec">
           <h3>Liked Songs</h3>
           <p id="lk-playlist">PLAYLIST</p>
           <p id="lk-song-count">{likedSong.length} songs</p>
         </div>
         <div className="btmEffect"></div>
      </div>
      <div className="artist-container">
       <div className="musicList">
         <div className="title-lk">
           <p># Title</p>
           <p>Singer</p>
           <i><GoPlay /></i>
         </div>
         <div className="song-container inc-song-cont-hgt">
            {likedSong && likedSong.map((obj,idx)=>(
                <div className="songs" key={idx}>
                <div className="count">{idx+1}</div>
                <div className="song">
                    <div className="img">
                        <img src={obj.song_img_src} alt="pic" />
                    </div>
                     
                    <div className="content-section">
                        <p className="songName" >
                            {obj.song_name}
                            <span className="singerName">{obj.singer_name}</span>
                        </p>

                       <div className="loved">
                        {obj.fav ? <i id="fill-heart"><FaHeart /></i> : <i><FiHeart /></i>}
                       </div>
                    </div>
                </div>
            </div>
            ))}
         </div>
       </div>
    </div>
    </div>
  )
}

export default LikedSongs