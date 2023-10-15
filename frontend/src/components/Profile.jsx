
import { useAuth } from "../context/auth"


const Profile = () => {

  const [auth,setAuth] = useAuth();

  console.log(auth?.user?.name);

  return (
    <div className="text-white">
      Profile    </div>
  )
}

export default Profile