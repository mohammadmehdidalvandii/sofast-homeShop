"use client";
import React from 'react'
import Navbar from '../components/module/Navbar/Navbar'
import PageHeader from '../components/module/PageHeader/PageHeader'
import Overview from '../components/module/Overview/Overview'
import Footer from '../components/module/Footer/Footer'
import Login from '../components/template/loginRegister/Login/Login'
import Register from '../components/template/loginRegister/Register/Register'

function page() {
  return (
    <>
    <Navbar/>
    <PageHeader title='ورود / ثبت نام' text='ورود / ثبت نام'/>
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <Login/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                   <Register/>
                </div>
            </div>
        </div>
    <Overview/>
    <Footer/>
    </>
  )
}

export default page