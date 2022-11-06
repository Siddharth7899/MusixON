import React,{useState,useRef,useEffect} from 'react';
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

function MediaPlayer({songs}){
  const[index,setIndex] = useState(0);
  const[currSong,setCurrSong] = useState(songs[0]);
  const[isLiked,setIsLiked] = useState(false);
  const[isPlay,setIsPlay] = useState(false);
  const[isMute,setIsMute] = useState(false);
  const[isRepeat,setIsRepeat] = useState(false);
  const[duration,setDuration] = useState(0);
  const[currentTime,setCurrentTime] = useState(0);
  const[volume,setVolume] = useState(30);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();
  
  // Songs updated every time when new array of songs came
  useEffect(()=>{
   setCurrSong(songs[0]);
   setIndex(0);
  },[songs]);

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

  //volume control functionalities
  useEffect(()=>{
    if(audioPlayer){
      audioPlayer.current.volume = volume/100;
    }
    if(volume>0){
      setIsMute(false);
    }
  },[volume])
  
  const handleSound = () =>{
    setIsMute(!isMute);
    if(!isMute) setVolume(0);
    if(isMute){
      setVolume(1);
    }
  }

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

  //repeat current song 
  const handleRepeat = () =>{
    setIsRepeat(!isRepeat);
  }

  //next and previous buttons
  const handleNextSong = () =>{
    if(index>=songs.length-1){
      setIndex(0);
      setCurrSong(songs[0]);
    }else{
      setIndex(prevCount => prevCount+1);
      setCurrSong(songs[index+1]);
    }
  }

  const handlePreviousSong = () =>{
    if(index>0){
      setIndex(prevCount => prevCount-1);
      setCurrSong(songs[index-1]);
    }else{
      setIndex(songs.length-1);
      setCurrSong(songs[songs.length-1]);
    }
  } 

  return (
    <div className="music-container">
      <div className="left-music-part">
        <audio loop={isRepeat} src={currSong.song_src} preload="metadata" ref={audioPlayer}></audio>
           
        <img src={currSong.song_img_src} alt="pic" />
        <div className="content-music-lf">
          <p id="msc-con1">{currSong.song_name}</p>
          <p id="msc-con2">{currSong.singer_name}</p>
        </div>
        {isLiked ? <i id="liked" onClick={handleLiked} ><FaHeart /></i> : <i id="not-liked" onClick={handleLiked}><FiHeart /></i>}
      </div>
      <div className="middle-music-part">
        <div className="top-middle-msc">
           <i><BiShuffle /></i>
           <i onClick={handlePreviousSong}><AiFillLeftCircle /></i>
           {isPlay ? <i id="play-msc" onClick={handlePlayer}><FaPauseCircle /></i> : 
            <i id="play-msc" onClick={handlePlayer}><FaPlayCircle /></i> }
           <i onClick={handleNextSong}><AiFillRightCircle /></i>
           {isRepeat ? <i id="repeat-now" onClick={handleRepeat}><MdRepeatOne/></i> : <i onClick={handleRepeat}><BiRepeat /></i>}
        </div>
        <div className="btm-middle-msc">
           <p className="duration">{calculateTime(currentTime)}</p>

           <input type="range" id="range" onChange={changeProgress} defaultValue="0" ref={progressBar}/>

           <p className="duration">{(duration && !isNaN(duration)) ? calculateTime(duration) : "00:00"}</p>
        </div>
      </div>
      <div className="right-music-part">
        {(isMute || volume==0) ? <i onClick={handleSound}><GoMute /></i> : <i onClick={handleSound}><GiSpeaker /></i>}
        <input type="range" id="volume" min={0} max={100} value={volume}
         onChange={(e)=>setVolume(e.target.value)} 
        />
      </div>
    </div>
  );
}

export default MediaPlayer;