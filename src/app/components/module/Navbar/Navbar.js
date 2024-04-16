import React from 'react';
import style from './Navbar.module.css';
import Link from 'next/link';
import { FaUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";


function Navbar() {
  return (
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
  )
}

export default Navbar