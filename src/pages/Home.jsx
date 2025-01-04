import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Category from '../components/Category'
import ChefService from '../components/ChefService'
import PopularMenu from '../components/PopularMenu'





function Home() {
  const [menu,setMenu]=useState([])

  useEffect(()=>{
  fetch('../menu.json')
  .then(res=>res.json())
  .then(data=>{
    const popularItems = data.filter(item=>item.category === 'popular')
   setMenu(popularItems)
  })


  },[])
  console.log(menu)
  return (
    <div>
      <Banner/>
 <Category/>
 <ChefService/>
 <PopularMenu/>
 <div className="">
  {
    menu.map(item=>{})
  }


 </div>
    </div>
  )
}

export default Home
