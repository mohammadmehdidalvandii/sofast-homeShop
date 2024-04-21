import React from 'react';
import style from './Order.module.css';
import Link from 'next/link';

function Order() {
  return (
    <section className={style.order}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.order_item}>
                        <img src="/images/order-1.jpg" alt="order image" className={style.order_img} />
                        {/* <div className={style.order_content}>
                            <span className={style.order_text}>چیزی که میخوای رو انتخاب کن</span>
                            <h4 className={style.order_title}>تا 25% درصد تخفیف همین الان</h4>
                            <Link href='' className={style.order_link}>خرید</Link>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.order_item}>
                        <img src="/images/order-2.jpg" alt="order image" className={style.order_img} />
                        {/* <div className={style.order_content}>
                            <span className={style.order_text}>تخفیف عالی اینجا</span>
                            <h4 className={style.order_title}>بهترین پیشنهاد صندلی اداری</h4>
                            <Link href='' className={style.order_link}>خرید</Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Order