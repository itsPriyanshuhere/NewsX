import express from "express";
import { getHeadlines, getTopArtciles, searchNewsResults,  } from "../controllers/apiController.js";

const router = express.Router();

router.get("/headlines",getHeadlines);
router.get("/top-article",getTopArtciles);
router.post("/search-article",searchNewsResults);

export default router;