import Nav from "@/components/newNav";
import { useState } from "react"
import { useEffect } from "react"
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
    <Nav/>
     
   
    <div>
        <form className=".textContainer" onSubmit={()=>getBible()}>
    <input id ='search' onChange={getBible} placeholder="Ex. John 1:2"></input>
        {/* <button type = 'submit' id="searchBtn" >search</button> */}
        </form>
       
    {text.verses?.map((data)=>(
        <h1 id = 'text'>{data.text}</h1>
        
    ))}
    </div>
    </>


)
}