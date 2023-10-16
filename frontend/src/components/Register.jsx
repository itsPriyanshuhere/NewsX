import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { server } from '../main';

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [answer, setAnswer] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const {res} = await axios.post(`${server}/api/v1/register`,{
        name,email,password,answer
      });
      alert("Registered Successfully");
      navigate("/login");
    }catch(error) {
      alert(error);
    }
  };

  return (
    <div className='pb-28 lg:pb-2 xl:pb-8'>
        <section className="h-screen">
            <div className="h-full p-8">
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full" alt="Sample image" />
                    </div>
                    <div className="mb-12 md:mb-0 md:w-full lg:w-1/2 xl:w-1/2">
                    <form onSubmit={handleFormSubmit} className="bg-white p-4 md:p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-semibold text-red-500 mb-4 md:mb-6 text-center">
                        Register Yourself
                        </h2>
                        <div className="mb-3 md:mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full py-2 px-3 border rounded-lg focus:ring focus:ring-red-500 text-black"
                        />
                        </div>

                        <div className="mb-3 md:mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full py-2 px-3 border rounded-lg focus:ring focus:ring-red-500 text-black"
                        />
                        </div>

                        <div className="mb-3 md:mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full py-2 px-3 border rounded-lg focus:ring focus:ring-red-500 text-black"
                        />
                        </div>

                        <div className="mb-6 md:mb-8">
                        <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-2">
                            Your Favorite Sports Person
                        </label>
                        <input
                            type="text"
                            id="answer"
                            name="answer"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="w-full py-2 px-3 border rounded-lg focus:ring focus:ring-red-500 text-black"
                        />
                        </div>

                        <div className="text-center">
                        <button
                            type="submit"
                            className="w-full py-3 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
                        >
                            Register
                        </button>
                        </div>
                        <p className="mb-0 mt-2 pt-5 text-sm font-semibold text-black">
                            Already have an account? 
                        <Link to="/login" className="text-primary text-red-500 hover:underline"> Login Here</Link>
                        </p>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Register