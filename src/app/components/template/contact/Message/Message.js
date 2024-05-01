import React from 'react';
import style from './Message.module.css';

function Message() {
  return (
    <section className={style.message}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form action="#" className={style.message_form}>
                        <h4 className={style.message_form_title}>پیام خود را برای ما ارسال کیند</h4>
                        <div className={`${style.message_form_wrapper} ${'d-block d-md-flex'}`}>
                        <input type="text" className={style.message_form_input} placeholder='نام*'/>
                        <input type="text" className={style.message_form_input} placeholder='ایمیل*'/>
                        </div>
                        <div className={`${style.message_form_wrapper} ${'d-block d-md-flex'}`}>
                        <input type="text" className={style.message_form_input} placeholder='تلفن*'/>
                        <input type="text" className={style.message_form_input} placeholder='موضوع*'/>
                        </div>
                        <textarea className={style.message_form_text} placeholder='پیام شما'></textarea>
                        <button className={`${style.message_form_submit} ${'button'}`}>ارسال</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Message