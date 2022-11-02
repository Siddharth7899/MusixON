import React , {useState,useEffect} from 'react';
import './App.css';
import Home from "./Components/Home";
import MainMenu from "./Components/MainMenu";
import Artists from './Components/Artists';
import Albums from './Components/Albums';
import Login from './Components/Login';
import MediaPlayer from './Components/MediaPlayer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const[currSong,setCurrSong] = useState();
  function handlePlay(song_src,img_src,song_name,singer_name){
    // setCurrSong(()=>obj);
    const obj = {
      song_src:song_src,
      img_src:img_src,
      name:song_name,
      singer:singer_name
    }
    setCurrSong(()=>obj);
  }

  return (
    <>
    <div className="App">
    <Home/>
    <Routes>
      <Route path="Artists" element={<Artists letsPlay={handlePlay}/>}/>
      <Route path="Albums" element={<Albums letsPlay={handlePlay}/>}/>
      <Route path="/" element={<MainMenu letsPlay={handlePlay}/>}></Route>
      <Route path="/Home" element={<MainMenu letsPlay={handlePlay}/>}></Route>
    </Routes> 
    </div>
    {currSong? <MediaPlayer currSong={currSong}/> : null}
    <div className="appBack"></div>
    </>
  );
}

export default App;