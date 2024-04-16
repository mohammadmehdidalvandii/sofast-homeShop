"use client"
import React, { useState } from 'react';
import style from './Navbar.module.css';
import Link from 'next/link';
import { FaUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaBars , FaTimes } from "react-icons/fa";


function Navbar() {
    const [showMenu , setShowMenu] = useState(false)

    const handlerShowMenu = ()=>{
        setShowMenu(!showMenu)
    }
  return (
    <>
    <section className={`${style.navBar} ${'d-none d-lg-block'}`}>
        <div className="containers">
            <div className={style.navbar_wrapper}>
                <Link href='/' className={style.navbar_link_logo}>
                    <img src="/images/logo.png" alt="logo nabvar" className={style.navbar_link_img} />
                </Link>
                <ul className={style.navbar_items}>
                    <li className={style.navbar_item}>
                        <Link href='/' className={style.navbar_item_link}>خانه</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/' className={style.navbar_item_link}>درباره ما</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/' className={style.navbar_item_link}>فروشگاه</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/' className={style.navbar_item_link}>وبلاگ</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/' className={style.navbar_item_link}>تماس با ما</Link>
                    </li>
                </ul>

                <div className={style.navbar_wrapper_link}>
                    <Link href='/' className={style.navbar_link_menu}>
                        <span className={style.navbar_link_icon}><FaUser/></span>
                    </Link>
                    <Link href='/' className={style.navbar_link_menu}>
                        <span className={style.navbar_link_icon}><FaRegHeart/></span>
                    </Link>
                    <Link href='/' className={style.navbar_link_menu}>
                        <span className={style.navbar_link_icon}>
                            <FiShoppingCart/>
                        </span>
                        <span className={style.navbar_link_number}>0</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>

    <section className={style.navbarRes}>
        <div className="containers">
            <div className={style.navbarRes_wrapper}>
                <Link href='/' className={style.navbarRes_link_logo}>
                    <img src="/images/logo.png" alt="logo image" className={style.navbarRes_link_img} />
                </Link>
                {showMenu ? (
                      <span className={style.navbarRes_icon} onClick={handlerShowMenu}>
                      <FaTimes/>
              </span>
                ) : (
                          <span className={style.navbarRes_icon} onClick={handlerShowMenu}>
                          <FaBars/>
                  </span>
                )}
              
            {showMenu && (
                <ul className={style.navbarRes_items}>
                    <li className={style.navbar_item}>
                        <Link href='/' className={style.navbarRes_item_link}>سبد خرید</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/' className={style.navbarRes_item_link}>خانه</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/' className={style.navbarRes_item_link}>درباره ما</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/' className={style.navbarRes_item_link}>فروشگاه</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/' className={style.navbarRes_item_link}>وبلاگ</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/' className={style.navbarRes_item_link}>تماس با ما</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/' className={style.navbarRes_item_link}>ورود</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/' className={style.navbarRes_item_link}>ثبت نام</Link>
                    </li>
                </ul>
            )}
            </div>
        </div>
    </section>
    </>
  )
}

export default Navbar