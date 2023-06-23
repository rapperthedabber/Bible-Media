import React from "react";
import mongoose from "mongoose"
import { model } from "mongoose";

import { models } from "mongoose";

const musicSchema = new mongoose.Schema(
    {
     id:{
            type: Number,
            required: true

      },
    img: {
        type: String,
        required: true

    },
    Name: {
        type: String,
        required: true

    },

    music: {
        type: String,
        required: true
    }


}); 
module.exports = mongoose.models?.music|| mongoose.model('music', musicSchema)