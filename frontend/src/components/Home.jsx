import { useAuth } from "../context/auth"
import BreakingNews from "./BreakingNews";

const Home = () => {

  const [auth,setAuth] = useAuth();

  return (
    <div className="text-white">
      <BreakingNews />
    </div>
    
  )
}

export default Home