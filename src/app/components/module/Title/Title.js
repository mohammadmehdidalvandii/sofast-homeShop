import React from "react";
import style from './Title.module.css';

function Title({ title }) {
  return (
    <div className={style.content_title}>
      <h4 className={style.content_title_text}>{title}</h4>
    </div>
  );
}

export default Title;
