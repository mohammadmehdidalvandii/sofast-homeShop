import React from 'react';
import style from './Details.module.css';

function Details() {
  return (
    <section className={style.details}>
        <h5 className={style.details_title}>جزئیات حساب</h5>
        <ul className={style.details_items}>
            <li className={style.details_item}>
                <span className={style.details_item_title}>اطلاعات شخصی</span>
            </li>
            <li className={style.details_item}>
                <span className={style.details_item_text}>نام :</span>
                <span className={style.details_item_txt}>مهدی</span>
            </li>
            <li className={style.details_item}>
            <span className={style.details_item_text}>نام خانوادگی :</span>
                <span className={style.details_item_txt}>اخلاقی</span>
            </li>
            <li className={style.details_item}>
            <span className={style.details_item_text}>تلفن :</span>
                <span className={style.details_item_txt}>0912345678</span>
            </li>
            <li className={style.details_item}>
            <span className={style.details_item_text}>ایمیل :</span>
                <span className={style.details_item_txt}>mehdi@gmail.com</span>
            </li>
            <li className={style.details_item}>
                <button className={style.details_item_edit}>ویرایش</button>
            </li>
        </ul>
    </section>
  )
}

export default Details