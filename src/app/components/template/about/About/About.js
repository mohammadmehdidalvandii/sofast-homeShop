import React from 'react';
import style from './About.module.css';

function About() {
  return (
    <section className={style.about}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.about_images}>
                        <img src="/images/about-1.jpg" alt="about image" className={style.about_img} />
                        <img src="/images/about-2.jpg" alt="about image" className={style.about_img} />

                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.about_content}>
                        <h2 className={style.about_title}>خرید خود لذت ببرید</h2>
                        <p className={style.about_desc}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                        <h5 className={style.about_minTitle}>بررسی اجمالی اورکسون</h5>
                        <p className={style.about_desc}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                        <h5 className={style.about_minTitle}>ماموریت ما</h5>
                        <p className={style.about_desc}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About