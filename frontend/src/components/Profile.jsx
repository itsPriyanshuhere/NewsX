import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../main";
import { useAuth } from "../context/auth";
import Spinner from "./Spinner";

const Profile = () => {
  const [auth] = useAuth();
  const [loading, setLoading] = useState(false);

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

      <div className="mt-8 w-full max-w-4xl">
        <h3 className="text-2xl font-bold text-center mb-4">User Posts</h3>
        <div className="flex flex-wrap -mx-4">
          {userPosts.map((Users) => (
            <div key={Users._id} className="w-1/2 p-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="bg-cover bg-center h-64 w-full rounded-lg mb-4">
                  <img src={randomImage} alt="Post" />
                </div>
                <h2 className="text-xl font-bold mb-2">{Users?.title}</h2>
                <p className="text-gray-700">{Users?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;