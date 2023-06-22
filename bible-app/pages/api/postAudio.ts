// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import audio from '../../models/audio'
import connect from "@/lib/mongodb";

export default async function postRequestAudio(req, res){
  await connect();
  try{
 
    const myAudio= await audio.create(req.body);
    if(myAudio){
         res.json({"code": 'Audio library Created!'})
    }else{
        res.json({"code": "audio not Created"})
    }

  }catch(error){
    res.status(400).json({status: 'not able to post audio item'})
  }
}
