"use client"
import React, { useEffect, useState } from 'react';
import style from '../style/ScrollToTop.module.css'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";


function ScrollToTop() {
  const [isVisible ,  setIsVisible] = useState(false)

  useEffect(()=>{
    const toggleVisibility  = ()=>{
        window.scrollY > 120 ? setIsVisible(true) : setIsVisible(false)
    }

    window.addEventListener('scroll' , toggleVisibility)
    return ()=> window.removeEventListener('scroll', toggleVisibility)
  },[])

  const scrollToTop = ()=>{
    isVisible &&
      window.scrollTo({
        top : 0 ,
        behavior: "smooth"
      });
  };
  return (
    <button className={isVisible ? style.buttonToTop_Visible : style.buttonToTop} onClick={scrollToTop}>
        <MdOutlineKeyboardDoubleArrowUp/>
    </button>
  )
}

export default ScrollToTop