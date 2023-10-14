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

export default function App() {

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
