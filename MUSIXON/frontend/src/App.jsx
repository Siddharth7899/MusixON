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

function App() {
  const [currSong, setCurrSong] = useState();
  const [liked, setLiked] = useState(LikedList);
  const [songList, setSongList] = useState(null);
  const [userExists, setUserExists] = useState(false);

  //handling songs for mediaPlayer

  const handleSongList = (arr) => {
    let array = arr;
    setSongList(() => array);
  };

  //handling home page

  const handleHomePage = (e) => {
    if (e === "home") setUserExists(true);
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
                />
              }
            ></Route>
            <Route
              path="/Home"
              element={
                <MainMenu
                  updateLiked={updateLikedSong}
                  songList={handleSongList}
                />
              }
            ></Route>
          </Routes>
        ) : (
          <CreateAccount homePg={handleHomePage} />
        )}
      </div>
      {songList && userExists ? <MediaPlayer songs={songList} /> : null}
      <div className="appBack"></div>
    </>
  );
}

export default App;
