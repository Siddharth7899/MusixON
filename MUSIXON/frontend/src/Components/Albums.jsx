import React,{useState,useEffect} from 'react'
import albums from "./AlbumsList";
import AlbumSongs from './AlbumSongs';
import "../Styles_sheet/Artists.css";
import {BsFillPlayCircleFill} from "react-icons/bs";

function Albums({songList,updateLiked}) {
  const[shw,setShw] = useState(true);
  const[topImg,setTopImg] = useState(null);
  const[songs,setSongs] = useState(null);

  const handleClick = (song,img) => {
    setSongs(song);
    setTopImg(img);
    if(songs!==null && topImg!==null){
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
          <img src="https://storage.googleapis.com/stateless-thedailyfandom-org/2021/03/75a5210d-rawimage.jpg" alt="pic" />
          <div className="top-name">
            <h2 id="tp-albm">Top Albums</h2>
          </div>
          <div className="btm-effect"></div>
      </div>
      <div className="artist-section">
        <h2 id="top-artist-sec">Explore Some Top Hits Now!!</h2>
        <div className="artist-card">
          {
            albums && albums.map((obj,idx)=>(
              <div className="artist" key={idx} onClick={()=>handleClick(obj.songs,obj.img_src)}>
                <img src={obj.img_src} alt="pic" />
                <i><BsFillPlayCircleFill/></i>
                <h3 id="name">{obj.album_name}</h3>
              </div>
            ))
          }
        </div>
      </div>
    </div> : <AlbumSongs song={songs} topImg={topImg} ret={()=>setShw(true)} songArray = {handleSongArray} likedSong={changeLiked}/>}
    </>
  )
}

export default Albums;