const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            requireed:true,
            maxLength:50,
        },
        description:{
            type:String,
            requireed:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            requireed:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            requireed:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("Todo", todoSchema);