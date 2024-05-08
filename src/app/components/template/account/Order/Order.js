import React from 'react';
import style from './Order.module.css';

function Order() {
  return (
   <section className={style.order}>
        <table>
            <thead className={style.thead}>
                <tr className={style.tr}>
                    <th>#</th>
                    <th>آیدی سفارش</th>
                    <th>تاریخ سفارش</th>
                    <th>وضعیت سفارش</th>
                    <th>قیمت</th>
                    <th>وضعیت پرداخت</th>
                    <th>تحویل</th>
                </tr>
            </thead>
            <tbody className={style.tbody}>
                <tr className={style.tbody_tr}>
                    <th>1</th>
                    <th>ORD۱۶۲۵۷۹۴۱</th>
                    <th>۱۴۰۱.۱.۱۱</th>
                    <th>انتخاب کرد</th>
                    <th>۲۰۰۰۰۰ تومان</th>
                    <th>پرداخت شده</th>
                    <th>تحویل داده شده</th>
                </tr>
                <tr className={style.tbody_tr}>
                    <th>1</th>
                    <th>ORD۱۶۲۵۷۹۴۱</th>
                    <th>۱۴۰۱.۱.۱۱</th>
                    <th>انتخاب کرد</th>
                    <th>۲۰۰۰۰۰ تومان</th>
                    <th>پرداخت شده</th>
                    <th>تحویل داده شده</th>
                </tr>
                <tr className={style.tbody_tr}>
                    <th>1</th>
                    <th>ORD۱۶۲۵۷۹۴۱</th>
                    <th>۱۴۰۱.۱.۱۱</th>
                    <th>انتخاب کرد</th>
                    <th>۲۰۰۰۰۰ تومان</th>
                    <th>پرداخت شده</th>
                    <th>تحویل داده شده</th>
                </tr>
                <tr className={style.tbody_tr}>
                    <th>1</th>
                    <th>ORD۱۶۲۵۷۹۴۱</th>
                    <th>۱۴۰۱.۱.۱۱</th>
                    <th>انتخاب کرد</th>
                    <th>۲۰۰۰۰۰ تومان</th>
                    <th>پرداخت شده</th>
                    <th>تحویل داده شده</th>
                </tr>
            </tbody>
        </table>
   </section>
  )
}

export default Order