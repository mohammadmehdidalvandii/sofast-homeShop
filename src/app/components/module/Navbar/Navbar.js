"use client"
import React, { useEffect, useState } from 'react';
import style from './Navbar.module.css';
import Link from 'next/link';
import { FaUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaBars , FaTimes } from "react-icons/fa";
import { BsPersonVcard } from "react-icons/bs";
import { usePathname } from 'next/navigation';


function Navbar({isLogin}) {
    const [showMenu , setShowMenu] = useState(false)
    const [routesMenu , setRouteMenu] = useState('/')
    const [fixedNavbar , setFixedNavbar]= useState(false)
    const routeName = usePathname()

    useEffect(()=>{
        const fixNavbarToTop = ()=>{
            const currentScroll = window.scrollY
            if(currentScroll > 75){
                setFixedNavbar(true)
            }else{
                setFixedNavbar(false)
            }
        }

        window.addEventListener('scroll' , fixNavbarToTop)
        return ()=> window.removeEventListener('scroll' , fixNavbarToTop)
    },[])

    useEffect(()=>{
        const pathName = routeName
        setRouteMenu(pathName)
    },[routeName])

    const handlerShowMenu = ()=>{
        setShowMenu(!showMenu)
    }
  return (
    <>
    <section className={`${fixedNavbar ? style.navbar_fixed : style.navbar} ${'d-none d-lg-block'}`}>
        <div className="containers">
            <div className={style.navbar_wrapper}>
                <Link href='/' className={style.navbar_link_logo}>
                    <img src="/images/logo.png" alt="logo nabvar" className={style.navbar_link_img} />
                </Link>
                <ul className={style.navbar_items}>
                    <li className={style.navbar_item}>
                        <Link href='/' className={routesMenu === '/' ? style.navbar_item_link_active : style.navbar_item_link}>خانه</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/About' className={routesMenu === '/About' ? style.navbar_item_link_active : style.navbar_item_link}>درباره ما</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/Shop' className={routesMenu === '/Shop' ? style.navbar_item_link_active : style.navbar_item_link}>فروشگاه</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/Article' className={routesMenu === '/Article' ? style.navbar_item_link_active : style.navbar_item_link}>وبلاگ</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/Contact' className={routesMenu === '/Contact' ? style.navbar_item_link_active : style.navbar_item_link}>تماس با ما</Link>
                    </li>
                </ul>

                <div className={style.navbar_wrapper_link}>
                    {!isLogin ?(
                            <Link href='/LoginRegister' className={style.navbar_link_menu}>
                            <span className={style.navbar_link_icon}><FaUser/></span>
                        </Link>
                    ):(
                        <Link href='/Account' className={style.navbar_link_menu}>
                        <span className={style.navbar_link_icon}><BsPersonVcard/></span>
                    </Link>
                    )}
                
                    <Link href='/Wishlist' className={style.navbar_link_menu}>
                        <span className={style.navbar_link_icon}><FaRegHeart/></span>
                    </Link>
                    <Link href='/Basket' className={style.navbar_link_menu}>
                        <span className={style.navbar_link_icon}>
                            <FiShoppingCart/>
                        </span>
                        <span className={style.navbar_link_number}>0</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>

    <section className={ `${fixedNavbar ? style.navbar_fixed : style.navbarRes} ${"d-lg-none d-block"}`}>
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
                        <Link href='/Basket' className={routesMenu === '/Basket' ? style.navbarRes_item_link_active : style.navbarRes_item_link }>سبد خرید</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/' className={routesMenu === '/' ? style.navbarRes_item_link_active : style.navbarRes_item_link }>خانه</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/About' className={routesMenu === '/About' ? style.navbarRes_item_link_active : style.navbarRes_item_link }>درباره ما</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/Shop' className={routesMenu === '/Shop' ? style.navbarRes_item_link_active : style.navbarRes_item_link }>فروشگاه</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/Article' className={routesMenu === '/Article' ? style.navbarRes_item_link_active : style.navbarRes_item_link }>وبلاگ</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/Contact' className={routesMenu === '/Contact' ? style.navbarRes_item_link_active : style.navbarRes_item_link }>تماس با ما</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/Login' className={routesMenu === '/Login' ? style.navbarRes_item_link_active : style.navbarRes_item_link }>ورود</Link>
                    </li>
                    <li className={style.navbar_item}>
                        <Link href='/Register' className={routesMenu === '/Register' ? style.navbarRes_item_link_active : style.navbarRes_item_link }>ثبت نام</Link>
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