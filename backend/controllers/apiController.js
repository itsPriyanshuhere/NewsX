import axios from 'axios';

export const getHeadlines = async (req,res) => {
    try{
        const response = await axios.get(process.env.HEADLINE_URL, {
            params : {
                api_token : process.env.HEADLINE_API_TOKEN,
            },
        });
        const {data} = response.data;
        res.status(200).json({
            success:true,
            data
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message : "Failed to fetch news headlines",
            message:error
        });
    }
};

export const getTopArtciles = async (req,res) => {
    try {
        const response = await axios.get(process.env.TOP_ARTICLE_URL, {
            params : {
                apikey : process.env.TOP_ARTICLE_API_KEY,
                q : process.env.TOP_ARTICLE_Q,
                country : process.env.TOP_ARTICLE_COUNTRY,
            }
        });
        const data = response.data;
        res.json(data);
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to fetch top artciles",
            error
        });
    }
};

export const searchNewsResults = async (req,res) => {
    try {
        const {keyword} = req.body;
        const response = await axios.get(process.env.SEARCH_API_URL, {
          params: {
            access_key: process.env.SEARCH_ACCESS_KEY,
            keywords : keyword,
          },
        });
        const data = response.data;
        res.json(data);
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            success:false,
            message:"Failed to fetch searched result",
            error
        });
      }
};