import React from 'react';
import style from './Overview.module.css';
import { FaTruckFast , FaGift } from "react-icons/fa6";
import { MdPayment, MdSupportAgent } from "react-icons/md";


function Overview() {
  return (
    <section className={style.overview}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={style.overview_wrapper}>
                        <div className={style.overview_box}>
                            <div className={style.overview_item}>
                                <span className={style.overview_icon}>
                                    <FaTruckFast/>
                                </span>
                                <div className={style.overview_content}>
                                    <h5 className={style.overview_title}>حمل و نقل رایگان</h5>
                                    <span className={style.overview_text}>سفارشات بالای ۶۰۰ هزار تومان</span>
                                </div>
                            </div>
                            <div className={style.overview_item}>
                                <span className={style.overview_icon}>
                                    <MdPayment/>
                                </span>
                                <div className={style.overview_content}>
                                    <h5 className={style.overview_title}>پرداخت سریع</h5>
                                    <span className={style.overview_text}>پرداخت ۱۰۰% مطمئن</span>
                                </div>
                            </div>
                            <div className={style.overview_item}>
                                <span className={style.overview_icon}>
                                    <FaGift />
                                </span>
                                <div className={style.overview_content}>
                                    <h5 className={style.overview_title}>گواهی هدیه</h5>
                                    <span className={style.overview_text}>اکنون ۱ میلیون بخرید</span>
                                </div>
                            </div>
                            <div className={style.overview_item}>
                                <span className={style.overview_icon}>
                                    <MdSupportAgent/>
                                </span>
                                <div className={style.overview_content}>
                                    <h5 className={style.overview_title}>پشتیبانی</h5>
                                    <span className={style.overview_text}>پشتیبانی سریع</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Overview