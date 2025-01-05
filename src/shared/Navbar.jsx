import React, { useState } from 'react';
// Make sure this is the correct path to the logo.
import Shop from "../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navOptions = (
    <>
      <li><a className="uppercase font-bold">Home</a></li>
      <li><a className="uppercase">Contact Us</a></li>
      <li><a className="uppercase">Dashboard</a></li>
      <li><a className="uppercase">Our Menu</a></li>
      <li><a className="uppercase">Our Shop</a></li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 max-w-screen-xl text-white bg-black bg-opacity-40 bg-base-100">
        {/* Left Section: Hamburger Menu and Logo */}
        <div className="navbar-start">
          {/* Mobile Hamburger Icon */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost"
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
          <div>
            <h3 className="font-bold text-2xl text-gray-300">BISTRO BOSS</h3>
            <h5 className="font-bold text-gray-300">Restaurant</h5>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>

        {/* Right Section: Cart and Profile */}
        <div className="navbar-end flex items-center">
          {/* Cart Icon */}
          <div className="dropdown dropdown-end flex items-center">
            <img className="w-10 cursor-pointer" src={Shop} alt="Cart" />
          </div>

          {/* Profile Avatar */}
          <div className="dropdown dropdown-end flex items-center ml-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr />
    </div>
  );
}

export default Navbar;
