import React from 'react'
import Navbar from '../components/module/Navbar/Navbar'
import PageHeader from '../components/module/PageHeader/PageHeader'
import Overview from '../components/module/Overview/Overview'
import Footer from '../components/module/Footer/Footer'
import Products from '../components/template/Shop/Products/Products'
import { authUser } from '@/utils/auth'

async function page() {
  const user = await authUser();
  return (
    <>
    <Navbar isLogin={user ? true : false}/>
    <PageHeader title='فروشگاه' text='فروشگاه'/>
    <Products/>
    <Overview/>
    <Footer/>
    </>
  )
}

export default page