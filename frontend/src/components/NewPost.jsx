import { server } from "../main";
import { useAuth } from "../context/auth";
import { useEffect, useState } from "react";
import axios from "axios";
import { Form, useNavigate } from "react-router-dom";

const NewPost = () => {

  const navigate = useNavigate();
  const [auth,setAuth] = useAuth();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [source, setSource] = useState('');
  const [photo,setPhoto] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const {res} = await axios.post(`${server}/api/v1/post-news`,{
        title,description,category,source,photo
      });
      alert("Successfully Posted!!!");
      navigate("/userforum");
    }catch(error) {
      alert(error);
    }
  }

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center">
      <div className="container mx-auto max-w-screen-sm">
        <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-red-500 mb-6">{ ` Hey ${auth?.user?.name || 'User'}, Have Something to Share?`}</h2>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full py-2 font-robotoMono px-3 border rounded-lg focus:ring focus:ring-red-500 text-black"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="w-full font-robotoMono py-2 px-3 border rounded-lg focus:ring focus:ring-red-500 text-black"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full py-2 px-3 border font-robotoMono rounded-lg focus:ring focus:ring-red-500 text-black"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-2">Image Link</label>
            <input
              type="text"
              id="photo"
              name="photo"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full py-2 px-3 border font-robotoMono rounded-lg focus:ring focus:ring-red-500 text-black"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-2">Source</label>
            <input
              type="text"
              id="source"
              name="source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full py-2 px-3 border font-robotoMono rounded-lg focus:ring focus:ring-red-500 text-black"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;