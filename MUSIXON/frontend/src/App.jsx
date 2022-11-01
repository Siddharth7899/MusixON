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
  const[main,setMain] = useState(true);
  function handleMain(ele){
    if(ele==="Home") setMain(true);
    else setMain(false);
  }
  
  const[currSong,setCurrSong] = useState();
  function handlePlay(obj){
    setCurrSong(()=>obj);
  }

  return (
    <>
    <div className="App">
    <Home value={handleMain}/>
    <Routes>
      <Route path="Artists" element={<Artists/>}/>
      <Route path="Albums" element={<Albums/>}/>
    </Routes> 
    {main ? <MainMenu letsPlay={handlePlay}/> : null}
    </div>
    {currSong? <MediaPlayer currSong={currSong}/> : null}
    <div className="appBack"></div>
    </>
  );
}

export default App;