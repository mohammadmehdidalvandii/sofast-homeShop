import React from 'react';
import style from './TeamCard.module.css';
import Link from 'next/link';
import { TiSocialFacebook , TiSocialTwitter } from "react-icons/ti";
import { FaInstagram , FaSkype  } from "react-icons/fa";


function TeamCard() {
  return (
    <div className={style.teamCard}>
    <img src="/images/team.jpg" alt="team image" className={style.teamCard_img} />
    <div className={style.teamCard_media}>
        <Link href='' className={style.teamCard_media_link}><TiSocialFacebook/></Link>
        <Link href='' className={style.teamCard_media_link}><TiSocialTwitter/></Link>
        <Link href='' className={style.teamCard_media_link}><FaInstagram/></Link>
        <Link href='' className={style.teamCard_media_link}><FaSkype/></Link>
    </div>
    <div className={style.teamCard_content}>
        <Link href='' className={style.teamCard_name_link}>مصطفی کیایی</Link>
        <span className={style.teamCard_job}>طراح محصول</span>
    </div>
</div>
  )
}

export default TeamCard