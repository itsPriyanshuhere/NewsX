import mongoose from "mongoose";

const schema = mongoose.Schema({
    title : {
        type : String,
        required : [true,"Please provide title for your news"]
    },
    description : {
        type : String,
        required : [true,'Please provide description for your news'],
    },
    category : {
        type : String,
        required : [true,"Please provide categary for your news article"]
    },
    photo : {
        type : String,
        required : [true,"Please provide link for your image"]
    },
    source : {
        type : String
    },
    report : {
        type : Number,
        default : 0,
    },
    reportUserName: {
        type : [String],
    },
    likes : {
        type : Number,
        default : 0
    },
    likeUserName : {
        type : [String],
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    comments : {
        type : [Object],
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

export default mongoose.model('newsbyuser',schema);