import React from 'react';
import Navbar from '../components/module/Navbar/Navbar';
import Overview from '../components/module/Overview/Overview';
import Footer from '../components/module/Footer/Footer';
import PageHeader from '../components/module/PageHeader/PageHeader';
import About from '../components/template/about/About/About';
import Teams from '../components/template/about/Teams/Teams';
import { authUser } from '@/utils/auth';


async function page() {
  const user = await authUser()
  return (
    <>
    <Navbar isLogin={user ?true : false}/>
    <PageHeader 
        title='درباره ما'
        text='درباره ما'
    />
    <About/>
    <Teams/>
    <Overview/>
    <Footer/>
    </>
  )
}

export default page