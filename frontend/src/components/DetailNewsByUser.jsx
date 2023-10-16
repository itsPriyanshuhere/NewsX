import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { server } from '../main'
import {AiOutlineHeart} from "react-icons/ai";
import {MdReportGmailerrorred} from "react-icons/md";
import {FaRegCommentDots} from "react-icons/fa";

const DetailNewsByUser = () => {

    const {id} = useParams();
    const [details,setDetails] = useState({});
    const [newComment,setNewComment] = useState("");
    const [showComment,setShowComment] = useState([]);
    const [showInputBox,setShowInputBox] = useState(false);
    const [likes,setLikes] = useState(details?.likes);
    const [reportNum,setReportNum] = useState(details?.report);

    const getNewsDetails = async () => {
        const res = await axios.get(`${server}/api/v1/newsdetails/${id}`) 
        setDetails(res.data.newsDetails);
        setShowComment(res.data.newsDetails.comments);
        setLikes(res.data.newsDetails.likes);
        setReportNum(res.data.newsDetails.report);
    }

    useEffect(()=>{
        getNewsDetails();
    },[likes,reportNum,showComment]);

    const handleClick = () => {
        setShowInputBox(!showInputBox);
    }

    const handleLike = async () =>{
        const res = await axios.get(`${server}/api/v1/likepost/${id}`)
        setLikes(res.data.updatedPost.likes);
    }

    const handleReport = async () => {
        const res = await axios.get(`${server}/api/v1/reportpost/${id}`)
        alert(res.data.message);
        setReportNum(res?.data?.updatedPost?.report);
    }

    const handleComment = async (e) => {
        e.preventDefault();
        const res = await axios.post(`${server}/api/v1/newsbyuser/${id}`,{newComment});
        setShowComment(res.data.updatedPost.comments);
    }


  return (
    <div className='flex justify-center items-center'>
        <div className='bg-white h-auto w-1/2 text-center border rounded-md'>
            <h2 className='text-2xl pt-4 font-semibold text-red-500'>{details.title}</h2>
            <div className='p-8'>
                <img className='object-contain mx-auto border-solid border-2 rounded-xl' src={details.photo} alt={details.title} />
            </div>
            <div className='flex flex-row px-8 py-2 gap-2 items-center'>
                <p className='text-lg font-thin' >{details.description}</p>
            </div>
            <div className='px-8 py-2 gap-2 flex flex-row justify-end items-center'>
                <h4 className='text-2xl text-red-500'>{likes}</h4>
                <button onClick={handleLike} className='text-3xl text-red-500'>
                 <AiOutlineHeart />
                </button>
                <h4 className='text-2xl text-blue-300'>{details.comments?.length}</h4>
                <button onClick={handleClick} className='text-3xl text-blue-300'>
                 <FaRegCommentDots />
                </button>
                <h4 className='text-2xl text-black'>{reportNum}</h4>
                <button onClick={handleReport} className='text-3xl text-black'>
                 <MdReportGmailerrorred />
                </button>
            </div>
            {
                showInputBox && (
                    <div className='space-x-4 my-4'>   
                    <input
                        className="w-3/5 flex-1 p-3 border-gray-100 outline-none border-2 rounded-2xl focus:border-gray-300"
                        type="text"
                        placeholder="Add a comment"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button onClick={handleComment} className='p-3 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors'>Comment</button>
                    </div>
                )
            }
            <div className=''>
                {details?.comments?.length > 0 ? (
                    showComment.map((com,index)=>(
                        <div key={index} className='flex flex-col items-start'>
                            <h4>{com.name}</h4>
                            <p>{com.comment}</p>
                        </div>
                    ))
                ) : (
                    <p>No Comments Yet</p>
                )}
            </div>
        </div>
    </div>
  )
}

export default DetailNewsByUser