import express from 'express';
import { createNewsPost } from '../controllers/newsController.js';
import { requireSignIn } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/post-news",requireSignIn,createNewsPost);

export default router;