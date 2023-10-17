/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Headlines from "./components/Top-Articles";
import UserForum from "./components/UserForum";
import Profile from "./components/Profile";
import NewPost from "./components/NewPost";
import NoMatch from "./components/NoMatch";
import Navbar from "./containers/navbar";
import DetailNewsByUser from "./components/DetailNewsByUser";
import Register from "./components/Register";
import Login from "./components/Login";
import CategoryNews from "./components/CategoryNews";

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
        <Route path="/category/:keyword" element={<CategoryNews />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-news/:id" element={<DetailNewsByUser />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}