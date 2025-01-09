import React from "react";
import { FaBook, FaCalendar, FaHome, FaICursor, FaMenorah, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex">
      <div className="w-64 bg-orange-500 min-h-screen">
        <ul className="menu">
          <li>
            <NavLink to={"/dashboard/userHome"}>
              {" "}
              <FaHome />
              User Home{" "}
            </NavLink>

            <NavLink to={"/dashboard/reservation"}>
              {" "}
              <FaCalendar /> Reservation
            </NavLink>
            
            <NavLink to={"/dashboard/cart"}>
              {" "}
              <FaShoppingCart /> My Cart
            </NavLink>

            <NavLink to={"/dashboard/review"}>
           
              <FaICursor /> Review
            </NavLink>
            <NavLink to={"/dashboard/booking"}>
           
              <FaBook /> My Booking
            </NavLink>
       

          </li>
          <div className="divider"> </div>
<li>  <NavLink to={"/"}>
           
           <FaBook /> Home
         </NavLink></li>
<li>  <NavLink to={"/dashboard/menu"}>
           
           <FaMenorah /> Menu
         </NavLink></li>
        
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
