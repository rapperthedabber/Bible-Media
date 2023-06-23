import React from "react";
import mongoose from "mongoose"
import { model } from "mongoose";

import { models } from "mongoose";

const audioSchema = new mongoose.Schema(
    {
     id:{
            type: Number,
            required: true

      },
    img: {
        type: String,
        required: true

    },
    name: {
        type: String,
        required: true

    },
  
    episode: {
        type: String,
        required: true
    },

    audio: {
        type: String,
        required: true
    }


}); 
module.exports = mongoose.models?.audio || mongoose.model('audio', audioSchema)