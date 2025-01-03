import React from 'react'
import App from '../App'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'

function MainLayout() {
  return (
    <div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
