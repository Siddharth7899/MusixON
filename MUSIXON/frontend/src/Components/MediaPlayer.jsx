import React,{useState,useRef,useEffect} from 'react';
import CurrentPlayingSong from "./CurrentPlayingSong";
import {FaHeart} from "react-icons/fa";
import {FiHeart} from "react-icons/fi";
import {BiShuffle} from "react-icons/bi";
import {AiFillLeftCircle} from "react-icons/ai";
import {AiFillRightCircle} from "react-icons/ai";
import {FaPlayCircle} from "react-icons/fa";
import {FaPauseCircle} from "react-icons/fa";
import {BiRepeat} from "react-icons/bi";
import {GoMute} from "react-icons/go";
import {GiSpeaker} from "react-icons/gi";
import {MdRepeatOne} from "react-icons/md";
import "../Styles_sheet/MediaPlayer.css";

function MediaPlayer({currSong}){
  const[isLiked,setIsLiked] = useState(false);
  const[isPlay,setIsPlay] = useState(false);
  const[isMute,setIsMute] = useState(false);
  const[isRepeat,setIsRepeat] = useState(false);
  const[duration,setDuration] = useState(0);
  const[currentTime,setCurrentTime] = useState(0);
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  function handleLiked(){
    setIsLiked(!isLiked);
  }

  useEffect(()=>{
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  },
  [audioPlayer?.current?.loadedmetadata,
   audioPlayer?.current?.readyState
  ]);


  function handlePlayer(){
    const prevStateValue = isPlay;
    if(!prevStateValue){
        audioPlayer.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }else{
        audioPlayer.current.pause();
        cancelAnimationFrame(animationRef.current);
    }
    setIsPlay(!prevStateValue);
  }
 
  const calculateTime = (sec) =>{
    const minutes = Math.floor(sec/60);
    const fminutes = minutes<10 ? `0${minutes}`:minutes;
    const seconds = Math.floor(sec%60);
    const fseconds = seconds<10 ? `0${seconds}`:seconds;
    const ftime = `${fminutes}:${fseconds}`;
    return ftime;
  }
  
  const whilePlaying = () =>{
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }
  const changeProgress = () =>{
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  }
   
  const changeCurrentTime = () =>{
    progressBar.current.style.setProperty("--player-played",`${progressBar.current.value/duration*100}%`);
    setCurrentTime(progressBar.current.value);
  }

  const handleSound = () =>{
    setIsMute(!isMute);
  }

  const handleRepeat = () =>{
    setIsRepeat(!isRepeat);
  }

  return (
    <div className="music-container">
      <div className="left-music-part">
        <audio src={currSong.song_src} preload="metadata" ref={audioPlayer}></audio>
        <img src={currSong.img_src} alt="pic" />
        <div className="content-music-lf">
          <p id="msc-con1">{currSong.name}</p>
          <p id="msc-con2">{currSong.singer}</p>
        </div>
        {isLiked ? <i id="liked" onClick={handleLiked} ><FaHeart /></i> : <i id="not-liked" onClick={handleLiked}><FiHeart /></i>}
      </div>
      <div className="middle-music-part">
        <div className="top-middle-msc">
           <i><BiShuffle /></i>
           <i><AiFillLeftCircle /></i>
           {isPlay ? <i id="play-msc" onClick={handlePlayer}><FaPauseCircle /></i> : 
            <i id="play-msc" onClick={handlePlayer}><FaPlayCircle /></i> }
           <i><AiFillRightCircle /></i>
           {isRepeat ? <i id="repeat-now" onClick={handleRepeat}><MdRepeatOne/></i> : <i onClick={handleRepeat}><BiRepeat /></i>}
        </div>
        <div className="btm-middle-msc">
           <p className="duration">{calculateTime(currentTime)}</p>

           <input type="range" id="range" onChange={changeProgress} defaultValue="0" ref={progressBar}/>

           <p className="duration">{(duration && !isNaN(duration)) ? calculateTime(duration) : "00:00"}</p>
        </div>
      </div>
      <div className="right-music-part">
        {isMute ? <i onClick={handleSound}><GoMute /></i> : <i onClick={handleSound}><GiSpeaker /></i>}
        <input type="range" id="volume"/>
      </div>
    </div>
  );
}

export default MediaPlayer;