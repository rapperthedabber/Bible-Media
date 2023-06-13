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
return(
    <>
    <Nav/>
    <div>
        
    {text.verses?.map((data)=>(
        <h1>{data.text}</h1>
        
    ))}
    </div>
    </>


)
}