import React from 'react'
import Navbar from '../components/module/Navbar/Navbar'
import PageHeader from '../components/module/PageHeader/PageHeader'
import Overview from '../components/module/Overview/Overview'
import Footer from '../components/module/Footer/Footer'

function page() {
  return (
    <>
        <Navbar/>
        <PageHeader 
            title='تماس با ما'
            text='تماس با ما'
        />

        <Overview/>
        <Footer/> 
    </>
  )
}

export default page