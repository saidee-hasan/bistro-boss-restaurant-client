import React, { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'
import MenuItems from './MenuItems'

export default function PopularMenu() {
const [menu,setMenu]=useState([])
  useEffect(()=>{
    fetch('../menu.json')
    .then(res=>res.json())
    .then(data=>{
      const popularItems = data.filter(item=>item.category === "popular")
 setMenu(popularItems)
    })

  },[])
  return (
    <div>
      <SectionTitle  subHeading={"---Check it out---"} heading={"FROM OUR MENU"} />
<div className="">
  {
    menu.map((item,idx)=> (<MenuItems item={item} idx={idx}/>))
  }

</div>
     
    </div>
  )
}
