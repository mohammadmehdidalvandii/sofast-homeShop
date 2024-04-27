import React from 'react';
import style from './Comments.module.css';
import Title from '@/app/components/module/Title/Title';
import Comment from '@/app/components/module/Comment/Comment';

function Comments() {
  return (
    <section className={style.comments}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title title='نظرات شما چیه ؟'/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-6 col-sm-12">
                   <Comment/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                   <Comment/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                   <Comment/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Comments