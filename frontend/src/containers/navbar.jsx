import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
    <div className="flex flex-row pl-5 pt-3 justify-between">
      <h1 className="text-4xl tracking-wide font-thin border-r-2 border-double p-4 border-black"><NavLink to="/">News<span className="font-bold">X</span></NavLink></h1>
      <div className="flex flex-row justify-around pr-96">
      <button className="pr-12  text-lg font-thin  transition ease-in-out delay-100 drop-shadow-lg drop-shadow-red-500  hover:-translate-y-1 hover:scale-110 hover:text-red-500  hover: shdaow-lg  duration-300 ..."><NavLink to="/">HOME</NavLink></button>
      <button className="pr-12  text-lg font-thin transition ease-in-out delay-100 drop-shadow-lg drop-shadow-red-500  hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover: shdaow-lg  duration-300 ..."><NavLink to="/headlines">HEADLINES</NavLink></button>
      <button className="pr-12  text-lg font-thin transition ease-in-out delay-100 drop-shadow-lg drop-shadow-red-500  hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover: shdaow-lg  duration-300 ..."><NavLink to="/userforum">USERFORUM</NavLink></button>
      <button className="pr-12  text-lg font-thin transition ease-in-out delay-100 drop-shadow-lg drop-shadow-red-500  hover:-translate-y-1 hover:scale-110 hover:text-red-500  hover: shdaow-lg  duration-300 ..."><NavLink to="/profile">PROFILE</NavLink></button>
      
      </div>
      <button className="pr-12 text-4xl hover:text-red-500 hover:pb-2"><NavLink to="newpost">+</NavLink></button>
    </div>
    </nav>
  )
}

export default Navbar