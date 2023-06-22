import Nav from "@/components/newNav";
import { useState } from "react"
import { useEffect } from "react"
import Audio from "@/components/Audio";
import axios from "axios";
import { Vesper_Libre } from "next/font/google";
export default function renderBible(){
    
    
    const [text, setText] = useState([])
const [chapVerse, setChapVerse] =useState([])





   
    useEffect(() => {
        axios.get('/api/getAudio').then((res) => {
            setChapVerse(res.data);
            console.log(res.data)
            const Name = (res.data.text)
        });
    }, [])
    useEffect(() => {
        axios.get(`https://bible-api.com/${ chapVerse?.map((data)=>(
            data.episode
        ))}`).then((res) => {
            setText(res.data);
            console.log(res.data.verses)
            const Name = (res.data.text)
        });
    }, [])
    const getBible =(event) =>{
       axios.get(`https://bible-api.com/${event.target.value}`).then((res) => {
            setText(res.data);
            console.log(res.data.verses)
            const Name = (res.data.text)
        });
    }

    
return(
    <>
 
 <div className="bibleBox" >
   {chapVerse?.map((data)=>(
      
       <input id ='search' onChange={getBible} placeholder="Ex. John 1:2"></input>
           
   ))}
    
     
    <div  className="wordContainer">
    {text.verses?.map((data)=>(
        <h1 id = 'text'>{data.text}</h1>
        
    ))}
    </div>
    
    </div>
    
    </>)}