import { comparePassword, hashPassword } from "../helper/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerUser = async (req,res) => {
    try {
        const {name,email,password,answer} = req.body;
        if(!name) {
            return res.status(400).json({
                success:false,
                message : "Please enter name"
            });
        }
        if(!email) {
            return res.status(400).json({
                success:false,
                message : "Please enter email id"
            });
        }
        if(!password) {
            return res.status(400).json({
                success:false,
                message : "Please enter your password"
            });
        }
        if(!answer) {
            return res.status(400).json({
                success:false,
                message : "Please enter anwser"
            });
        }
        //check for existing user
        const existingUser = await userModel.findOne({email});
        if(existingUser) {
            return res.status(200).json({
                success:false,
                message:"User Already Registered"
            });
        }
        const hashedPassword = await hashPassword(password);
        const user = await userModel.create({name,email,password:hashedPassword,answer});
        res.status(201).json({
            success:true,
            message:"User successfully registered",
            user
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message : error
        });
    }
};

export const loginUser = async (req,res) => {
    try {
        const {email,password} = req.body;
        if(!email) {
            return res.status(400).json({
                success:false,
                message : "Please enter email id"
            });
        }
        if(!password) {
            return res.status(400).json({
                success:false,
                message : "Please enter your password"
            });
        }
        const existingUser = await userModel.findOne({email});
        if(!existingUser) {
            return res.status(200).json({
                success: false,
                message : "No user found need to register first",
            });
        }
        const match = await comparePassword(password,existingUser.password);
        if(!match) {
            return res.status(400).json({
                success:false,
                message:"Invalid Password",
            });
        }
        const token = await JWT.sign({_id:existingUser._id},process.env.JWT_SECRET,{expiresIn:'3d'});
        res.status(200).send({
            success:true,
            message:"Login Successful",
            existingUser:{
                name:existingUser.name,
                email:existingUser.email,
            },
            token
        });
    }catch(error) {
        res.status(500).json({
            success:false,
            message : error
        });
    }
};

export const getUserProfile = async (req,res) => {
    try {
        const userId = await userModel.findById(req.user._id);
        res.status(200).json({
            success:true,
            userId,
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "Failed to fetch user detials",
            error,
        });
    }
};