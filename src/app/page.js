import React from 'react'
import Navbar from './components/module/Navbar/Navbar'
import Banner from './components/template/home/Banner/Banner'
import Trending from './components/template/home/Trending/Trending'
import Product from './components/template/home/Product/Product'
import Order from './components/template/home/Order/Order'
import Score from './components/template/home/Score/Score'
import Comments from './components/template/home/Comments/Comments'
import Blog from './components/template/home/Blog/Blog'
import Overview from './components/module/Overview/Overview'
import Footer from './components/module/Footer/Footer'
import { authUser } from '@/utils/auth'

async function page() {
  const user = await authUser();
  return (
    <>
      <Navbar isLogin={user ? true :false}/>
      <Banner/>
      <Trending/>
      <Product/>
      <Order/>
      <Score/>  
      <Comments/>
      <Blog/>
      <Overview/>
      <Footer/>
    </>
  )
}

export default page