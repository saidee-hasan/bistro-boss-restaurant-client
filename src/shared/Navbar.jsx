import React, { useContext, useState } from 'react';
// Make sure this is the correct path to the logo.
import Shop from"../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png"
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useParams } from 'react-router-dom';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const {user,signOutUser} = useContext(AuthContext)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
const id = useParams()
console.log(id)
  const navOptions = (
    <>
      <li><a className='uppercase font-bold' href='/'>Home</a></li>
      <li><a className='uppercase'>Contact Us</a></li>

      <li><a className='uppercase'>Dashboard</a></li>
      <li><a href='/menu'  className='uppercase'> Our Menu</a></li>
      <li><Link to={`/order/${id}`} className='uppercase'>Our Shop</Link></li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 max-w-screen-xl text-white bg-black bg-opacity-50 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navOptions}
              </ul>
            )}
          </div>

          {/* Logo and Restaurant Name */}
          <div className="flex items-center">
          
            <div>
              <h3 className="font-bold text-2xl text-gray-300">BISTRO BOSS</h3>
              <h5 className="font-bold text-gray-300">Restaurant</h5>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end text-bl">
        <div className="dropdown dropdown-end  flex items-center ml-4">
          <img className='w-10' src={Shop} alt="" />
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          
          <img
            alt="Tailwind CSS Navbar component"
            src={user?.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-40 text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a href='/profile' className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a href='/setting'>Settings</a></li>
        {
                user ? 
                  <li><a onClick={() => signOutUser()}>Logout</a></li> 
                  : <li><a href='/register'>Login</a></li>
              }
      </ul>
    </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
