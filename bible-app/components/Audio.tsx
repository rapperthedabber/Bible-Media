import Matthew1 from '../Audio/English_eng_ESV_NT_Drama/Matthew1.mp3'
import react from '/react'
import { useState } from "react"
import { useEffect } from "react"
import {useRef} from 'react'
import React from 'react'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { BsPauseCircleFill} from 'react-icons/bs'
const Audio = () => {
    const [isPlaying, setisPlaying] = useState(false)
    const [duration, setDuration] =useState(0)
    const togglePlay =()=> {
        const preValue = isPlaying
        setisPlaying(!preValue)
        if(preValue){
            bibleAudio.current.pause()
        }else{
            bibleAudio.current.play()
        
        }
    }

    const bibleAudio = useRef()
    return (
        <div className='audioContainer' >
            {/* <audio></audio> */}
            <audio ref={bibleAudio} src='http://kjv.wordfree.net/bibles/app/audio/1/1/1.mp3'></audio>
            <h1 id='time'>{duration}</h1>
            <input type='range' id='audioRange'></input>
            <button id='audioPlay' onClick={ togglePlay}>
                {isPlaying ? <BsFillCaretRightFill /> : <BsPauseCircleFill />}
                </button>
        </div>
    )
}
export default Audio;


