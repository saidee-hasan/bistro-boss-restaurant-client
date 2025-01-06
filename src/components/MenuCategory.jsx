import React from 'react';
import PropTypes from 'prop-types';
import MenuItems from './MenuItems';
import Cover from '../shared/Cover';

function MenuCategory({ items, title, img }) {
  return (
    <div>
      {title && <Cover image={img} title="Our Menu" />}
      <div className="grid md:grid-cols-2 gap-10 mt-16 pt-8">
        {items.map((item) => (
          <MenuItems key={item.id} item={item} /> 
        ))}
      </div>
    </div>
  );
}

MenuCategory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  img: PropTypes.string.isRequired,
};

export default MenuCategory;