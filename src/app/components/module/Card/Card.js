import React from "react";
import style from "./Card.module.css";
import Link from "next/link";  


function Card() {
  return (
    <Link href="" className={style.card}>
      <img src="/images/p.png" alt="product image" className={style.card_img} />
      <div className={style.card_content}>
        <h6 className={style.card_title}>صندلی راحتی</h6>
        <span className={style.card_price}>1,000,000 تومان</span>
      </div>
    </Link>
  );
}

export default Card;
