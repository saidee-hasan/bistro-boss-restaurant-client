import React from "react";
import { FaBook, FaCalendar, FaEnvelope, FaHome, FaICursor, FaList, FaMenorah, FaShoppingCart } from "react-icons/fa";
import { FaVoicemail } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

function Dashboard() {
  // get is admin value for database
  const [isAdmin ]= useAdmin();

  return (
    <div className="flex">
      <div className="w-64 bg-orange-500 min-h-screen">
        <ul className="menu">/addItems

          {
            isAdmin ?
            <>
            <li>
            <NavLink to={"/dashboard/adminHome"}>
              {" "}
              <FaHome />
             Admin Home{" "}
            </NavLink>

            <NavLink to={"/dashboard/AddItems"}>
              {" "}
              <FaCalendar /> Add Items
            </NavLink>
            <NavLink to={"manageItems"}>
           
           <FaBook /> Manage Items
         </NavLink>
            
            <NavLink to={"/dashboard/cart"}>
              {" "}
              <FaList /> Manage Cart
            </NavLink>

            <NavLink to={"users"}>
           
              <FaICursor /> All Users
            </NavLink>
        
       

          </li></>:null
          }
      
          {/* Shgere nav */}
          <div className="divider"> </div>
<li>  <NavLink to={"/"}>
           
           <FaBook /> Home
         </NavLink></li>
<li>  <NavLink to={"/"}>
           
           <FaEnvelope /> Contact
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
