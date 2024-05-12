"use client"
import React, { useState } from 'react';
import style from './Register.module.css';
import { validationEmail ,validationPassword  } from '@/utils/auth';
import swal from 'sweetalert';


function 
Register() {
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState("");
  const [passwordVerify , setPasswordVerify] = useState("");


  const signUp = async (event)=>{
    event.preventDefault()
    // validation input Register
    if(!name.trim()){
      return swal({
        title:"نام خود را واردکنید",
        icon:"error",
        buttons:"تلاش مجدد"
      })
    } else if(name.length < 4){
      return swal({
        title:"نام کاربری حداکثر باید 4حرف باشد",
        icon:"error",
        buttons:"تلاش مجدد"
      })
    }

  
      const isValidEmail = validationEmail(email);
      if(!isValidEmail){
        swal({
          title:"ایمیل معتبر نیست",
          icon:"error",
          buttons:"تلاش مجدد"
        })
      }


    const isValidPassword = validationPassword(password);
    if(!isValidPassword){
      swal({
        title:"رمز عبور معتبر نیست",
        icon:"error",
        buttons:"تلاش مجدد"
      })
    } else if (password !== passwordVerify){
      swal({
        title:"رمز عبور هماهنگ  نیست",
        icon:"error",
        buttons:"تلاش مجدد"
      })
    }

    const user = {name , email , password}

    const res = await fetch('/api/auth/signup',{
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body : JSON.stringify(user)
    });

    if(res.status === 201){
      swal({
        title:"ثبت نام با موفقیت انجام شد",
        icon:"success",
        buttons:"ورود به پنل کاربری"
      })
    } else if(res.status === 422){
      swal({
        title:"این کاربر از قبل وجود دارد",
        icon:"error",
        buttons:"تلاش مجدد"
      })
    }

  };

 

  return (
    <section className={style.register}>
                <div className='content'>
                <h6 className="content_title">ثبت نام</h6>
                <span className="content_text">اگر مشتری جدید هستید ثبت نام کنید</span>
            </div>
        <form action="#" className="form">
            <input
             type="text"
             value={name}
             onChange={(event)=> setName(event.target.value)}
             className="form_input"
             placeholder='نام کاربری'/>
            <input
             type="text" 
             value={email}
             onChange={(event)=> setEmail(event.target.value)}
            className="form_input"
             placeholder='آدرس ایمیل'/>
            <input
             type="password"
             value={password}
             onChange={(event)=> setPassword(event.target.value)}
             className="form_input" 
            placeholder='رمزعبور'/>
            <input
             type="password" 
             value={passwordVerify}
             onChange={(event)=> setPasswordVerify(event.target.value)}
            className="form_input"
             placeholder='تکرار رمزعبور'/>
            <div className="form_very">
                <input type='checkBox' className="form_very_input" />
                <span className="form_very_text">من شرایط و ضوابط را خوانده ام و با آن موافقم</span>
            </div>
            <button className="form_submit button" onClick={signUp}>ثبت نام</button>
        </form>
    </section>
  )
}

export default Register