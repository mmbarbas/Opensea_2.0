import React, { useState } from 'react'
import Link from 'next/link';
import Image from "next/image";
import { GrClose } from "react-icons/gr";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import Style from "./SideBar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";

const SideBar = ({setOpenSideMenu}) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  //Discover navigation menu
  const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Autor profile",
      link: "autor-profile"
    },
    {
      name: "NFT Details",
      link: "NFT-details"
    },
    {
      name: "Account Setting",
      link: "account-setting"
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet"
    },
    {
      name: "Blog",
      link: "blog"
    },
  ];

  //Help center navigation menu
  const helpCenter = [
    {
      name: "About",
      link: "aboutus",
    },
    {
      name: "Contact Us",
      link: "contactus",
    },
    {
      name: "Sign Up",
      link: "signUp",
    },
    {
      name: "LogIn",
      link: "login",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  const closeSideBar = () => 
  {
    setOpenSideMenu(false);
  }


  const openCloseMenus = (variable, func) =>{
    if(!variable) {
      func(true);
    }else {
      func(false);
    }
  }

  return (
    <div className={Style.sideBar}>
      <GrClose className={Style.sideBar_closeBtn} onClick={() => closeSideBar()} />
      <div className={Style.sideBar_box}>
        <Image src={images.logo} alt="logo" width={150} height={150} />
        <p>
          Discover the most outstanding articles on all topics of NFT & your own stories and share them
        </p>
        <div className={Style.sideBar_social}>
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialYoutube />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
        </div>
      </div>

      <div className={Style.sideBar_menu}>
        <div>
          <div className={Style.sideBar_menu_box} onClick={() => openCloseMenus(openDiscover,setOpenDiscover)}>
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {
            openDiscover && (
              <div className={Style.sideBar_discover}>
                {discover.map((el, i) => (
                  <p key={i + 1}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>
        <div>
          <div className={Style.sideBar_menu_box} onClick={() => openCloseMenus(openHelp, setOpenHelp)}>
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {
            openHelp && (
              <div className={Style.sideBar_discover}>
                {helpCenter.map((el, i) => (
                  <p key={i + 1}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )
          }

        </div>
      </div>
      <div className={Style.sideBar_button}>
          <Button btnName="Create" handleClick ={()=>{}}/>
          <Button btnName="Connect Wallet" handleClick ={()=>{}}/>
      </div>
    </div>
  )
}

export default SideBar