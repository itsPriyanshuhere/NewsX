import { NavLink } from 'react-router-dom';
import {useAuth} from '../context/auth';

function Navbar() {

  const [auth,setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user:null,
      token:""
    });
    localStorage.removeItem("auth");
  }

  return (
    <nav>
    <div className="flex flex-row pl-5 pt-3 justify-between sm:flex sm:flex-column">
      <h1 className="text-4xl tracking-wide font-thin border-r-2 border-double text-white p-4 border-black"><NavLink to="/">News<span className="font-bold text-white">X</span></NavLink></h1>
      <div className="flex flex-row justify-around pr-96">
      <button className="pr-12  text-lg font-thin  transition ease-in-out text-white delay-100 drop-shadow-lg drop-shadow-red-500  hover:-translate-y-1 hover:scale-110 hover:text-red-500  hover: shdaow-lg  duration-300 ..."><NavLink to="/">Home</NavLink></button>
      <button className="pr-12  text-lg font-thin transition ease-in-out text-white delay-100 drop-shadow-lg drop-shadow-red-500  hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover: shdaow-lg  duration-300 ..."><NavLink to="/top-articles">Top Articles</NavLink></button>
      <button className="pr-12  text-lg font-thin transition ease-in-out text-white delay-100 drop-shadow-lg drop-shadow-red-500  hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover: shdaow-lg  duration-300 ..."><NavLink to="/userforum">Userforum</NavLink></button>
      {auth.user && (
        <button className="pr-12  text-lg font-thin transition ease-in-out text-white delay-100 drop-shadow-lg drop-shadow-red-500  hover:-translate-y-1 hover:scale-110 hover:text-red-500  hover: shdaow-lg  duration-300 ..."><NavLink to="/profile">Profile</NavLink></button>
      )}
      
      </div>
      {
        !auth.user ? 
        (<>
          <button className="pr-12 text-2xl hover:text-red-500 font-thin text-white hover:pb-2"><NavLink to="sign-in">Join Us</NavLink></button> 
        </>) :
        (<>
          <button onClick={handleLogout} className=" text-xl hover:text-red-500 font-thin text-white hover:pb-2"><NavLink to="sign-in">Logout</NavLink></button> 
        </>)
      }
      <button className="pr-12 text-4xl hover:text-red-500 font-thin text-white hover:pb-2"><NavLink to="newpost">+</NavLink></button>
    </div>
    </nav>
  )
}

export default Navbar

