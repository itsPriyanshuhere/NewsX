/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Context,server } from '../main'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const SignOut = () => {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [answer,setAnswer] = useState('');

  const { user, isAuthenticated, setisAuthenticated} = useContext(Context);

  const submitHandler = async (e) =>{
    e.preventDefault();
    try {
       await axios.post(`${server}/api/v1/register`,{
        name, email, password, answer
      },{
        headers:{
          "Content-Type": "application/json"
        },
        withCredentials: true,
      }
    );
    // toast.success(data.message);
    // console.log("inside the sign-up", user)
    setisAuthenticated(true);
    } catch (error) {
      toast.error(error.response.data.message);
      setisAuthenticated(false);
    }
    
};




if(isAuthenticated){
   return <Navigate to="/" />
}


  return (
    <div>
        <section className="h-screen">
 
  <div className="h-full">
    
    <div
      className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div
        className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="Sample image" />
      </div>


      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
        <form onSubmit={submitHandler}>

         

          <div
            className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
            value={name}
            onChange={(e) => setName(e.target.value)}
              type="text"
              className="peer text-white block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-white [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Name" />
            <label
              className="pointer-events-none text-white absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2. transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-white"
              >Name
            </label>
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="peer text-white block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-white [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Email address" />
            <label
              className="pointer-events-none text-white absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2. transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-white"
              >Email address
            </label>
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="peer text-white block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-white [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput22"
              placeholder="Password" />
            <label
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-white"
              >Password
            </label>
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
              type="text"
              className="peer text-white block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-white [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Question" />
            <label
              className="pointer-events-none text-white absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2. transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-white"
              >Question
            </label>
          </div>


          <div className="text-center lg:text-left">
            <button
              type="submit"
              className="inline-block rounded bg-red px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#ff0000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              Register
            </button>
            <p className="mb-0 mt-2 pt-5 text-sm font-semibold text-white">
              Already have an account? 
              <Link to="/sign-in" className="text-primary underline"> LogIn</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}


export default SignOut