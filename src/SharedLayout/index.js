import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


const SharedLayout = () => {
  return (
    <>
      <Header/>
      <main>
        <div className="main-overlay"></div>
        <Outlet/>{/* passes the children */}
      </main> 
      <Footer/>
    </>
  )
}

export default SharedLayout