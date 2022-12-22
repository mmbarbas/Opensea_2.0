import React from 'react'
import Image from 'next/image';
import { MdVerified } from "react-icons/md";


import Style from './DaysComponents.module.css';
import images from "../../../img";


const DaysComponents = ({el,i}) => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <Image src={images.creatorbackground1} className={Style.daysComponent_box_img_img} alt="profile background" width={500} height={300} />
        </div>
        <div className={Style.daysComponent_box_profile}>
          <Image src={images.creatorbackground2} className={Style.daysComponent_box_img_1} alt="profile" width={200} height={200} />
          <Image src={images.creatorbackground2} className={Style.daysComponent_box_img_2} alt="profile" width={200} height={200} />
          <Image src={images.creatorbackground2} className={Style.daysComponent_box_img_3} alt="profile" width={200} height={200} />
        </div>
        <div className={Style.daysComponent_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <Image src={images.user1} className={Style.daysComponent_box_title_info_profile_img} alt="profile" width={30} height={30} />
              <p>Creator
                <span>Shoaib Bhai
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>
            <div className={Style.daysComponent_box_title_info_price}>
              <small>{i + 4}.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DaysComponents