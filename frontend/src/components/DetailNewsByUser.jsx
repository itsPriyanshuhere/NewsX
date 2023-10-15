import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { server } from '../main'

const DetailNewsByUser = () => {

    const {id} = useParams();
    const [details,setDetails] = useState({});

    const getNewsDetails = async () => {
        const res = await axios.get(`${server}/api/v1/newsdetails/${id}`) 
        setDetails(res.data);
    }

    useEffect(()=>{
        getNewsDetails();
    },[]);

    console.log(details.newsDetails);

  return (
    <div>DetailNewsByUser</div>
  )
}

export default DetailNewsByUser