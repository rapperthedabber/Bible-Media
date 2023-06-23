// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import music from '../../models/music'
import connect from "@/lib/mongodb";

export default async function postRequestAudio(req, res){
  await connect();
  try{
 
    const myMusic= await music.create(req.body);
    if(myMusic){
         res.json({"code": 'Music library Created!'})
    }else{
        res.json({"code": "Music not Created"})
    }

  }catch(error){
    res.status(400).json({status: 'not able to post audio item'})
  }
}
