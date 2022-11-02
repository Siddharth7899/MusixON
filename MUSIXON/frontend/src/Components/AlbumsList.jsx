const albums = [
    {
        img_src:"https://i.ytimg.com/vi/YmLQgDYWmjU/maxresdefault.jpg",
        album_name:"Punjabi X",
        songs:[
            {id:1, fav:false, song_src:"https://pagalworld.com.se/files/download/type/320/id/6274",song_name:"No Love",singer_name:"Shubh",song_img_src:"https://punjabimania.com/images/1z8cZdgf9I4IRRNJLQuk.jpg"},
            {id:2, fav:false, song_src:"https://pwdown.com/113604/Pasoori%20-%20Shae%20Gill.mp3",song_name:"Pasoori",singer_name:"Shae Gill,Ali Sethi",song_img_src:"https://i.ytimg.com/vi/5Eqb_-j3FDA/maxresdefault.jpg"},
            {id:3, fav:false, song_src:"https://pwdown.com/14491/Kya%20Baat%20Ay%20-%20Harrdy%20Sandhu.mp3",song_name:"Kya Baat Ay",singer_name:"Harrdy Sandhu",song_img_src:"https://i.scdn.co/image/ab67616d0000b27331cc2963f1615892af6a9f93"}
        ]
    },
    {
        img_src:"https://i.scdn.co/image/ab67706c0000bebbf8d7864252f1665f5781b5c0",
        album_name:"Telugu Hits",
        songs:[
            {id:1, fav:false, song_src:"https://pagalworld.com.se/files/download/type/320/id/5179",song_name:"Halamithi Habibo",singer_name:"Anirudh Ravichander,Jonitha Gandhi",song_img_src:"https://c.saavncdn.com/629/Arabic-Kuthu-Halamithi-Habibo-From-Beast--Tamil-2022-20220223183836-500x500.jpg"},
            {id:2 ,fav:false, song_src:"https://pagalworld.com.se/files/download/type/320/id/5616",song_name:"Mehabooba",singer_name:"Ananya Bhat",song_img_src:"https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/mehabooba_song_.jpg"},
            {id:3 ,fav:false, song_src:"https://pagalworld.com.se/files/download/type/320/id/4850",song_name:"Oo Antava Oo Oo Antava",singer_name:"Indravathi Chauhan",song_img_src:"https://i.ytimg.com/vi/u_wB6byrl5k/maxresdefault.jpg"}
        ]
    },
    {
        img_src:"https://i.scdn.co/image/ab67706c0000bebb31c1a7b185084372f2c19322",
        album_name:"Hangover Cure",
        songs:[
            {id:1 ,fav:false, song_src:"https://pwdown.com/113422/Woh%20Din%20-%20Chhichhore.mp3",song_name:"Woh Din",singer_name:"Arigit Singh,Pritam",song_img_src:"https://c.saavncdn.com/153/Woh-Din-Arijit-Singh-Version-From-Chhichhore--Hindi-2019-20190828231538-500x500.jpg"},
            {id:2, fav:false, song_src:"https://pwdown.com/12531/Main%20Rahoon%20Ya%20Na%20Rahoon%20-%20Armaan%20Malik%20320Kbps.mp3",song_name:"Main Rahoon Ya Na Rahoon",singer_name:"Arman Malik,Amaal Malik",song_img_src:"https://i.ytimg.com/vi/4WB5y4DAcKE/maxresdefault.jpg"},
            {id:3, fav:false, song_src:"https://pwdown.com/8919/02%20Banjaara%20-%20Ek%20Villain%20(%20PagalWorld.com%20).mp3",song_name:"Banjaara",singer_name:"Mohammad Irfan,Mithoon",song_img_src:"https://i1.sndcdn.com/artworks-000087570668-0emnct-t500x500.jpg"}
        ]
    },
    {
        img_src:"https://i.scdn.co/image/ab67706f000000035eb058171e52e85abd105720",
        album_name:"Chill Station",
        songs:[
            {id:1, fav:false, song_src:"https://pwdown.com/8289/Blue%20Eyes%20Yo%20Yo%20Honey%20Singh%20(PagalWorld.com)%20-%20320Kbps%20.mp3",song_name:"Blue Eyes",singer_name:"Yo Yo Honey Singh",song_img_src:"http://1.bp.blogspot.com/-jFV14ZxVjC8/Un0renIUTII/AAAAAAAAGn8/oxF4DaGweeo/w1200-h630-p-k-no-nu/honeysingh_blueeyes.jpg"},
            {id:2, fav:false, song_src:"https://pwdown.com/14642/Kamaal%20-%20Badshah.mp3",song_name:"Kamaal Hai",singer_name:"Badshah,Uchana Amit",song_img_src:"https://i.ytimg.com/vi/KSNrCBdLbGM/maxresdefault.jpg"},
            {id:3, fav:false, song_src:"https://pwdown.com/6497/01%20%20%20Make%20Some%20Noise%20For%20The%20Desi%20Boyz.mp3",song_name:"Make Some Noise For The Desi Boyz",singer_name:"Pritam,Kk,Bob",song_img_src:"https://i1.sndcdn.com/artworks-000015031954-9q14a1-t500x500.jpg"}
        ]
    },
    {
        img_src:"https://happymag.tv/wp-content/uploads/2020/05/music-taste.jpeg",
        album_name:"Pov: You're in Love",
        songs:[
            {id:1, fav:false, song_src:"https://pwdown.com/14697/Kaise%20Hua%20-%20Kabir%20Singh.mp3",song_name:"Kaise Hua",singer_name:"Vishal Mishra",song_img_src:"https://www.ilyricshub.com/wp-content/uploads/2019/06/Kaise-Hua-Kabir-Singh.jpg"},
            {id:2, fav:false, song_src:"https://pwdown.com/12075/Saware%20-%20Arijit%20Singh%20-%20320Kbps.mp3",song_name:"Saware",singer_name:"Arigit Singh",song_img_src:"https://i.ytimg.com/vi/CsOsmgUmT9U/maxresdefault.jpg"},
            {id:3, fav:false, song_src:"https://pwdown.com/113467/Shayad%20-%20Love%20Aaj%20Kal.mp3",song_name:"Shayad",singer_name:"Pritam,Arigit Singh",song_img_src:"https://i.scdn.co/image/ab67616d0000b2735ce250ed772675c347a34f64"}
        ]
    },
    {
        img_src:"https://i.ytimg.com/vi/vbt_Lm2tXMY/maxresdefault.jpg",
        album_name:"90's Special's",
        songs:[
            {id:1, fav:false, song_src:"https://pwdown.com/111826/04.%20Dil%20Dooba.mp3",song_name:"Dil Dooba",singer_name:"Sonu Nigam,Shreya Ghosal",song_img_src:"https://i.ytimg.com/vi/eG-cS13QWmM/maxresdefault.jpg"},
            {id:2, fav:false, song_src:"https://pwdown.com/113244/01.%20Bin%20Tere%20Sanam.mp3",song_name:"Bin Tere Sanam",singer_name:"Udit Narayan,Kavita Krishnamurthy",song_img_src:"https://3.bp.blogspot.com/-73YxJTtO-Wk/WIIDG07mGrI/AAAAAAAADVk/knw2bMycny8UhacHApcBOSpvKios7euBACLcB/s640/Bin%2BTere%2BSanam%2BMar%2BMitenge%2BHum-L%2BYaara%2BDildara%2B%25281991%2529.jpg"},
            {id:3, fav:false, song_src:"https://pwdown.com/111976/01.%20Churake%20Dil%20Mera.mp3",song_name:"Churake Dil Mera",singer_name:"Kumar Sanu,Alka Yagnik",song_img_src:"https://i.ytimg.com/vi/XT3DkR1aQoY/hqdefault.jpg"}
        ]
    }
]

export default albums;