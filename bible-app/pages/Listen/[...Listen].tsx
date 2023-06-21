import Nav from "@/components/newNav"
import Audio from "@/components/Audio"
import { useState } from "react"
import { useEffect } from "react"
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
        name: '',
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

const checkClick = (event, data) => {
    console.log(data)
    console.log(event)
    console.log(data === event)
    if(event === data){
        setAudio(prevState => !prevState) 
    }
    
      
    
    
    
}
return (
    <>
        <Nav />
        <div className="music">
         
            {musicArray.filter(data=>data.audio).map((data) => (
                <div className="musicContainer" >
                    <img id='musicImage' src={data.img} key={data.id}  onClick={() => showSound(data.id, data.src)} onClick={() => checkClick(data.id)}></img>
                    <h2 id="episode">{data.episode}</h2>
                    {musicArray?.data?.filter(music => music != data.audio)}
                    {audio && data? <Audio src={data.audio} key={data.id}  showSound={audio} musicArray = {musicArray} /> : null}
                  
                </div>
                  
                  
            ))}
             <Bible  />
        </div>

    </>

)
}