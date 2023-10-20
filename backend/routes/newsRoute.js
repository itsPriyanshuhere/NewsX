import express from 'express';
import { createNewsPost, getAllNews, getNewsDetails, getUserNews } from '../controllers/newsController.js';
import { likeController, postComment, reportController } from '../controllers/postController.js';
import { requireSignIn } from '../middleware/authMiddleware.js';

const router = express.Router();

// this route allows to post any news article when user is signed in.
router.post("/post-news",requireSignIn,createNewsPost);
// this route allows to fetch all the news posted by website users.
router.get("/allpostednews",getAllNews);
// this route fetches users posted news when user is signed in.
router.get("/userpostednews",requireSignIn,getUserNews);
// this route helps to post comment on the any posted news when an user is signed in.
router.post("/newsbyuser/:id",requireSignIn,postComment);
// this route helps to report on the any posted news when user is signed in.
router.get("/reportpost/:id",requireSignIn,reportController);
// this route helps to like or dislike any posted news when an user is signed in.
router.get("/likepost/:id",requireSignIn,likeController);
// this route helps to get detail of any posted news.
router.get("/newsdetails/:id",getNewsDetails);

export default router;