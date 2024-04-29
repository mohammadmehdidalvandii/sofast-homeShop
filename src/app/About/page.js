import React from 'react';
import Navbar from '../components/module/Navbar/Navbar';
import Overview from '../components/module/Overview/Overview';
import Footer from '../components/module/Footer/Footer';
import PageHeader from '../components/module/PageHeader/PageHeader';
import About from '../components/template/about/About/About';

function page() {
  return (
    <>
    <Navbar/>
    <PageHeader 
        title='درباره ما'
        text='درباره ما'
    />
    <About/>
    <Overview/>
    <Footer/>
    </>
  )
}

export default page