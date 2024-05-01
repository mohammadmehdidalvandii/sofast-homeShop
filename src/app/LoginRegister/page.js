import React from 'react'
import Navbar from '../components/module/Navbar/Navbar'
import PageHeader from '../components/module/PageHeader/PageHeader'
import Overview from '../components/module/Overview/Overview'
import Footer from '../components/module/Footer/Footer'

function page() {
  return (
    <>
    <Navbar/>
    <PageHeader title='ورود / ثبت نام' text='ورود / ثبت نام'/>

    <Overview/>
    <Footer/>
    </>
  )
}

export default page