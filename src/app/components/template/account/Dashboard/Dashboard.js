import React from 'react';
import style from './Dashboard.module.css';
import Link from 'next/link';

function Dashboard() {
  return (
   <section className={style.dashboard}>
        <div className={style.dashboard_content}>
            <h3 className={style.dashboard_content_title}>سلام ادمین خیلی خوش آمدی 😍</h3>
            <p className={style.dashboard_content_desc}>
            از داشبورد حساب خود می توانید خود را مشاهده کنید سفارشات اخیر, حمل و نقل خود را مدیریت کنید و آدرس های صورتحساب, و خود را ویرایش کنید کلمه عبور و جزئیات حساب.
            </p>

            <div className={style.dashboard_content_BtnText}>
                <span className={style.dashboard_content_text}>اگر ادمین نیست </span>
                <button className={style.dashboard_content_button}>خروج</button>
            </div>
        </div>
   </section>
  )
}

export default Dashboard