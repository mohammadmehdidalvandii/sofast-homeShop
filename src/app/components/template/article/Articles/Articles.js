import React from 'react';
import style from './Articles.module.css'
import Title from '@/app/components/module/Title/Title';
import BlogCard from '@/app/components/module/BlogCard/BlogCard';

function Articles() {
  return (
    <section className={style.articles}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title title='مقالات'/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <BlogCard/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <BlogCard/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <BlogCard/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <BlogCard/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <BlogCard/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Articles