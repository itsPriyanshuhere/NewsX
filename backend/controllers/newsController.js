import newsModel from "../models/newsModel.js";
import userModel from "../models/userModel.js";

// it will help user to create a new news post
export const createNewsPost = async (req,res) => {
    try {
        //photo to be added
        const {title,description,category,source,photo} = req.body;
        if(!title || !description || !category ||!photo) {
            return res.status(400).json({
                success: false,
                message : "Please provide complete details",
            });
        }
        const userId = await userModel.findById(req.user._id);
        const news = await newsModel.create({title,description,category,source,user:userId,photo});
        // const addInUser = await userModel.findByIdAndUpdate(req.user._id,{post:[...userId.post,news._id]},{new : true});
        const addInUser = await userModel.findByIdAndUpdate(
            req.user._id,
            { $push: { post: news._id } }, // Use $push to add news._id to the 'post' array
            { new: true }
          );
        res.status(201).json({
            success:true,
            addInUser
        });
    }catch(error) {
        res.status(500).json({
            success :false,
            message : 'Failed to create new news post',
            error
        });
    }
};

// this will fetch all posted news by different users.
export const getAllNews = async (req,res) => {
    try {
        const news = await newsModel.find({}).sort({createdAt:-1});
        res.status(200).json({
            success:true,
            news
        });
    } catch (error) {
        res.status(404).json({
            success:false,
            message : "Failed to fetch all posted news",
            error
        });
    }
};

// this will fetch all news posted by signed in user.
export const getUserNews = async (req,res) => {
    try {
        const userId = await userModel.findById(req.user._id).populate('post');
        res.status(200).json({
            success:true,
            userId,
        });
    } catch (error) {
        res.status(404).json({
            succes:false,
            message :"Failed to fetch your news",
            error
        });
    }
};

// this will fetch detail of a posted news.
export const getNewsDetails = async (req,res) => {
    try{
        const {id} = req.params;
        const newsDetails = await newsModel.findById(id);
        res.status(200).json({
            success:true,
            newsDetails
        });
    }catch(error) {
        res.status(500).json({
            success:false,
            message : "Failed to fetch news details",
            error
        });
    }
};