import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/auth';

function Navbar() {
  const [auth, setAuth] = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: '',
    });
    localStorage.removeItem('auth');
    toggleMenu();
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-4xl tracking-wide pr-4 font-thin border-r-2 text-white border-white">
          <NavLink to="/">News<span className="font-bold text-red-500">X</span></NavLink>
        </h1>
        {showMenu ? (
          <div className="flex flex-col items-center space-y-3 bg-white text-black p-4 absolute top-16 left-0 right-0 z-10">
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/top-articles" onClick={toggleMenu}>
              Top Articles
            </NavLink>
            <NavLink to="/userforum" onClick={toggleMenu}>
              Userforum
            </NavLink>
            {auth.user && (
              <NavLink to="/profile" onClick={toggleMenu}>
                Profile
              </NavLink>
            )}
            {!auth.user ? (
              <NavLink to="/login" onClick={toggleMenu}>
                Join Us
              </NavLink>
            ) : (
              <button onClick={handleLogout} >
                Logout
              </button>
            )}
            <NavLink to="/newpost" onClick={toggleMenu}>
              +
            </NavLink>
          </div>
        ) : (
          <div className="hidden sm:flex space-x-4">
          <nav>
            <div className="flex flex-row justify-between sm:flex sm:flex-column">
                <a href="/" className="pr-12 pt-5 text-xl font-thin transition ease-in-out text-white delay-100 drop-shadow-lg drop-shadow-red-500 hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover:shdaow-lg duration-300 ...">
                  <button>Home</button>
                </a>
                <a href="/top-articles" className="pr-12 pt-5 text-xl font-thin transition ease-in-out text-white delay-100 drop-shadow-lg drop-shadow-red-500 hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover:shdaow-lg duration-300 ...">
                  <button>Top Articles</button>
                </a>
                <a href="/userforum" className="pr-12 pt-5 text-xl font-thin transition ease-in-out text-white delay-100 drop-shadow-lg drop-shadow-red-500 hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover:shdaow-lg duration-300 ...">
                  <button>Userforum</button>
                </a>
                {auth.user && (
                  <a href="/profile" className="pr-12 pt-5 text-xl font-thin transition ease-in-out text-white delay-100 drop-shadow-lg drop-shadow-red-500 hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover:shdaow-lg duration-300 ...">
                    <button>Profile</button>
                  </a>
                )}
            {
            !auth.user ? 
            (<>
              <a href="/login" className="ml-28 pt-5 pr-6 text-xl font-thin transition ease-in-out text-white delay-100 drop-shadow-lg drop-shadow-red-500 hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover:shdaow-lg duration-300 ...">
                <button>Join Us</button>
              </a>
            </>) :
            (<>
              <a href="/login" className="pr-12 pt-5 text-xl font-thin transition ease-in-out text-white delay-100 drop-shadow-lg drop-shadow-red-500 hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover:shdaow-lg duration-300 ...">
                <button onClick={handleLogout}>Logout</button>
              </a>
            </>)
            }
              <a href="/newpost" className="pr-16 pt-3 text-4xl font-thin transition ease-in-out text-white delay-100 drop-shadow-lg drop-shadow-red-500 hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover:shdaow-lg duration-300 ...">
                  <button>+</button>
                </a>
            </div>
            </nav>
          </div>
        )}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;