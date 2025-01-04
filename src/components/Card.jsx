import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';

function Card() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('../menu.json')
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === 'dessert');
        setMenu(popularItems);
      });
  }, []);

  // Handle Add to Cart
  const handleAddToCart = (item) => {
    console.log(`${item.name} added to the cart!`);
    // Here you could implement the functionality to add the item to a cart array in the state
  };

  return (
    <div className='mt-5'>
      <SectionTitle subHeading={"---Should Try---"} heading={"CHEF RECOMMENDS"} />
      <div className="flex flex-wrap justify-center gap-8 mt-5">
        {/* Iterate through the first 3 items of the menu */}
        {menu.slice(0, 3).map((card) => (
          <div
            key={card._id}
            className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg"
          >
            <img
              src={card.image}
              alt={card.name}
              className="rounded-t-lg w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{card.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{card.recipe}</p>
              <p className="text-xl font-bold text-gray-900 mt-4">${card.price.toFixed(2)}</p>
              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(card)}
                className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
