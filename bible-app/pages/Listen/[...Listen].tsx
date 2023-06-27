import Nav from "@/components/newNav"
import Audio from "@/components/Audio"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Prop from "@/components/passProp"
import Bible from "@/components/Bible"
export default function Home() {
    const musicArray = [{
        id: 1,
        img: 'https://static1.squarespace.com/static/5801166f5016e1907a35e844/58092f242994caba273c7cf8/5f484ba18b779a278e0473d0/1599254106563/Genesis.jpg?format=1500w',
        name: 'The Bible Podcast',
        episode: ' Genesis 1',
        audio: 'http://kjv.wordfree.net/bibles/app/audio/1/1/1.mp3'

    },
    {
        id: 2,
        img: 'https://shalhevetboilingpoint.com/wp-content/uploads/2015/02/rsz_10942566_337486903129288_8491029484563350880_n.jpg',
        name: 'Exodus',
        episode: 'Exodus 1',
        audio: 'https://www.wordpocket.org/bibles/app/audio/1/2/1.mp3'
    },
    {
        id: 3,
        img: 'https://m.media-amazon.com/images/M/MV5BMmMwZDZlZjAtMjY1YS00ZTEzLThhOWQtNGQ1ZTZiMzRiZDQxXkEyXkFqcGdeQXVyNjc1NjkyMjE@._V1_.jpg',
        name: 'the Chosen',
        episode: 'John 1',
        audio: 'https://www.wordpocket.org/bibles/app/audio/1/43/1.mp3'
    },
    {
        id: 4,
        img: 'https://imageproxy.youversionapi.com/https://s3.amazonaws.com/yvplans/23067/720x405.jpg',
        name: 'the Chosen',
        episode: 'Job1',
        audio: 'https://www.wordpocket.org/bibles/app/audio/1/18/1.mp3',
        
    },{
        id: 5,
        img: 'https://assetsnffrgf-a.akamaihd.net/assets/m/502014129/univ/art/502014129_univ_lsr_lg.jpg',
        name: 'Revalation',
        episode: 'Revelation 1',
        audio: 'https://www.wordpocket.org/bibles/app/audio/1/66/1.mp3'
    }, {
        id: 6,
        img: 'https://web-assets.youversion.com/html-email/2021-04-luke-and-acts/img/luke-and-acts-blog.jpg',
        name: 'the Chosen',
        episode: 'Luke 1',
        audio: 'https://www.wordpocket.org/bibles/app/audio/1/42/1.mp3'
    }]
    const [audio, setAudio] = useState(false)
    function showSound(data, event) {
        for (let i = 0; i <= musicArray.length; i++) {
            if (data === 1) {
                musicArray[0].setAudio(false)
                return musicArray[1].setAudio(true)

            } else if (data === 2) {
                return musicArray[2].setAudio(true)
            }
            else if (data === 3) {
                return musicArray[3].setAudio(true)
            }
            else if (data === 4) {
                return musicArray[4].setAudio(true)
            }
        else {
            return setAudio(false)
        }
    }

}

function renderBible(){
    axios.get('/api/getAudio').then((res)=>{
        console.log(res.data[0].episode);
        res.data[0].episode
   
    }).then((verse)=>{
        axios.get(`https://bible-api.com/${verse}`).then(
            console.log(verse)
        )
})
}

const checkClick = (id, img, name, episode, audio) => {
    console.log(id, img, name, episode, audio)
    axios.post('/api/postAudio', {
        id: id,
        img: img,
        name: name,
        episode: episode,
        audio: audio
    }).then((res)=>{
        window.location.reload()
        console.log(res)
    })

    
      
    
    
    
}
return (
    <>
        <Nav />
        <div className="music">
            <div className='musicBox'>
         
            {musicArray.filter(data=>data.audio).map((data) => (
                <div className="musicContainer" >
                    <img id='musicImage' src={data.img} key={data.id}  onClick={() => showSound(data.id, data.src)} onClick={() => checkClick(data.id, data.img, data.name,data.episode, data.audio  )}></img>
                    <h2 id="episode" key ={data.id}>{data.episode}</h2>
                    {/* {musicArray?.data?.filter(music => music != data.audio)} */}
                   
                  
                </div>
                
                  
                  
            ))}
            </div>
        
             <Bible renderBible = {renderBible} />
             <Audio  /> 
        </div>

    </>

)
}