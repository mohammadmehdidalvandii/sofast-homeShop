import React from 'react'
import Navbar from '../components/module/Navbar/Navbar'
import PageHeader from '../components/module/PageHeader/PageHeader'
import Overview from '../components/module/Overview/Overview'
import Footer from '../components/module/Footer/Footer'
import WishlistCard from '../components/module/WishlistCard/WishlistCard'

function page() {
  return (
    <>
    <Navbar/>
    <PageHeader title='علاقه مندی' text='علاقه مندی'/>
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <WishlistCard/>
                </div>
            </div>
        </div>
    <Overview/>
    <Footer/>
    </>
  )
}

export default page