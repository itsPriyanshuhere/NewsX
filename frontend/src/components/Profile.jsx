import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../main";
import { useAuth } from "../context/auth";
import Spinner from "./Spinner";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [auth] = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const randomImage =
    "https://source.unsplash.com/1600x900/?nature,photography,technology,water,food,travel";

  const [ans, setAns] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`${server}/api/v1/userpostednews`).then(function (res) {
      setAns(res.data);
      setUserPosts(res.data.userId.post);
      setLoading(false);
    });
  }, [auth.user]);

  if(loading) return <Spinner message="Your details are on the way" />

  const handleClick = (id) => {
    navigate(`/user-news/${id}`)
  }

  return (
    <div className="bg-black p-4 text-white min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <img
          src={randomImage}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <h2 className="text-3xl font-bold mt-4">{ans?.userId?.name}</h2>
        <p className="text-xl">{ans?.userId?.email}</p>
      </div>

      <div className="mt-8 w-full max-w-4/5">
        <h3 className="text-2xl font-bold text-center mb-4">User Posts</h3>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {userPosts.map((headline, index) => (
            <div onClick={()=>handleClick(headline._id)} key={index} className="masonry-item ">
              <a href={headline.url} target="_blank" rel="noopener noreferrer">
                <div className="bg-white p-4 rounded-lg shadow-md ">
                  <div
                    className="bg-cover bg-center h-64 w-full rounded-lg mb-4 "
                    style={{
                      backgroundImage: `url(${headline.photo})`,
                    }}
                  ></div>
                  <h2 className="text-xl font-bold mb-2">{headline.title}</h2>
                  <p className="text-gray-700">{headline.description}</p>
                </div>
              </a>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Profile;