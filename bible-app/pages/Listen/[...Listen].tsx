import Nav from "@/components/newNav"
import Audio from "@/components/Audio"
import { useState } from "react"
import { useEffect } from "react"
export default function Home() {
    const musicArray = [{
        id: 1,
        img: 'https://flxt.tmsimg.com/assets/p17982572_b_v10_aa.jpg',
        name: 'The Bible Podcast',
        episode: ' Genesis',
        audio:'http://kjv.wordfree.net/bibles/app/audio/1/1/1.mp3'

    },
    {
        id:2,
        img: 'https://m.media-amazon.com/images/M/MV5BMmMwZDZlZjAtMjY1YS00ZTEzLThhOWQtNGQ1ZTZiMzRiZDQxXkEyXkFqcGdeQXVyNjc1NjkyMjE@._V1_.jpg',
        name: '',
        episode: 'Exodus',
        audio: 'https://www.wordpocket.org/bibles/app/audio/1/2/1.mp3'
    },
    {
        id:3,
        img: 'https://m.media-amazon.com/images/M/MV5BMmMwZDZlZjAtMjY1YS00ZTEzLThhOWQtNGQ1ZTZiMzRiZDQxXkEyXkFqcGdeQXVyNjc1NjkyMjE@._V1_.jpg',
        name: 'the Chosen',
        episode: 'John',
        audio:'https://www.wordpocket.org/bibles/app/audio/1/43/1.mp3'
    },
    {
        id:4,
        img: 'https://m.media-amazon.com/images/M/MV5BMmMwZDZlZjAtMjY1YS00ZTEzLThhOWQtNGQ1ZTZiMzRiZDQxXkEyXkFqcGdeQXVyNjc1NjkyMjE@._V1_.jpg',
        name: 'the Chosen',
        episode: 'Job',
        audio:'https://www.wordpocket.org/bibles/app/audio/1/18/1.mp3'
    }]

    const [showAudio, setShowAudio] = useState()
    return (
        <>
            <Nav />
            <div className="music">
                {musicArray.map((data) => (
                    <div className="musicContainer">
                        <img id='musicImage' src={data.img}  key = {data.id} onClick={()=>setShowAudio()}></img>
                        <h2 id="episode">{data.episode}</h2>
                        <Audio src = {data.audio} key = {data.id}/>
                    </div>
                       
                ))}
            </div>
       
        </>

    )
}