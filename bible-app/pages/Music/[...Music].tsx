import { useState } from "react";
import { useEffect } from "react";
import Nav from '../../components/newNav'
import axios from "axios";
import Audio from '../../components/musicAudio'

export default function renderMusic(){
    const Music =[{
        id: 1,
        img: 'https://media.swncdn.com/via/5545-worship-song-singing-cross-church-gettyimages.jpg',
        Name: 'Let Every Nation',
        music:'https://worshipdeeper.com/wp-content/uploads/2017/10/Broken-Cup-simple-version-mp3.mp3'
    },{
        id: 2,
        img:'https://wallpaperaccess.com/full/1439170.jpg',
        Name: 'Broken Cup',
        music: 'https://worshipdeeper.com/wp-content/uploads/2017/10/Broken-Cup-simple-version-mp3.mp3'
    },{
        id: 3,
        img:'https://media.istockphoto.com/id/1373076588/vector/perfume-pink-bottle-with-floral-branch-illustration-on-white-background.jpg?s=612x612&w=0&k=20&c=mdNMP6kEUg7uq0CHkkBEjtW6Kn-R_R4t0wbQV_VKysI=',
        Name: 'Sweetness of Perfume',
        music: 'https://worshipdeeper.com/wp-content/uploads/2017/10/Sweetness-Of-Perfume.mp3'
    },{
        id: 4,
        img:'https://ik.imagekit.io/bpweb1/web/media/podcast-thumbs/God_series_std-large.png?tr=q-65',
        Name: 'Our God is Good to Us',
        music: 'https://worshipdeeper.com/wp-content/uploads/2018/07/Our-God-Is-Good.mp3'
    },{
        id: 5,
        img: 'https://static1.squarespace.com/static/6148b4275c8fab32d79bb744/61490abe6d5a5856d2e859ad/61490b276d5a5856d2e87222/1632974335250/?format=1500w',
        Name:'Nothing is Impossible',
        music: 'https://worshipdeeper.com/wp-content/uploads/2018/11/Nothing-Is-Impossible-Patricia-Hadley.mp3'
    }]

    function postClick(id, img, Name, music){
        window.location.reload()
axios.post('/api/postMusic',{
    id: id,
    img: img,
    Name: Name,
    music: music
} ).then((res)=>{
    console.log(res)
})
    }
    return(
        <>
        <Nav />
        <div className= 'music'>
            <div className= 'musicBox'>
         
            {Music.map((data) => (
                <div className="musicContainer" >
                    <img id='musicImage' src={data.img} key={data.id}  onClick={() => postClick(data.id, data.img, data.Name, data.music  )}></img>
                    <h2 id="episode">{data.Name}</h2>
                   
                  
                </div>
                
                  
                  
            ))}
            </div>
        <Audio />
            
        </div>
        </>

    )
    
}