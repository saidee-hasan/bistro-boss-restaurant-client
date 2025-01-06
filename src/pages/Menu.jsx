import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MenuImg from "../assets/menu/banner3.jpg"
import DessertImg from "../assets/menu/dessert-bg.jpeg"
import SaladImg from "../assets/menu/salad-bg.jpg"
import SoupImg from "../assets/menu/soup-bg.jpg"
import Pizza from "../assets/menu/pizza-bg.jpg"
import Cover from '../shared/Cover';
import PopularMenu from '../components/PopularMenu';
import useMenu from '../hooks/useMenu';
import MenuCategory from '../components/MenuCategory';
function Menu() {
  const [menu,loading]=useMenu()
const dessert = menu.filter(item=>item.category === "dessert")
const soup = menu.filter(item=>item.category === "soup")
const salad = menu.filter(item=>item.category === "salad")
const pizza = menu.filter(item=>item.category === "pizza")
const offered = menu.filter(item=>item.category === "offered")
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Menu</title>
        </Helmet>
       {/* main cover */}
   
        {/* offered */}
        <MenuCategory items={offered} img={MenuImg} title="Our Menu"/>
        <SectionTitle subHeading={'Dont Miss Today Offer'}/>
   {/* dessert */}
   <MenuCategory items={salad} img={SaladImg} title="Salad"  />
   <MenuCategory items={dessert} img={DessertImg} title="Dessert"  />
   <MenuCategory items={soup} img={SoupImg} title="Soup"  />
   <MenuCategory items={pizza} img={Pizza} title="Pizza"  />

        
      
    </div>
  )
}

export default Menu
