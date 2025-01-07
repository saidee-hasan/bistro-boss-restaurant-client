import React, { useState } from 'react';
import Cover from '../shared/Cover';
import orderImg from "../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../hooks/useMenu';
import FoodCard from '../components/FoodCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Order() {
  const [menu, loading] = useMenu();
  const { category } = useParams();
  const categories = ['salad', 'pizza', 'soup', 'drinks', 'dessert'];
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex >= 0 ? initialIndex : 0); // Default to 0 if category is invalid

  // Filter menu items by category
  const dessert = menu.filter(item => item.category === "dessert");
  const soup = menu.filter(item => item.category === "soup");
  const salad = menu.filter(item => item.category === "salad");
  const pizza = menu.filter(item => item.category === "pizza");
  const drinks = menu.filter(item => item.category === "drinks");

  if (loading) {
    return <div className="text-center">Loading menu...</div>;
  }

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover image={orderImg} title='Order Food' />
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex justify-center space-x-2 md:space-x-4 mb-6 flex-wrap">

  <Tab>Salad</Tab>
  <Tab>Pizza</Tab>
  <Tab>Soup</Tab>
  <Tab>Dessert</Tab>
  <Tab>Drinks</Tab>

  
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-4 gap-10">
            {salad.map((item, idx) => (
              <FoodCard key={idx} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-4 gap-10">
            {pizza.map((item, idx) => (
              <FoodCard key={idx} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-4 gap-10">
            {soup.map((item, idx) => (
              <FoodCard key={idx} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-4 gap-10">
            {dessert.map((item, idx) => (
              <FoodCard key={idx} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-4 gap-10">
            {drinks.map((item, idx) => (
              <FoodCard key={idx} item={item} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Order;
