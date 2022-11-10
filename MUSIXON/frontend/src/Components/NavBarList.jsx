import React from "react";
import  {GiMusicSpell}  from "react-icons/gi";
import  {BsThreeDots}  from "react-icons/bs";
import  {RiHomeHeartFill}  from "react-icons/ri";
import  {FcHome}  from "react-icons/fc"
import  {FcSearch}   from "react-icons/fc"
import  {FcMusic}  from "react-icons/fc"
import  {FcAddImage}  from "react-icons/fc"
import  {FcAudioFile}   from "react-icons/fc"
import  {FcList} from "react-icons/fc"
import  {IoMdAlbums}   from "react-icons/io"
import  {FaMicrophoneAlt}   from "react-icons/fa"
import  {AiOutlineFileAdd}  from "react-icons/ai"
import  {FcLike}  from "react-icons/fc"
import {FcAddDatabase} from "react-icons/fc"

const NavBarList = [
    {
        id : 1,
        icon : <FcHome />,
        name : "Home"
    },
    {
        id : 2,
        icon : <FcSearch />,
        name : "Search"
    },
    {
        id : 3,
        icon : <FcMusic />,
        name : "Artists"
    },
    {
        id : 4,
        icon : <FcAudioFile />,
        name : "Albums"
    },
    {
        id : 5,
        icon : <FcLike />,
        name : "Liked Songs"
    }
]

export default NavBarList;