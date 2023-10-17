import axios from "axios";
import { useEffect, useState } from "react";
import { server } from '../main';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Spinner from './Spinner.jsx';

const Headlines = () => {
  const [ans, setAns] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${server}/api/v1/top-article`).then(function (res) {
      setAns(res.data.articles);
      setLoading(false);
    })
  }, []);

  if(loading) return <Spinner message="Wait a sec while we fetch some top news for you"/>

  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {ans.map((headline, index) => (
            <div key={index} className="masonry-item ">
              <a href={headline.url} target="_blank" rel="noopener noreferrer">
                <div className="bg-white p-4 rounded-lg shadow-md ">
                  <div
                    className="bg-cover bg-center h-64 w-full rounded-lg mb-4 "
                    style={{
                      backgroundImage: `url(${headline.image})`,
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
  );
};

export default Headlines;
