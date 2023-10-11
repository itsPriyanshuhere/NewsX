import newsModel from "../models/newsModel.js";
import userModel from "../models/userModel.js";

export const postComment = async (req,res) => {
    try {
        const {id} = req.params;
        const {newComment} = req.body;
        const newsPost = await newsModel.findById(id);
        const {name} = await userModel.findById(req.user._id);
        const comment = {
            name : name,
            comment : newComment,
        }
        newsPost.comments.push(comment);
        const updatedPost = await newsPost.save();
        res.status(200).json({
            success:true,
            updatedPost
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: "Failed to comment",
            error
        })
    }
};

export const reportController = async (req,res) => {
    try {
        const {id} = req.params;
        const newsPost = await newsModel.findById(id);
        const {email} = await userModel.findById(req.user._id);
        const isExists = await newsPost.reportUserName.includes(email);
        if(isExists) {
            return res.status(200).json({
                success:false,
                message:"You Already Reported This Post"
            });
        }
        const addReporterEmail = await newsModel.findByIdAndUpdate(id,{$push:{reportUserName:email}},{new:true}); 
        const updatedPost = await newsModel.findByIdAndUpdate(id,{ $inc: { report: 1 } },{new:true});
        res.status(200).json({
            success:true,
            addReporterEmail,
            updatedPost
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message : "Failed to report this post",
            error
        })
    }
};

export const likeController = async (req,res) => {
    try {
        const {id} = req.params;
        const newsPost = await newsModel.findById(id);
        const {email} = await userModel.findById(req.user._id);
        const isExists = await newsPost.likeUserName.includes(email);
        if(!isExists) {
            const addLike = await newsModel.findByIdAndUpdate(id,{$push:{likeUserName:email}},{new:true}); 
            const updatedPost = await newsModel.findByIdAndUpdate(id,{ $inc: { likes: 1 } },{new:true});
            return res.status(200).json({
                success:true,
                updatedPost,
            });
        }else {
            const addLike = await newsModel.findByIdAndUpdate(id,{$pull:{likeUserName:email}},{new:true}); 
            const updatedPost = await newsModel.findByIdAndUpdate(id,{ $inc: { likes: -1 } },{new:true});
            return res.status(200).json({
                success:true,
                updatedPost,
            });
        }
    } catch (error) {
        res.status(400).json({
            success:false,
            message : "Failed to like or unlike this post",
            error
        });
    }
};