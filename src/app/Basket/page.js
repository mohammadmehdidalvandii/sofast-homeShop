import React from 'react';
import Navbar from '../components/module/Navbar/Navbar';
import PageHeader from '../components/module/PageHeader/PageHeader';
import Overview from '../components/module/Overview/Overview';
import Footer from '../components/module/Footer/Footer';
import Basket from '../components/template/Basket/Basket';

async function page() {
  const user = await authUser();
  return (
    <>
    <Navbar isLogin={user ? true :false}/>
    <PageHeader title='سبد خرید' text='سبد خرید'/>
    <Basket/>
    <Overview/>
    <Footer/>
    </>
  )
}

export default page