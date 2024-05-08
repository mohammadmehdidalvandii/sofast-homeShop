import React from 'react';
import style from './Address.module.css';

function Address() {
  return (
    <section className={style.address}>
        <h4 className={style.address_title}>نشانی های شما</h4>
        <div className={style.address_wrapper}>
            <div className={style.address_item}>
                <h6 className={style.address_item_title}>آدرس پیش فرض</h6>
                <p className={style.address_item_text}>قم, پردیسان کوچه 12 پلاک 51 زنگ دوم</p>
                <div className={style.address_item_buttons}>
                    <button className={`${style.address_item_btn} ${"button"}`}>ویرایش</button>
                    <button className={`${style.address_item_btn} ${"button"}`}>حذف</button>
                </div>
            </div>
            <div className={style.address_item}>
                <h6 className={style.address_item_title}>آدرس پیش فرض</h6>
                <p className={style.address_item_text}>قم, پردیسان کوچه 12 پلاک 51 زنگ دوم</p>
                <div className={style.address_item_buttons}>
                    <button className={`${style.address_item_btn} ${"button"}`}>ویرایش</button>
                    <button className={`${style.address_item_btn} ${"button"}`}>حذف</button>
                </div>
            </div>
            <div className={style.address_item}>
                <h6 className={style.address_item_title}>آدرس پیش فرض</h6>
                <p className={style.address_item_text}>قم, پردیسان کوچه 12 پلاک 51 زنگ دوم</p>
                <div className={style.address_item_buttons}>
                    <button className={`${style.address_item_btn} ${"button"}`}>ویرایش</button>
                    <button className={`${style.address_item_btn} ${"button"}`}>حذف</button>
                </div>
            </div>
            <div className={style.address_item}>
                <h6 className={style.address_item_title}>آدرس پیش فرض</h6>
                <p className={style.address_item_text}>قم, پردیسان کوچه 12 پلاک 51 زنگ دوم</p>
                <div className={style.address_item_buttons}>
                    <button className={`${style.address_item_btn} ${"button"}`}>ویرایش</button>
                    <button className={`${style.address_item_btn} ${"button"}`}>حذف</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Address