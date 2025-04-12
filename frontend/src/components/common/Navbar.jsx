import React, { useEffect, useState } from 'react'
import {initKeycloak, logOut, login} from '../../service/KeycloakService.js'

function Navbar() {

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    initKeycloak(() => {
      setAuthenticated(true);
    });
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    login();
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    logOut();
    setAuthenticated(false);
  }

  return (
    <>
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-600">Learn Easy</div>
        <div className="space-x-6">
          <a href="#" className="hover:text-indigo-600">Home</a>
          <a href="#" className="hover:text-indigo-600">Courses</a>
          <a href="#" className="hover:text-indigo-600">About</a>
          {
            authenticated ? 
            <button onClick={handleLogOut} className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-500 cursor-pointer">
              Logout
            </button>
          : <button onClick={handleSignIn} className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-500 cursor-pointer">
              Sign In
            </button>
          }
        </div>
      </nav>
    </>
  )
}


export default Navbar