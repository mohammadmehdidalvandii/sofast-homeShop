import React from 'react';
import style from './Footer.module.css';
import Link from 'next/link';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <section className={style.footer}>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <h4 className={style.footer_title}>درباره ما</h4>
                    <div className={style.footer_content}>
                        <p className={style.footer_content_desc}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <h4 className={style.footer_title}>لینک مفید</h4>
                    <ul className={style.footer_items}>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>حریم خصوصی</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>نقشه سایت</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>محل فروشگاه</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>اکانت من</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>پیگیری سفارشات</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>شرایط استفاده از خدمات</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <h4 className={style.footer_title}>پشتیبانی</h4>
                    <ul className={style.footer_items}>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>کمک</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>تماس با ما</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>بازخورد</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>خدمات مشتری</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>رزور</Link>
                        </li>
                        <li className={style.footer_item}>
                            <Link href='/' className={style.footer_item_link}>مکان فروشگاه</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <h4 className={style.footer_title}>تماس با ما</h4>
                    <div className={style.footer_box}>
                        <span className={style.footer_box_icon}><FaPhone/></span>
                        <div className={style.footer_box_content}>
                            <h6 className={style.footer_box_title}>تماس</h6>
                            <span className={style.footer_box_text}>021-233-3333</span>
                        </div>
                    </div>
                    <div className={style.footer_box}>
                        <span className={style.footer_box_icon}><MdEmail/></span>
                        <div className={style.footer_box_content}>
                            <h6 className={style.footer_box_title}>ایمیل</h6>
                            <span className={style.footer_box_text}>sofast@gamil.col</span>
                        </div>
                    </div>
                    <div className={style.footer_box}>
                        <span className={style.footer_box_icon}><FaInstagram/></span>
                        <div className={style.footer_box_content}>
                            <h6 className={style.footer_box_title}>اینستاگرام</h6>
                            <span className={style.footer_box_text}>sofast.ir</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer