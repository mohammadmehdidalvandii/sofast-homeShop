import React from 'react'
import style from './BlogCard.module.css'
import Link from 'next/link';

function BlogCard() {
  return (
    <div className={style.blogCard}>
    <img src="/images/blog.jpg" alt="blog image" className={style.blogCard_img} />
    <div className={style.blogCard_content}>
        <span className={style.blogCard_date}>11 فروردین 1403</span>
        <p className={style.blogCard_desc}>سبک ها دلایلی برای ساخت هستند</p>
        <Link href='/' className={`${style.blogCard_link} ${"button"}`}>بیشتر</Link>
    </div>
</div>
  )
}

export default BlogCard