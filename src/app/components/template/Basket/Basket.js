import React from 'react';
import style from './Basket.module.css';
import { MdDeleteForever } from "react-icons/md";
import Link from 'next/link';


function Basket() {
  return (
    <section className={style.basket}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <ul className={`${style.basket_Items} ${'flex-column flex-md-row'}` }>
                        <li className={style.basket_item}>
                            <img src="/images/p.png" alt="product image" className={style.basket_item_img} />
                        </li>
                        <li className={style.basket_item}>
                            <h6 className={style.basket_item_title}>نام محصول:</h6>
                            <span className={style.basket_item_text}>صندلی راحتی</span>
                        </li>
                        <li className={style.basket_item}>
                        <h6 className={style.basket_item_title}>قیمت:</h6>
                            <span className={style.basket_item_text}>1,200,000 تومان</span>
                        </li>
                        <li className={style.basket_item}>
                            <div className={style.basket_item_counter}>
                                <span className={style.basket_item_plus}>+</span>
                                <span className={style.basket_item_number}>1</span>
                                <span className={style.basket_item_minus}>-</span>
                            </div>
                        </li>
                        <li className={style.basket_item}>
                        <h6 className={style.basket_item_title}>مجموع:</h6>
                            <span className={style.basket_item_text}>1,200,000 تومان</span>
                        </li>
                        <li className={style.basket_item}>
                            <button className={`${style.basket_item_delete} ${'button'}`}>
                                <MdDeleteForever/>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <div className={style.basket_result}>
                        <h4 className={style.basket_result_title}>مجموع سبد خرید</h4>
                        <div className={style.basket_result_price}>
                            <span className={style.basket_result_text}>مجموع :</span>
                            <span className={style.basket_result_number}>1,200,000 تومان</span>
                        </div>
                        <Link href='/' className={`${style.basket_result_pay} ${"button"}`}>پرداخت</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Basket