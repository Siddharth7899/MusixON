const artists = [
    {
        img_Src:"https://wallpaperaccess.com/full/1280821.jpg",
        singer_name:"Arigit Singh",
        songs:[
            {id:1, fav:false, song_src:"https://pwdown.com/12250/01%20Tum%20Hi%20Ho%20-%20Aashiqui%202%20(Arijit%20Singh)%20320Kbps.mp3",song_name:"Tum Hi Ho",song_img_src:"https://c.saavncdn.com/430/Aashiqui-2-Hindi-2013-500x500.jpg",},
            {id:2, fav:false, song_src:"https://pwdown.com/113639/Kesariya%20Tera%20Ishq%20Hai%20Piya.mp3",song_name:"Keshariya",song_img_src:"https://i.ytimg.com/vi/ZoS7C--cXxA/hqdefault.jpg",},
            {id:3, fav:false, song_src:"https://pwdown.com/9043/04%20Uska%20Hi%20Banana%20-%201920%20Evil%20Returns%20(Arijit%20Singh).mp3",song_name:"Uska Hi Banana",song_img_src:"https://c.saavncdn.com/029/1920-Evil-Returns-2012-500x500.jpg",}
        ]
    },
    {
        img_Src:"https://yt3.ggpht.com/Y3Xd5a92Olf_5x5igDk8MzzqyKChkP3jKoV6-Iux8e7zChGDMSsrLIt95T8GZd--0FTqQE9KfQ=s900-c-k-c0x00ffffff-no-rj",
        singer_name:"Arman Malik",
        songs:[
            {id:1, fav:false, song_src:"https://pwdown.com/14697/Pehla%20Pyaar%20-%20Kabir%20Singh.mp3",song_name:"Pehla Pyar",song_img_src:"https://i.ytimg.com/vi/B7SkAq_94J8/maxresdefault.jpg",},
            {id:2, fav:false, song_src:"https://pwdown.com/12531/Kuch%20To%20Hai%20-%20Armaan%20Malik%20320Kbps.mp3",song_name:"Kuch To Hai",song_img_src:"https://c.saavncdn.com/677/Do-Lafzon-Ki-Kahani-Hindi-2016-500x500.jpg",},
            {id:3, fav:false, song_src:"https://pwdown.com/12531/Jab%20Tak%20(M.S.%20Dhoni)%20Armaan%20Malik%20320Kbps.mp3",song_name:"Jab Tak",song_img_src:"https://i.ytimg.com/vi/K-Ts-NFR62o/maxresdefault.jpg",}
        ]
    },
    {
        img_Src:"https://lastfm.freetls.fastly.net/i/u/770x0/be11bceecaa26f7a21780168a201d94b.jpg",
        singer_name:"Alan Walker",
        songs:[
            {id:1, fav:false, song_src:"https://paglasongs.com/files/download/type/320/id/1716",song_name:"Faded",song_img_src:"https://i1.sndcdn.com/artworks-000157169723-rmc77e-t500x500.jpg",},
            {id:2, fav:false, song_src:"https://paglasongs.com/files/download/type/320/id/1451",song_name:"Darkside",song_img_src:"https://i.ytimg.com/vi/sdAOoB5ML0Q/maxresdefault.jpg",},
            {id:3, fav:false, song_src:"https://www.mp3saavan.com/wp-content/uploads/2022/05/On-My-Way.mp3",song_name:"On My Way",song_img_src:"https://upload.wikimedia.org/wikipedia/en/a/af/Alan_Walker_-_On_My_Way.png",}
        ]
    },
    {
        img_Src:"https://cdn.wallpapersafari.com/11/45/qJxG0p.jpg",
        singer_name:"Dua Lipa",
        songs:[
            {id:1, fav:false, song_src:"https://www.mp3saavan.com/wp-content/uploads/2021/11/You_Want_MeDua_Lipa_Levitating.mp3",song_name:"Levitating",song_img_src:"https://i.scdn.co/image/ab67616d0000b273bd26ede1ae69327010d49946",},
            {id:2, fav:false, song_src:"https://pagaliworld.com/files/download/type/320/id/8449",song_name:"One Kiss",song_img_src:"https://www.nme.com/wp-content/uploads/2018/02/GettyImages-545603262_dua_lipa_1000-696x442.jpg",},
            {id:3, fav:false, song_src:"https://pagaliworld.com/files/download/type/320/id/4036",song_name:"No Lie",song_img_src:"https://i.ytimg.com/vi/zdhKRTvua6Q/maxresdefault.jpg",}
        ]
    },
    {
        img_Src:"https://images.hindustantimes.com/img/2022/09/12/1600x900/Jubin_Nautiyal_on_arrest_calls_1662958326101_1662958326220_1662958326220.jpg",
        singer_name:"Jubin Nautiyal",
        songs:[
            {id:1, fav:false, song_src:"https://pwdown.com/14276/Humnava%20Mere%20-%20Jubin%20Nautiyal.mp3",song_name:"Humnava Mere",song_img_src:"https://upload.wikimedia.org/wikipedia/en/b/ba/Humnava_Mere.jpg",},
            {id:2, fav:false, song_src:"https://pagalworld.com.se/files/download/type/320/id/4203",song_name:"Meri Zindagi Hai Tu",song_img_src:"https://i0.wp.com/99lyricstore.com/wp-content/uploads/2021/10/meri-zindagi-hai-tu-lyrics-satyamev.jpg",},
            {id:3, fav:false, song_src:"https://pwdown.com/113558/Raataan%20Lambiyan%20-%20Shershaah.mp3",song_name:"Raataan Lambiyan",song_img_src:"https://c.saavncdn.com/222/Raataan-Lambiyan-From-Shershaah--Hindi-2021-20210729181107-500x500.jpg",}
        ]
    },
    {
        img_Src:"https://www.thehindu.com/incoming/uanb2i/article65482667.ece/alternates/BASE_LANDSCAPE/KK002.jpg",
        singer_name:"Pritam & KK",
        songs:[
            {id:1, fav:false, song_src:"https://pwdown.com/14156/Tu%20Hi%20Meri%20Shab%20Hai%20-%20Gangster%20320Kbps.mp3",song_name:"Tu Hi Mera Sab Hai",song_img_src:"https://i0.wp.com/99lyricstore.com/wp-content/uploads/2021/04/Tu2Bhi2Bmeri2Bshab2Bhai2BHindi2BLove2BSong2BLyrics252C2BSung2BBy2BK.K.jpg?w=840&ssl=1",},
            {id:2, fav:false, song_src:"https://pwdown.com/14156/Dil%20Ibaadat%20-%20Tum%20Mile%20320Kbps.mp3",song_name:"Dil Ibaadat",song_img_src:"https://1.bp.blogspot.com/-Tk0rUEci4sk/X6ZLgO-jGcI/AAAAAAAACno/uef7vqxUh0oEYdosGEoM-94U5m_auw9SQCLcBGAsYHQ/s600/Dil%2BIbaadat%2BLyrics%2BTum%2BMile.webp",},
            {id:3, fav:false, song_src:"https://pwdown.com/14156/Tujhe%20Sochta%20Hoon%20-%20Jannat%202%20320Kbps.mp3",song_name:"Tujhe Sochta Hoon",song_img_src:"https://i.scdn.co/image/ab67616d0000b273026c5562c014538194fbdcd2",}
        ]
    }
]

export default artists;