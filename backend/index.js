import express from 'express';
import axios from 'axios';

const app = express();

const apiUrl = 'http://api.mediastack.com/v1/news';
const apiKey = 'b679e769ab2a18682a48b7b99cdc7f59';

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        access_key: apiKey,
      },
    });
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
});