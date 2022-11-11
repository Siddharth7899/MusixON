import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home";
import MainMenu from "./Components/MainMenu";
import Artists from "./Components/Artists";
import Albums from "./Components/Albums";
import MediaPlayer from "./Components/MediaPlayer";
import LikedSongs from "./Components/LikedSongs";
import LikedList from "./Components/LikedList";
import CreateAccount from "./Components/CreateAccount";
import Search from "./Components/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Cookies, useCookies} from 'react-cookie';
import axios from 'axios';

function App() {

  const [cookies,removeCookies] = useCookies([]);
  const [liked, setLiked] = useState([]);
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
          let name = data.guest.name;
          // funk();
          setUserName(name);
          // home..
          setUserExists(true);
          setUserId(data.guest._id);
          if(data.guest.recentlyPlayedSong.length!==0){
            let arr = [];
            arr.unshift(data.guest.recentlyPlayedSong[0]);
            setSongList(()=>arr);
            setRecentPlayedSongs(()=>data.guest.recentlyPlayedSong);
            console.log(songList);
          }
        }
      }
    }
    verifyUser();
  },[cookies,removeCookies,userName!=null]);

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
  
  return (
    <>
      <div className={userExists ? "App" : "App1"}>
        {userExists ? <Home userId = {userId}/> : null}
        {userExists ? (
          <Routes>
            <Route
              path="Artists"
              element={
                <Artists
                  songList={handleSongList}
                  userId = {userId}
                />
              }
            />
            <Route
              path="Albums"
              element={
                <Albums
                  songList={handleSongList}
                  userId = {userId}
                  likedSong = {liked}
                />
              }
            />
            <Route
              path="/"
              element={
                <MainMenu
                  userId={userId}
                  songList={handleSongList}
                  name = {userName}
                  recentSongsList = {recentPlayedSongs}
                  likedSong = {liked}
                  logout = {()=>setUserExists(false)}
                />
              }
            ></Route>
            <Route
              path="Home"
              element={
                <MainMenu
                  userId={userId}
                  songList={handleSongList}
                  name = {userName}
                  recentSongsList = {recentPlayedSongs}
                  likedSong = {liked}
                  logout = {()=>setUserExists(false)}
                />
              }
            ></Route>
            <Route 
              path="Liked Songs"
              element={
                <LikedSongs 
                  songList={handleSongList}
                  userId = {userId}
                />
              }
            />
            <Route 
              path="Search"
              element={<Search 
                songList={handleSongList}
                userId = {userId}
              />}
            />
          </Routes>
        ) : (
          <CreateAccount homePg={handleHomePage} />
        )}
      </div>
      {songList && userExists ? <MediaPlayer songs={songList} userId = {userId}  
      /> 
      : null}
      <div className="appBack"></div>
    </>
  );
}

export default App;
