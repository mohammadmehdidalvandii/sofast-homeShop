import React from 'react';
import style from './Product.module.css';
import Title from '@/app/components/module/Title/Title';
import Card from '@/app/components/module/Card/Card';

function Product() {
  return (
    <section className={style.product}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title title='محصولات انتخاب شده'/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Card/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Card/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Card/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Card/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Card/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Card/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Card/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Card/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Product