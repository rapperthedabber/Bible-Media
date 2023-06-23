
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import music from '../../models/music'
import connect from "@/lib/mongodb";

export default async function getMusic(req, res){
    await connect();
   if(req.method !== 'GET'){
    res.json({"code": "you did not do a get request"})
   }
   try{
    const myMusic = await music.find().limit(1).sort({$natural: -1})
    res.status(200).send(myMusic)
    
   }catch(error){
    res.status(400).send({error, msg: "Something went wrong!"})
   }
}