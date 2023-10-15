import axios from "axios";
import { useEffect, useState } from "react";
import { server } from '../main';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";

const UserForum = () => {
  const [ans, setAns] = useState([]);

  useEffect(() => {
    axios.get(`${server}/api/v1/allpostednews`).then(function (res) {
      setAns(res.data.news);
    })
  }, []);

  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {ans.map((newsPost, index) => (
            <Link to={`/user-news/${newsPost._id}`}>
              <div key={index} className="masonry-item ">
                <a href={newsPost.url} target="_blank" rel="noopener noreferrer">
                  <div className="bg-white p-4 rounded-lg shadow-md ">
                    <div
                      className="bg-cover bg-center h-64 w-full rounded-lg mb-4 "
                      style={{
                        backgroundImage: `url(${newsPost.photo})`,
                      }}
                    ></div>
                    <h2 className="text-xl font-bold mb-2">{newsPost.title}</h2>
                    <p className="text-gray-700">{newsPost.description}</p>
                  </div>
                </a>
              </div>
            </Link>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default UserForum;
