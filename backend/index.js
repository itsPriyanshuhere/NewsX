import express from 'express';
import axios from 'axios';

const app = express();

const apiUrl = 'http://api.mediastack.com/v1/news';
const apiKey = 'b679e769ab2a18682a48b7b99cdc7f59';
const search = "sports";

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        access_key: apiKey,
        keywords : search,
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

})

app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
});