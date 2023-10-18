import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../reusable/Navbar'
import Footer from '../reusable/Footer'

function Layout() {
  return (
    <div>
      <Navbar/>

      <Outlet/>
      
      <Footer/>
    </div>
  )
}

export default Layout
