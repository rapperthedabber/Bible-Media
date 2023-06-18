import Nav from "@/components/newNav";
import { useState } from "react"
import { useEffect } from "react"
import Audio from "@/components/Audio";
import axios from "axios";
export default function renderBible(){
    
    
    const [text, setText] = useState([])

    useEffect(() => {
        axios.get('https://bible-api.com/john 1').then((res) => {
            setText(res.data);
            console.log(res.data.verses)
            const Name = (res.data.text)
        });
    }, [])

    const getBible = event =>{
       axios.get(`https://bible-api.com/${event.target.value}`).then((res) => {
            setText(res.data);
            console.log(res.data.verses)
            const Name = (res.data.text)
        });
    }

    
return(
    <>
 
     
   
    <div className="bibleBox" >
        <form onSubmit={()=>getBible()}>
    <input id ='search' onChange={getBible} placeholder="Ex. John 1:2"></input>
        {/* <button type = 'submit' id="searchBtn" >search</button> */}
        </form>
    <div  className="wordContainer">
    {text.verses?.map((data)=>(
        <h1 id = 'text'>{data.text}</h1>
        
    ))}
    </div>
    
    </div>
    
    </>)}