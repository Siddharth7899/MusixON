import React, { useState, useEffect } from "react";
import "../Styles_sheet/Search.css";
import { BsSearch } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { Cookies, useCookies } from "react-cookie";
import axios from "axios";

function Search({ songList ,userId}) {
  const [allSongs, setAllSongs] = useState(null);
  const [searched, setSearched] = useState("");
  const [cookies, removeCookies] = useCookies([]);
  let arr = [];
  const [rmvIdx,setrmvIdx] = useState([]);
  const [isLiked,setIsLiked] = useState();
  
  useEffect(()=>{
    const allPara = document
    .querySelector(".search-container .search-display-section")
    .querySelectorAll(".songName");

    function changeActive() {
      allPara.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    }
    allPara.forEach((i) => i.addEventListener("click", changeActive));
  },[])

  useEffect(() => {
    setAllSongs(arr);
  },[]);

  const handleCurrSong = (obj) => {
    let arr = [];
    arr.push(obj);
    return songList(arr);
  };

  useEffect(() => {
    const func = async () => {
      if (!cookies.jwt) {
        console.log("user not present");
      } else {
        const { data } = await axios.post(
          "http://localhost:5000/giveLikedSong",
          { id: userId },
          { withCredentials: true }
        );
        let a = data.likedSongList;
        setIsLiked(()=>a);
      }
    };
    func();
  }, [cookies]);

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

  const changeFavourite = async(idx) => {
    let isPresentInDB = false;

    isLiked.forEach((ele)=>{
      if(ele.indx===idx){
        if(ele.fav) isPresentInDB = true;
      }
    })
    
    rmvIdx.forEach((ele)=>{
      if(ele===idx) isPresentInDB = false;
    })

    allSongs.forEach((sng) => {
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
    setAllSongs([...allSongs]);
  };

  const checkIsLiked = (idx) =>{
    let value = false;
    isLiked?.forEach((ele)=>{
      if(ele.indx===idx){
        if(ele.fav) value = true;
      }
    })
    rmvIdx?.forEach((ele)=>{
      if(ele===idx){
        console.log(idx);
        value=false;
      }
    })
    return value;
  }

  //Regex filter method for search

  const includeMethod = (nam,str) =>{
    var val=0;
    nam = nam?.substring(0,5).toLowerCase();
    str = str?.substring(0,5).toLowerCase();
    if(nam.includes(str)) val=1;
    return val;
  }

  const regexMethod = (nam,str) =>{
    var val=0;
    nam = nam.substring(0,5).toLowerCase();
    str = str.substring(0,5).toLowerCase();
    //regex patter from the user input
    var pattern = str?.split("").map((it)=>{
      return `(?=.*${it})`; 
    }).join("");

    var regex = new RegExp(`${pattern}`,"g");
    if(nam.match(regex)) val=1;
    return val;
  }

  return (
    <div className="search-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Search Songs Here..."
          onChange={(event) => {
            setSearched(event.target.value);
          }}
        />
      </div>
      <div className="search-display-section">
        {searched ? (
          <div className="title-sec">
            <h3>Best Matches</h3>
          </div>
        ) : null}
        {allSongs &&
          allSongs
            .filter((value) => {
              if (searched === "") return null;
              else if(includeMethod(value?.song_name,searched) || regexMethod(value?.song_name,searched)){
                return value;
              }
            })
            .map((value, index) => {
              return (
                <div className="song-container">
                  <div className="songs">
                    <div className="count">{index + 1}</div>
                    <div className="song">
                      <div className="img">
                        <img src={value?.song_img_src} alt="pic" />
                      </div>

                      <div className="content-section">
                        <p
                          className="songName"
                          onClick={() => handleCurrSong(value)}
                        >
                          {value?.song_name}
                          <span className="singerName">
                            {value?.singer_name}
                          </span>
                        </p>

                        <div className="loved" onClick={() => changeFavourite(value?.idx)}>
                          { (value?.fav || checkIsLiked(value?.idx)===true) ? (
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
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Search;