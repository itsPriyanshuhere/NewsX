import { useAuth } from "../context/auth"
import BreakingNews from "./BreakingNews";
import Category from "./Category";
import Footer from "./Footer";
import HotNews from "./HotNews";

const Home = () => {

  const [auth,setAuth] = useAuth();

  return (
    <div className="text-white">
      <BreakingNews />
      <Category />
      <HotNews />
      <Footer /> 
    </div>
    
  )
}

export default Home