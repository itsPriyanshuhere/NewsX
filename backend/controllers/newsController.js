import newsModel from "../models/newsModel.js";
import userModel from "../models/userModel.js";

export const createNewsPost = async (req,res) => {
    try {
        //photo to be added
        const {title,description,category,source} = req.body;
        if(!title || !description || !category) {
            return res.status(400).json({
                success: false,
                message : "Please provide complete details",
            });
        }
        const userId = await userModel.findById(req.user._id);
        const news = await newsModel.create({title,description,category,source,user:userId});
        res.status(201).json({
            success:true,
            news
        });
    }catch(error) {
        res.status(500).json({
            success :false,
            message : 'Failed to create new news post',
            error
        });
    }
};