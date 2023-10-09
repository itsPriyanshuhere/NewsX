import express from 'express';
import { createNewsPost, getAllNews, getUserNews } from '../controllers/newsController.js';
import { requireSignIn } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/post-news",requireSignIn,createNewsPost);
router.get("/allpostednews",getAllNews);
router.get("/userpostednews",requireSignIn,getUserNews);

export default router;