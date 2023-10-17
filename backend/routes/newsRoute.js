import express from 'express';
import { createNewsPost, getAllNews, getNewsDetails, getUserNews } from '../controllers/newsController.js';
import { likeController, postComment, reportController } from '../controllers/postController.js';
import { requireSignIn } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/post-news",requireSignIn,createNewsPost);
router.get("/allpostednews",getAllNews);
router.get("/userpostednews",requireSignIn,getUserNews);
router.post("/newsbyuser/:id",requireSignIn,postComment);
router.get("/reportpost/:id",requireSignIn,reportController);
router.get("/likepost/:id",requireSignIn,likeController);
router.get("/newsdetails/:id",getNewsDetails);

export default router;