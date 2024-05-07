import React from 'react';
import Navbar from '../components/module/Navbar/Navbar';
import Overview from '../components/module/Overview/Overview';
import Footer from '../components/module/Footer/Footer';
import Users from '../components/template/account/Users/Users';

function page() {
  return (
   <>
    <Navbar/>
    <Users/>
    <Overview/>
    <Footer/>
   </>
  )
}

export default page