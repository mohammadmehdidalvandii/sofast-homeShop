import React from 'react';
import style from './PageHeader.module.css';
import Link from 'next/link';

function PageHeader({title , text}) {
  return (
    <section className={style.pageHeader}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={style.pageHeader_content}>
                        <h4 className={style.pageHeader_title}>{title}</h4>
                        <div className={style.pageHeader_wrapper}>
                            <Link href='/' className={style.pageHeader_link}>خانه</Link>
                            /
                            <span className={style.pageHeader_text}>{text}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PageHeader