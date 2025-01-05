import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MenuImg from "../assets/menu/banner3.jpg"
import Cover from '../shared/Cover';
import PopularMenu from '../components/PopularMenu';
function Menu() {
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover image={MenuImg} title={"Our Menu"}/>
        <PopularMenu/>

        
      
    </div>
  )
}

export default Menu
