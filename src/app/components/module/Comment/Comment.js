import React from 'react';
import style from './Comment.module.css';

function Comment() {
  return (
    <div className={style.comment}>
    <img src="/images/cm.png" alt="comment image" className={style.comment_img} />
    <h4 className={style.comment_userName}>کوثر بختیاری</h4>
    <span className={style.comment_job}>طراح</span>
    <p className={style.comment_text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
</div>
  )
}

export default Comment