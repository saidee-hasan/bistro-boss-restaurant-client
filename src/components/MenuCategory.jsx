import React from 'react';
import PropTypes from 'prop-types';
import MenuItems from './MenuItems';
import Cover from '../shared/Cover';
import { Link } from 'react-router-dom';

function MenuCategory({ items, title, img }) {
  return (
    <div>
      {/* Show Cover only if title exists, else display image without title */}
      {title ? (
        <Cover image={img} title="Our Menu" />
      ) : (
        <Cover image={img} title="Menu" />
      )}

      {/* Show items only if items are available */}
      {items.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-10 mt-16 pt-8">
          {items.map((item) => (
            <MenuItems key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-8 text-gray-500">No items available</p>
      )}

      {/* Order button */}
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 mt-8">
          Order
        </button>
      </Link>
    </div>
  );
}

MenuCategory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  img: PropTypes.string.isRequired,
};

MenuCategory.defaultProps = {
  title: '', // Default to an empty string if no title is provided
};

export default MenuCategory;
