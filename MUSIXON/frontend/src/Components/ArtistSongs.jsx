import React, { useState, useEffect } from "react";
import LikedList from "./LikedList";
import { GoVerified } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import {GoPlay} from "react-icons/go";
import "../Styles_sheet/Artists.css";

function ArtistSongs({
  singerName,
  song,
  singerImage,
  ret,
  songArray,
  likedSong,
}) {
  const [songs, setSongs] = useState(song);

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

  const changeFavourite = (idx) => {
    let song_obj;
    songs.forEach((sng) => {
      if (sng.idx == idx) {
        sng.fav = !sng.fav;
        song_obj = sng;
      }
    });
    setSongs([...songs]);
    return likedSong(song_obj);
  };

  const handleCurrSong = (obj) => {
    let arr = [];
    arr.push(obj);
    return songArray(arr);
  };

  const handleSongList = () =>{
    return songArray(songs);
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
            songs.map((obj, idx) => (
              <div className="songs" key={idx}>
                <div className="count">{idx + 1}</div>
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
                      {obj.fav ? (
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
