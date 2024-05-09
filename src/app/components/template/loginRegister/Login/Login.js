"use client"
import React, { useState } from 'react';
import style from './Login.module.css';
import Link from 'next/link';
import swal from 'sweetalert';

function Login() {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const loginBtn = async (event)=>{
    event.preventDefault();

    // validations

    const user = {email ,password};

    const res = await fetch('/api/auth/signin',{
      method : "POST",
      headers : {"Content-Type": "application/json"},
      body:JSON.stringify(user)
    })
    const data= await res.json();
    
    console.log('res ==> ', res);

    if(res.status === 200){
      swal({
        title:"باموفقیت لاگین شدید",
        icon:"success",
        buttons:"ورود به پنل کاربری",
      }).then(()=>{
        location.replace('/Account')
      })
    } else if(res.status === 422 || res.status === 401){
      swal({
        title:"کاربر با این اطلاعات یافت نشد",
        icon:"error",
        buttons:"تلاش مجدد",
      })
    } else if(res.status === 419){
      swal({
        title:"ایمیل یا پسورد صحیح نیست",
        icon:"error",
        buttons:"تلاش مجدد",
      })
    }
  };

  return (
    <section className={style.login}>
            <div className='content'>
                <h6 className="content_title">ورود</h6>
                <span className="content_text">اگرحسابی دارید وارد شوید</span>
            </div>
        <form action="#" className="form">
            <input
             type="text"
             value={email}
             onChange={(event)=>setEmail(event.target.value)}
             className="form_input"
             placeholder='آدرس ایمیل'
            />
            <input
             type="password"
             value={password}
             onChange={(event)=>setPassword(event.target.value)}
             className="form_input"
             placeholder='رمزعبور'
            />
            <Link href='/' className='form_link_forget'>فراموشی رمز عبور</Link>
            <button className="form_submit button" onClick={loginBtn}>ورود</button>
        </form>
    </section>
  )
}

export default Login