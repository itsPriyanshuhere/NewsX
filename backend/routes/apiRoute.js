import express from "express";
import { getHeadlines, getTopArtciles, searchNewsResults,  } from "../controllers/apiController.js";

const router = express.Router();

// helps to fetch headline in breaking news sections from the news api.
router.get("/headlines",getHeadlines);
// this route fetches top articles from Gnews api.
router.get("/top-article",getTopArtciles);
// this route helps to search latest articles related to given keyword.
router.post("/search-article",searchNewsResults);

export default router;