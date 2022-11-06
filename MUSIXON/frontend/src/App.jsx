import React , {useState,useEffect} from 'react';
import './App.css';
import Home from "./Components/Home";
import MainMenu from "./Components/MainMenu";
import Artists from './Components/Artists';
import Albums from './Components/Albums';
import Login from './Components/Login';
import MediaPlayer from './Components/MediaPlayer';
import LikedSongs from './Components/LikedSongs';
import LikedList from "./Components/LikedList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const[currSong,setCurrSong] = useState();
  const[liked,setLiked] = useState(LikedList);
  const[songList,setSongList] = useState(null);

  //handling songs for mediaPlayer

  const handleSongList = (arr) =>{
    let array = arr;
    setSongList(()=>array);
  }

  //Updating Liked Songs List
  
  const updateLikedSong = (song) =>{
    if(song.fav){
      let arr = liked;
      arr.unshift(song);
      setLiked([...arr]);
    }else{
      let index=0;
      let arr = liked;
      arr.forEach((ele)=>{
        if(ele.id===song.id){
          arr.splice(index,1);
          setLiked([...arr]);
        }
        index+=1;
      })
    }
  }


  return (
    <>
    <div className="App">
    <Home/>
    <Routes>
      <Route path="Artists" element={<Artists songList={handleSongList} updateLiked={updateLikedSong}/>}/>
      <Route path="Albums" element={<Albums songList={handleSongList} updateLiked={updateLikedSong}/>}/>
      <Route path="/" element={<MainMenu updateLiked={updateLikedSong} songList={handleSongList}/>}></Route>
      <Route path="/Home" element={<MainMenu updateLiked={updateLikedSong} songList={handleSongList}/>}></Route>
    </Routes> 
    </div>
    {songList ? <MediaPlayer songs={songList}/> : null}
    <div className="appBack"></div>
    </>
  );
}

export default App;