import React, { useState, useEffect } from "react";
import LikedList from "./LikedList";
import { GoVerified } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import {GoPlay} from "react-icons/go";
import "../Styles_sheet/Artists.css";
import axios from 'axios';

function ArtistSongs({
  singerName,
  song,
  singerImage,
  ret,
  songArray,
  userId,
  isLiked
}) {
  const [songs, setSongs] = useState(song);
  const [rmvIdx,setrmvIdx] = useState([]);//to maintain the syncronization between backend and frontend status
  
  useEffect(() => {
    const allPara = document
      .querySelector(".artist-container .song-container")
      .querySelectorAll(".songName");

    function changeActive() {
      allPara.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    }

    allPara.forEach((i) => i.addEventListener("click", changeActive));
  }, []);

  const addToLike = async(id,indx,song_name,song_src,song_img_src,singer_name,fav)=>{
    const{data} = await axios.post("http://localhost:5000/addToLikedSong",{
      id,indx,song_name,song_src,song_img_src,singer_name,fav
    },{
      withCredentials:true,
    });
    console.log(data);
  }

  const removeLike = async(id,song_name)=>{
    const{data} = await axios.post("http://localhost:5000/removeFromLiked",{
      id,song_name
    },{
      withCredentials:true,
    });
    console.log(data);
  }

  const changeFavourite = (idx) => {
    let isPresentInDB = false;

    isLiked.forEach((ele)=>{
      if(ele.indx===idx){
        if(ele.fav) isPresentInDB = true;
      }
    })
    
    rmvIdx.forEach((ele)=>{
      if(ele===idx) isPresentInDB = false;
    })
    songs.forEach((sng) => {
      if (sng.idx === idx) {
        console.log("found it   --> ");
        if(sng.fav || isPresentInDB){
          // remove from favourit list...
          sng.fav=false;
          let arr = rmvIdx;
          arr.push(idx);
          setrmvIdx(()=>arr);
          removeLike(userId,sng.song_name);
        }
        else{
          // add to favourit list..
          let ind=0;
          rmvIdx.forEach((ele)=>{
            if(ele===idx){
              let a = rmvIdx;
              a.splice(ind,1);
              setrmvIdx(()=>a);
            }
            ind+=1;
          })
          sng.fav=true;
          addToLike(userId,sng.idx,sng.song_name,sng.song_src,sng.song_img_src,sng.singer_name,true);
        }
      }
    });
    setSongs([...songs]);
  };

  const handleCurrSong = (obj) => {
    let arr = [];
    arr.push(obj);
    return songArray(arr);
  };

  const handleSongList = () =>{
    return songArray(songs);
  }
  
  const checkIsLiked = (idx) =>{
    let value = false;
    isLiked.forEach((ele)=>{
      if(ele.indx===idx){
        if(ele.fav) value = true;
      }
    })
    rmvIdx.forEach((ele)=>{
      if(ele===idx){
        console.log(idx);
        value=false;
      }
    })
    return value;
  }

  return (
    <div className="artist-container">
      <div className="top-section">
        <img src={singerImage} alt="pic" />
        <div className="content">
          <div className="top-content">
            <i>
              <GoVerified />
            </i>
            <p>Verified Artist</p>
          </div>
          <h2>{singerName}</h2>
        </div>
        <div className="btm-effect"></div>
      </div>
      <div className="musicList">
        <h2 className="title">
          Popular
          <span id="bc-art-sec" onClick={() => ret()}>
            Artists
          </span>
          <i id="play-all-margin" onClick={handleSongList}><GoPlay /></i>
        </h2>
        <div className="song-container">
          {songs &&
            songs.map((obj, index) => (
              <div className="songs" key={index}>
                <div className="count">{index + 1}</div>
                <div className="song">
                  <div className="img">
                    <img src={obj.song_img_src} alt="pic" />
                  </div>

                  <div className="content-section">
                    <p className="songName" onClick={() => handleCurrSong(obj)}>
                      {obj.song_name}
                      <span className="singerName">{singerName}</span>
                    </p>

                    <div
                      className="loved"
                      onClick={() => changeFavourite(obj.idx)}
                    >
                      { (obj.fav || checkIsLiked(obj.idx)===true) ? (
                        <i id="fill-heart">
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FiHeart />
                        </i>
                      )}
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
