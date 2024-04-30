import React from 'react';
import style from './ContactUs.module.css';
import Title from '@/app/components/module/Title/Title';
import { FaRegMap , FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


function ContactUs() {
  return (
    <section className={style.contactUs}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title
                        title='درتماس باشید'
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className={style.contactUs_item}>
                        <span className={style.contactUs_item_icon}><FaRegMap/></span>
                        <div className={style.contactUs_item_content}>
                            <h5 className={style.contactUs_item_title}>نشانی</h5>
                            <span className={style.contactUs_item_text}>تهران زعفرانیه</span>
                            <span className={style.contactUs_item_text}>تهران سعادت اباد</span>
                        </div>
                    </div>
                    <div className={style.contactUs_item}>
                        <span className={style.contactUs_item_icon}><FaPhoneAlt/></span>
                        <div className={style.contactUs_item_content}>
                            <h5 className={style.contactUs_item_title}>تلفن</h5>
                            <span className={style.contactUs_item_text}>021-2341033</span>
                            <span className={style.contactUs_item_text}>021-2341033</span>
                        </div>
                    </div>
                    <div className={style.contactUs_item}>
                        <span className={style.contactUs_item_icon}><IoMail/></span>
                        <div className={style.contactUs_item_content}>
                            <h5 className={style.contactUs_item_title}>اینستاگرام</h5>
                            <span className={style.contactUs_item_text}>sofast_ir</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <img src="/images/map.png" alt="contact-image" className={style.contactUs_img} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs