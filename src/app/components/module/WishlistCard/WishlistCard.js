import React from 'react';
import style from './WishlistCard.module.css';
import Link from 'next/link';

function WishlistCard() {
  return (
    <div className={style.wishlistCard}>
        <img src="/images/p.png" alt="product image" className={style.wishlistCard_img} />
        <h6 className={style.wishlistCard_name}>صندلی راحتی</h6>
        <span className={style.wishlistCard_price}>1,300,000 تومان</span>
        <span className={style.wishlistCard_inventory}>120 عدد موجود</span>
        <div className={style.wishlistCard_wrapper}>
            <Link href='/' className={`${style.wishlistCard_show} ${"button"}`}>مشاهده</Link>
            <button className={style.wishlistCard_delete}>حذف</button>
        </div>
    </div>
  )
}

export default WishlistCard