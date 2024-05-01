import React from 'react';
import style from './Register.module.css';


function Register() {
  return (
    <section className={style.register}>
                <div className='content'>
                <h6 className="content_title">ثبت نام</h6>
                <span className="content_text">اگر مشتری جدید هستید ثبت نام کنید</span>
            </div>
        <form action="#" className="form">
            <input type="text" className="form_input" placeholder='نام کاربری'/>
            <input type="text" className="form_input" placeholder='آدرس ایمیل'/>
            <input type="password" className="form_input" placeholder='رمزعبور'/>
            <input type="password" className="form_input" placeholder='تکرار رمزعبور'/>
            <div className="form_very">
                <input type='checkBox' className="form_very_input" />
                <span className="form_very_text">من شرایط و ضوابط را خوانده ام و با آن موافقم</span>
            </div>
            <button className="form_submit button">ورود</button>
        </form>
    </section>
  )
}

export default Register