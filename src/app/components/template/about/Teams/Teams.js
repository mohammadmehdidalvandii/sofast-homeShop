import React from 'react';
import style from './Teams.module.css'
import Title from '@/app/components/module/Title/Title';
import TeamCard from '@/app/components/module/TeamCard/TeamCard';




function Teams() {
  return (
    <section className={style.teams}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title title='ملاقات با تیم ما' text='ملاقات با تیم ما'/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <TeamCard/>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <TeamCard/>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <TeamCard/>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <TeamCard/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Teams