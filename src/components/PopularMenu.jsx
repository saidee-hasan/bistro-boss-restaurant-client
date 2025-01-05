import React, { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'
import MenuItems from './MenuItems'
import useMenu from '../hooks/useMenu'

export default function PopularMenu() {
const [menu,loading]=useMenu()
const popularItems = menu.filter(item=>item.category === "popular")

  return (
    <div>
      <SectionTitle  subHeading={"---Check it out---"} heading={"FROM OUR MENU"} />
<div className="grid md:grid-cols-2 gap-10 mt-5  p-2">
  {
    popularItems.map((item,idx)=> (<MenuItems item={item} key={idx}/>))
  }

</div>
     
    </div>
  )
}
