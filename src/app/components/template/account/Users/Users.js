"use client"
import React, { useState } from 'react';
import style from './Users.module.css';
import Dashboard from '../Dashboard/Dashboard';
import Order from '../Order/Order';


function Users() {
    const [menuAccount , setMenuAccount] = useState("dashboard");

    const menuAccountBtn = (menuID)=>{
        setMenuAccount(menuID)
    }
  return (
    <section className={style.users}>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <ul className={style.users_items}>
                        <li className={style.users_item}>
                            <button className={menuAccount === 'dashboard' ? style.users_item_btn_active : style.users_item_btn}
                            onClick={()=>menuAccountBtn("dashboard")}
                            >داشبور</button>
                        </li>
                        <li className={style.users_item}>
                            <button className={menuAccount === 'orders' ? style.users_item_btn_active : style.users_item_btn}
                            onClick={()=>menuAccountBtn("orders")}
                            >سفارشات</button>
                        </li>
                        <li className={style.users_item}>
                            <button className={menuAccount === 'address' ? style.users_item_btn_active : style.users_item_btn}
                            onClick={()=>menuAccountBtn("address")}
                            >نشانی</button>
                        </li>
                        <li className={style.users_item}>
                            <button className={menuAccount === 'account_detail' ? style.users_item_btn_active : style.users_item_btn}
                            onClick={()=>menuAccountBtn("account_detail")}
                            >جزئیات حساب</button>
                        </li>
                        <li className={style.users_item}>
                            <button className={`${style.users_item_btn} ${style.users_item_btn_delete}`}
                            >خروج</button>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12">
                    {menuAccount === "dashboard" && (<Dashboard/>)}
                    {menuAccount === "orders" && (<Order/>)}
                    {menuAccount === "address" && (<h1>address</h1>)}
                    {menuAccount === "account_detail" && (<h1>account_detail</h1>)}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Users