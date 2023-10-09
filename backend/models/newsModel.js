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
        data: Buffer,
        contentTpye : String,
    },
    source : {
        type : String
    },
    report : {
        type : Number,
        default : 0,
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    comment : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

export default mongoose.model('newsbyuser',schema);