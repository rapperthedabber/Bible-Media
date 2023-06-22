import Nav from "@/components/newNav"
import Audio from "@/components/Audio"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Bible from "@/components/Bible"
export default function Home() {
    const musicArray = [{
        id: 1,
        img: 'https://flxt.tmsimg.com/assets/p17982572_b_v10_aa.jpg',
        name: 'The Bible Podcast',
        episode: ' Genesis1',
        audio: 'http://kjv.wordfree.net/bibles/app/audio/1/1/1.mp3'

    },
    {
        id: 2,
        img: 'https://m.media-amazon.com/images/M/MV5BMmMwZDZlZjAtMjY1YS00ZTEzLThhOWQtNGQ1ZTZiMzRiZDQxXkEyXkFqcGdeQXVyNjc1NjkyMjE@._V1_.jpg',
        name: 'Exodus',
        episode: 'Exodus1',
        audio: 'https://www.wordpocket.org/bibles/app/audio/1/2/1.mp3'
    },
    {
        id: 3,
        img: 'https://m.media-amazon.com/images/M/MV5BMmMwZDZlZjAtMjY1YS00ZTEzLThhOWQtNGQ1ZTZiMzRiZDQxXkEyXkFqcGdeQXVyNjc1NjkyMjE@._V1_.jpg',
        name: 'the Chosen',
        episode: 'John1',
        audio: 'https://www.wordpocket.org/bibles/app/audio/1/43/1.mp3'
    },
    {
        id: 4,
        img: 'https://m.media-amazon.com/images/M/MV5BMmMwZDZlZjAtMjY1YS00ZTEzLThhOWQtNGQ1ZTZiMzRiZDQxXkEyXkFqcGdeQXVyNjc1NjkyMjE@._V1_.jpg',
        name: 'the Chosen',
        episode: 'Job1',
        audio: 'https://www.wordpocket.org/bibles/app/audio/1/18/1.mp3'
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
         
            {musicArray.filter(data=>data.audio).map((data) => (
                <div className="musicContainer" >
                    <img id='musicImage' src={data.img} key={data.id}  onClick={() => showSound(data.id, data.src)} onClick={() => checkClick(data.id, data.img, data.name,data.episode, data.audio  )}></img>
                    <h2 id="episode">{data.episode}</h2>
                    {musicArray?.data?.filter(music => music != data.audio)}
                   
                  
                </div>
                  
                  
            ))}
             
             <Bible  />
             <Audio  /> 
        </div>

    </>

)
}