import React from 'react'
import Navbar from '../components/module/Navbar/Navbar'
import PageHeader from '../components/module/PageHeader/PageHeader'
import Overview from '../components/module/Overview/Overview'
import Footer from '../components/module/Footer/Footer'
import ContactUs from '../components/template/contact/ContactUs/ContactUs'

function page() {
  return (
    <>
        <Navbar/>
        <PageHeader 
            title='تماس با ما'
            text='تماس با ما'
        />
        <ContactUs/>
        <Overview/>
        <Footer/> 
    </>
  )
}

export default page