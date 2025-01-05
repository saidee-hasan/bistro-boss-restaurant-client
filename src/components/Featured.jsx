import React from "react";
import SectionTitle from "./SectionTitle";
import featuredImg from "../assets/home/featured.jpg";

function Featured() {
  return (
    <div
      className="bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      <div className="bg-black bg-opacity-30 w-full h-full flex justify-center items-center px-4 sm:px-8">
        <div className="text-white text-center md:text-left px-6 py-10 max-w-screen-xl mx-auto">
          <SectionTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}
          />
          <br />
          <div className="md:flex bg-slate-200 bg-opacity-10  bg-fixed  justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Image Section */}
            <div className="md:w-1/2 w-full">
              <img
                src={featuredImg}
                alt="Featured"
                className="w-full h-52 md:h-auto object-cover rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
              />
            </div>
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
              <p className="text-xl font-semibold text-gray-300">Aug 20 2026</p>
              <p className="uppercase font-bold text-xl md:text-3xl text-orange-400 mt-4">
                WHERE CAN I GET SOME?
              </p>
              <p className="mt-4 text-lg text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                <span className="hidden md:block">
                  voluptate facere, deserunt dolores maiores quod nobis quas
                  quasi. Eaque repellat recusandae ad laudantium tempore
                  consequatur consequuntur omnis ullam maxime tenetur.
                </span>
              </p>
              <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
