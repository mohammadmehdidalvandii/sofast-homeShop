import React from 'react';
import style from './Login.module.css';
import Link from 'next/link';

function Login() {
  return (
    <section className={style.login}>
            <div className='content'>
                <h6 className="content_title">ورود</h6>
                <span className="content_text">اگرحسابی دارید وارد شوید</span>
            </div>
        <form action="#" className="form">
            <input type="text" className="form_input" placeholder='آدرس ایمیل'/>
            <input type="password" className="form_input" placeholder='رمزعبور'/>
            <Link href='/' className='form_link_forget'>فراموشی رمز عبور</Link>
            <button className="form_submit button">ورود</button>
        </form>
    </section>
  )
}

export default Login