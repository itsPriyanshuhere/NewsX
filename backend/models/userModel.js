import mongoose from "mongoose";

const schema = mongoose.Schema({
    name : {
        type : String,
        required : [true,'Please provide your name']
    },
    email : {
        type : String,
        required : [true,"Please provide your email id"]
    },
    password : {
        type : String,
        required : true
    },
    answer : {
        type : String,
        required : [true,"Please provide an answer"]
    },
    liked : {
        type : Array
    },
    post : {
        type : mongoose.Schema.Types.ObjectId,
        type : Array,
        ref : 'newsbyuser'
    },
    comment : {
        type : String
    },
    createdAt : {
        type : Date,
        default : Date.now,
    },
});

export default mongoose.model('user',schema);