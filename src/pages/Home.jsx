import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Category from '../components/Category'
import ChefService from '../components/ChefService'
import PopularMenu from '../components/PopularMenu'
import Call from '../components/Call'
import Card from '../components/Card'
import Featured from '../components/Featured'





function Home() {
 

  
  return (
    <div>
      <Banner/>
 <Category/>
 <ChefService/>
 <PopularMenu/>
<Call/>
<Card/>
<Featured/>
    </div>
  )
}

export default Home
