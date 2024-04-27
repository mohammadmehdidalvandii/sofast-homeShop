import React from 'react'
import Navbar from './components/module/Navbar/Navbar'
import Banner from './components/template/home/Banner/Banner'
import Trending from './components/template/home/Trending/Trending'
import Product from './components/template/home/Product/Product'
import Order from './components/template/home/Order/Order'
import Score from './components/template/home/Score/Score'
import Comments from './components/template/home/Comments/Comments'

function page() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Trending/>
      <Product/>
      <Order/>
      <Score/>  
      <Comments/>
      <br /><br /><br /><br /><br /><br />
    </>
  )
}

export default page