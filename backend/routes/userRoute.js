import express from 'express';
import { getUserProfile, loginUser, registerUser } from '../controllers/userController.js';
import { requireSignIn } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/user",requireSignIn,getUserProfile);

export default router;