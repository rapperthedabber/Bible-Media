import connect from "@/lib/mongodb";
import audio from '../../models/audio'
import mongoose from "mongoose";

export default async function getAudio(req, res){
    await connect();
//    if(req.method !== 'GET'){
//     res.json({"code": "you did not do a get request"})
//    }
   try{
    const myAudio = await audio.find().limit(1).sort({$natural: -1})
    res.status(200).send(myAudio)
    
   }catch(error){
    res.status(400).send({error, msg: "Something went wrong!"})
   }
}