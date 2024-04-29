import React from 'react';
import style from './Banner.module.css'
import Link from 'next/link';

function Banner() {
  return (
    <section className={style.banner}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.banner_content}>
                        <span className={style.banner_content_text}>پیشنهاد بزرگ ۵۰% تخفیف</span>
                        <h1 className={style.banner_content_title}>مجموعه جدید فروش تابستانی</h1>
                        <p className={style.content_desc}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                        <Link href='/' className={`${style.banner_link} ${"button"}`}>خرید</Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/images/banner-img.png" alt="banner image" className={style.banner_img} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner