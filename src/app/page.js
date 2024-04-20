import React from 'react'
import Navbar from './components/module/Navbar/Navbar'
import Banner from './components/template/home/Banner/Banner'
import Trending from './components/template/home/Trending/Trending'

function page() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Trending/>
      <br /><br /><br /><br /><br /><br />
    </>
  )
}

export default page