import express from 'express';
// import axios from 'axios';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import newsRoute from "./routes/newsRoute.js";
const app = express();

dotenv.config({
    path:"./config/config.env"
});

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log(`MongoDB connection successfull`)
}

app.use(express.json());

app.use("/api/v1",userRoute);
app.use("/api/v1",newsRoute);


/*
const apiUrl = 'http://api.mediastack.com/v1/news';
const apiKey = 'b679e769ab2a18682a48b7b99cdc7f59';
const search = "sports";
const limit = 10

//main news section which will provide news related to search by user
app.get('/', async (req, res) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        access_key: apiKey,
        keywords : search,
        limit : limit
      },
    });
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

const headlineUrl = "https://api.thenewsapi.com/v1/news/top";
const headlineKey = "d08JJhPDN18B3fTeKjj7T2IypVvQYeR2LGPsMIJn";

//top headline api call
app.get("/headline",async (req,res)=> {
    try{
        const response = await axios.get(headlineUrl, {
            params : {
                api_token : headlineKey
            },
        });
        const data = response.data;
        res.json(data);
    }catch(error){
        console.log(error);
        res.status(500).json({success:false,message:error});
    }
});

// main news articles which need to be shown on home/landing page.
const mainNews = "https://gnews.io/api/v4/search";
const mainKey = "093373d3fc37d2f7ca32a010ee832347";
const q = "example";
const country = "india";

app.get("/main-news",async (req,res)=> {
    try{
        const response = await axios.get(mainNews, {
            params : {
                apikey : mainKey,
                q : q,
                country : country,
            }
        });
        const data = response.data;
        res.json(data);
    }catch(error) {
        res.status(500).json({success:false,message:error});
    }
});
*/

app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
});