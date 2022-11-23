import React from 'react';
import { useParams } from "react-router-dom";
import "../Styles_sheet/Artists.css";
import axios from 'axios';
import { GoVerified } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import {GoPlay} from "react-icons/go";
import {useGetArtistDetailsQuery} from "../redux/services/ShazamCore";
import Loader from "../assets/Loader";
import Error from "../assets/Error";

function ArtistDetails({songList}) {
  const {id : artistId} = useParams();
  const {data, isFetching , error} = useGetArtistDetailsQuery(artistId);
  if(isFetching) return <Loader title="Loading Artist Details"/>
  if(error) return <Error />
  // console.log(data);
  var artistData,artistDetail;
  if(data){
    artistData = Object.values(data?.songs);
    var arr = Object.values(data?.artists);
    artistDetail = arr[0];
  }
  // console.log(artistData);
  const handleSong = (i) =>{
    let arr = [];
    artistData.forEach((song)=>{
      let obj = {
        idx : song?.id,
        singer_name : song?.attributes?.artistName,
        song_name : song?.attributes?.name,
        song_src : song?.attributes?.previews[0]?.url,
        song_img_src : song?.attributes?.artwork?.url
      }
      arr.push(obj);
    })
    return songList(arr,i);
  }
  return (
    <div className="artist-container">
      <div className="top-section">
        <img src={artistDetail?.attributes?.artwork?.url} alt="pic" />
        <div className="content">
          <div className="top-content">
            <i>
              <GoVerified />
            </i>
            <p>Verified Artist</p>
          </div>
          <h2>{artistDetail?.attributes?.name}</h2>
        </div>
        <div className="btm-effect"></div>
      </div>
      <div className="musicList">
        <h2 className="title">
          Popular
          <i id="play-all-margin" onClick={()=>handleSong(0)}><GoPlay /></i>
        </h2>
        <div className="song-container">
          {artistData &&
            artistData.map((obj, index) => (
              <div className="songs" key={index}>
                <div className="count">{index + 1}</div>
                <div className="song">
                  <div className="img">
                    <img src={obj.attributes.artwork.url} alt="pic" />
                  </div>

                  <div className="content-section">
                    <p className="songName" onClick={()=>handleSong(index)}>
                      {obj.attributes.name}
                      <span className="singerName">{obj.attributes.artistName}</span>
                    </p>

                    <div
                      className="loved"
                    >
                        <i id="fill-heart">
                          <FaHeart />
                        </i>
                        <i>
                          <FiHeart />
                        </i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ArtistDetails