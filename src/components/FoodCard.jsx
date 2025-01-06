import React from 'react';

function FoodCard({ item }) {
  const { name, image, price, recipe } = item;

  return (
    <div className="">
      <div className="card bg-base-100 h-96 shadow-xl transition-transform transform hover:scale-105">
        <figure className="h-48 overflow-hidden relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-38 rounded-md object-cover" 
            onError={(e) => { e.target.src = 'path/to/fallback-image.jpg'; }} // Fallback image
          />
          <p className="text-lg font-bold absolute right-0 mr-4 mb-20 bg-white bg-opacity-75 px-2 rounded">${price}</p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-sm text-gray-600">{recipe}</p> {/* Optional: Display recipe or description */}
          <div className="card-actions justify-center">
            <button 
              className="btn btn-outline bg-slate-100 border-cyan-500 border-0 border-b-4 mt-4 hover:bg-cyan-500 hover:text-white transition duration-300 transform hover:scale-105" 
              aria-label={`Buy ${name} for $${price}`}
            >
             Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;