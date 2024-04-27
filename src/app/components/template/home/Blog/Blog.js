import React from 'react';
import style from './Blog.module.css';
import Title from '@/app/components/module/Title/Title';
import BlogCard from '@/app/components/module/BlogCard/BlogCard';


function Blog() {
  return (
    <section className={style.blog}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title title='وبلاگ'/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <BlogCard/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <BlogCard/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <BlogCard/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <BlogCard/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog