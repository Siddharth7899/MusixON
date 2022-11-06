import React,{useState,useEffect} from 'react';
import artists from "./ArtistsList";
import ArtistSongs from './ArtistSongs';
import "../Styles_sheet/Artists.css";
import {BsFillPlayCircleFill} from "react-icons/bs";

function Artists({songList,updateLiked}){

  const[shw,setShw] = useState(true);
  const[singerName,setSingerName] = useState(null);
  const[singerImage,setSingerImage] = useState(null);
  const[songs,setSongs] = useState(null);

  const handleClick = (singer_name,singer_img,song) => {
    setSingerName(singer_name);
    setSingerImage(singer_img);
    setSongs(song);
    if(singerName!==null && songs!==null && singerImage!==null){
      setShw(false);
    }
  }
  
  const handleSongArray = (arr) =>{
    return songList(arr);
  }

  const changeLiked = (song_obj) =>{
    return updateLiked(song_obj);
  }

  return (
    <>
    { shw ? <div className="artist-container">
      <div className="top-picture">
          <img src="https://media.istockphoto.com/photos/guitar-player-on-dark-picture-id643965600?b=1&k=20&m=643965600&s=170667a&w=0&h=VyCHYbffCMdOxiXfP1hCIXKStdwQFEf1jISSefILzC4=" alt="pic" />
          <div className="top-name">
            <h2>Top Artists</h2>
          </div>
          <div className="btm-effect"></div>
      </div>
      <div className="artist-section">
        <h2 id="top-artist-sec">Listen Our Top Artists</h2>
        <div className="artist-card">
          {
            artists && artists.map((obj,idx)=>(
              <div className="artist" key={idx} onClick={()=>handleClick(obj.singer_name,obj.img_Src,obj.songs)}>
                <img src={obj.img_Src} alt="pic" />
                <i><BsFillPlayCircleFill/></i>
                <h3 id="name">{obj.singer_name}</h3>
              </div>
            ))
          }
        </div>
      </div>
    </div> : <ArtistSongs singerName={singerName} song = {songs} singerImage={singerImage} ret = {()=>setShw(true)}  songArray = {handleSongArray} likedSong={changeLiked}/>}
    </>
  )
}

export default Artists;