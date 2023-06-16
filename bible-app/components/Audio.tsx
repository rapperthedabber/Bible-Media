
import { useState } from "react"
import { useEffect } from "react"
import { useRef } from 'react'
import React from 'react'

import { BsFillCaretRightFill } from 'react-icons/bs'
import { BsPauseCircleFill } from 'react-icons/bs'


const Audio = () => {
   
    const [isPlaying, setisPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [_currentTime, setCurrentTime] = useState(0)
    const progressBar = useRef()
    const bibleAudio = useRef()
    const animationRef = useRef()
 
    const togglePlay = () => {
       
        const preValue = isPlaying
        setisPlaying(!preValue)
        if (!preValue) {
            bibleAudio.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
           
        } else {
            bibleAudio.current.pause()
            cancelAnimationFrame(animationRef.current)
            
    
        }
    }
   
    useEffect(() => {
        const seconds = Math.floor(bibleAudio.current.duration)
        setDuration(seconds)
        progressBar.current.max = seconds;
    }, [bibleAudio?.current?. loadedmetadata, bibleAudio?.current?.readyState])

    const calculate = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    
   
    const whilePlaying = () => {
        progressBar.current.value = bibleAudio?.current?.currentTime
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}`)
        changePlayerCurrentTime()
        animationRef.current = requestAnimationFrame(whilePlaying)
    }
    const changeRange = () => {
        bibleAudio.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime()
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}`)
      
       
    }

    const changePlayerCurrentTime = () =>{
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value)
    }
    const backThirty = () => {
        progressBar.current.value = Number(progressBar.current.value - 30);
        changeRange();
      }
    
      const forwardThirty = () => {
        progressBar.current.value = Number(progressBar?.current?.value + 30);
        changeRange();
      }
    
    
 
    return (
        <div className='audioContainer' >
            {/* <audio></audio> */}
            <audio ref={bibleAudio} src='http://kjv.wordfree.net/bibles/app/audio/1/1/1.mp3'></audio>
            <h1 id='time' >{ calculate(_currentTime) }</h1>
            <button id = 'backThirty' onClick={backThirty}>-30</button>
            <button id = 'forwardThirty' onClick= {forwardThirty}>+30</button>
            <input type='range' id='audioRange' ref={progressBar} onChange={changeRange}></input>
            {/* <div>{}</div> */}
            <button id='audioPlay' onClick={togglePlay}>
                {isPlaying ? <BsPauseCircleFill /> :<BsFillCaretRightFill /> }
            </button>
        </div>
    )
}
export default Audio;


