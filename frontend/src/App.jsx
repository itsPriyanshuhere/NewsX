import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Headlines from "./components/Headlines";
import UserForum from "./components/UserForum";
import Profile from "./components/Profile";
import NewPost from "./components/NewPost";
import NoMatch from "./components/NoMatch";
import Navbar from "./containers/navbar";

export default function App() {
  return (
    <div className="bg-custom min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headlines" element={<Headlines />} />
        <Route path="/userforum" element={<UserForum />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
