import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home";
import MainMenu from "./Components/MainMenu";
import Artists from "./Components/Artists";
import Albums from "./Components/Albums";
import Profile from "./Components/Profile";
import MediaPlayer from "./Components/MediaPlayer";
import LikedSongs from "./Components/LikedSongs";
import LikedList from "./Components/LikedList";
import CreateAccount from "./Components/CreateAccount";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Cookies, useCookies} from 'react-cookie';
import axios from 'axios';

function App() {

  const [cookies,removeCookies] = useCookies([]);
  const [liked, setLiked] = useState(LikedList);
  const [songList, setSongList] = useState(null);
  const [userExists, setUserExists] = useState(false);
  const [userName,setUserName] = useState(null);
  const [userId,setUserId ] = useState(null);
  const [recentPlayedSongs,setRecentPlayedSongs] = useState(null);

  useEffect(()=>{
    const verifyUser = async()=>{
      if(!cookies.jwt){
        console.log("NO cookie set");
        setUserExists(false);
        // redirect to main page..
      }
      else{
        const { data } = await axios.post(
          "http://localhost:5000",
          {},
          { withCredentials: true }
        );

        console.log(data.guest._id);

        if(!data.status){
          removeCookies("jwt");
          console.log("error cookie");
          // redirect to signup page..
        }
        else{
          console.log("you are in haome page");
          console.log(data);
          // home..
          setUserExists(true);
          setUserId(data.guest._id);
          if(data.guest.recentlyPlayedSong.length!==0){
            let arr = [];
            arr.unshift(data.guest.recentlyPlayedSong[0]);
            setSongList(()=>arr);
            setRecentPlayedSongs(()=>data.guest.recentlyPlayedSong);
          }
        }
      }
    }
    verifyUser();
  },[cookies,removeCookies]);

  //handling songs for mediaPlayer

  const handleSongList = (arr) => {
    let array = arr;
    setSongList(() => array);
  };

  //handling home page

  const handleHomePage = (obj) => {
    setUserName(obj.name);
    setUserExists(true);
  };
  
  //Updating Liked Songs List

  const updateLikedSong = (song) => {
    if (song.fav) {
      let arr = liked;
      arr.unshift(song);
      setLiked([...arr]);
    } else {
      let index = 0;
      let arr = liked;
      arr.forEach((ele) => {
        if (ele.id === song.id) {
          arr.splice(index, 1);
          setLiked([...arr]);
        }
        index += 1;
      });
    }
    console.log(liked);
  };

  return (
    <>
      <div className={userExists ? "App" : "App1"}>
        {userExists ? <Home /> : null}
        {userExists ? (
          <Routes>
            <Route
              path="Artists"
              element={
                <Artists
                  songList={handleSongList}
                  updateLiked={updateLikedSong}
                />
              }
            />
            <Route
              path="Albums"
              element={
                <Albums
                  songList={handleSongList}
                  updateLiked={updateLikedSong}
                />
              }
            />
            <Route
              path="/"
              element={
                <MainMenu
                  updateLiked={updateLikedSong}
                  songList={handleSongList}
                  name = {userName}
                  recentSongsList = {recentPlayedSongs}
                />
              }
            ></Route>
            <Route
              path="Home"
              element={
                <MainMenu
                  updateLiked={updateLikedSong}
                  songList={handleSongList}
                  name = {userName}
                  recentSongsList = {recentPlayedSongs}
                />
              }
            ></Route>
            <Route 
              path="Liked Songs"
              element={
                <LikedSongs 
                  likedSong = {liked}
                />
              }
            />
          </Routes>
        ) : (
          <CreateAccount homePg={handleHomePage} />
        )}
      </div>
      {songList && userExists ? <MediaPlayer songs={songList} userId = {userId}/> : null}
      <div className="appBack"></div>
    </>
  );
}

export default App;
