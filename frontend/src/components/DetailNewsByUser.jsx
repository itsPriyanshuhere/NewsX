import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { server } from '../main';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdReportGmailerrorred } from 'react-icons/md';
import { FaRegCommentDots } from 'react-icons/fa';

const DetailNewsByUser = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [newComment, setNewComment] = useState('');
  const [showComment, setShowComment] = useState([]);
  const [showInputBox, setShowInputBox] = useState(false);
  const [likes, setLikes] = useState(details?.likes);
  const [reportNum, setReportNum] = useState(details?.report);

  const getNewsDetails = async () => {
    const res = await axios.get(`${server}/api/v1/newsdetails/${id}`);
    setDetails(res.data.newsDetails);
    setShowComment(res.data.newsDetails.comments);
    setLikes(res.data.newsDetails.likes);
    setReportNum(res.data.newsDetails.report);
  };

  useEffect(() => {
    getNewsDetails();
  }, [likes, reportNum, showComment]);

  const handleClick = () => {
    setShowInputBox(!showInputBox);
  };

  const handleLike = async () => {
    const res = await axios.get(`${server}/api/v1/likepost/${id}`);
    setLikes(res.data.updatedPost.likes);
  };

  const handleReport = async () => {
    const res = await axios.get(`${server}/api/v1/reportpost/${id}`);
    alert(res.data.message);
    setReportNum(res?.data?.updatedPost?.report);
  };

  const handleComment = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${server}/api/v1/newsbyuser/${id}`, { newComment });
    setShowComment(res.data.updatedPost.comments);
    setNewComment('');
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white h-auto lg:w-2/3 text-center border rounded-md shadow-lg p-4">
        <h2 className="text-3xl font-semibold text-red-500 mb-4">{details.title}</h2>
        <div className="p-4">
          <img
            className="object-cover w-full rounded-xl"
            src={details.photo}
            alt={details.title}
          />
        </div>
        <div className="px-8 py-2">
          <p className="text-lg font-thin">{details.description}</p>
        </div>
        <div className="flex justify-end items-center px-8 py-2 gap-4">
          <div className="flex items-center gap-1">
            <span className="text-2xl text-red-500">{likes}</span>
            <button onClick={handleLike} className="text-3xl text-red-500 hover:text-red-600">
              <AiOutlineHeart />
            </button>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-2xl text-blue-300">{details.comments?.length}</span>
            <button onClick={handleClick} className="text-3xl text-blue-300 hover:text-blue-400">
              <FaRegCommentDots />
            </button>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-2xl text-black">{reportNum}</span>
            <button onClick={handleReport} className="text-3xl text-black hover:text-red-500">
              <MdReportGmailerrorred />
            </button>
          </div>
        </div>
        {showInputBox && (
          <div className="flex items-center space-x-4 my-4">
            <input
              className="w-4/5 p-3 border rounded-2xl focus:border-gray-300"
              type="text"
              placeholder="Add a comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              onClick={handleComment}
              className="p-3 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
            >
              Comment
            </button>
          </div>
        )}
        <div>
          {details?.comments?.length > 0 ? (
            showComment.map((com, index) => (
              <div key={index} className="flex flex-col items-start border-t mt-4 pt-4">
                <h4 className="text-lg font-semibold">{com.name}</h4>
                <p className="text-base">{com.comment}</p>
              </div>
            ))
          ) : (
            <p className="text-base mt-4">No Comments Yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailNewsByUser;
