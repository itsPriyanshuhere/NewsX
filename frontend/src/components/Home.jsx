import { useAuth } from "../context/auth"
import BreakingNews from "./BreakingNews";
import Category from "./Category";

const Home = () => {

  const [auth,setAuth] = useAuth();

  return (
    <div className="text-white">
      <BreakingNews />
      <Category />

    </div>
    
  )
}

export default Home