import express from 'express';
import { getUserProfile, loginUser, registerUser } from '../controllers/userController.js';
import { requireSignIn } from '../middleware/authMiddleware.js';

const router = express.Router();

// this route will register an user on out website
router.post("/register",registerUser);
// this route will all user to login in their account.
router.post("/login",loginUser);
// this route will fetch user details when signed in.
router.get("/user",requireSignIn,getUserProfile);

export default router;