/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Headlines from "./components/Top-Articles";
import UserForum from "./components/UserForum";
import Profile from "./components/Profile";
import NewPost from "./components/NewPost";
import NoMatch from "./components/NoMatch";
import Navbar from "./containers/navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useContext, useEffect } from "react";

import { Context,server } from "./main";
import axios from "axios";

export default function App() {

  const {user, setUser, setisAuthenticated} = useContext(Context);

  useEffect( () => {

    
    axios.get(`${server}/api/v1/user`, {
      withCredentials: true
    }).then( (res) =>{
      setUser(res.user);
      setisAuthenticated(true);

    }).catch((error) =>{
      setUser({});
      setisAuthenticated(false);

    })

  }, [])

  // console.log("inside the app", user)

  return (
    <div className="bg-custom min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-articles" element={<Headlines />} />
        <Route path="/userforum" element={<UserForum />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path='/sign-in' element={<SignIn />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
