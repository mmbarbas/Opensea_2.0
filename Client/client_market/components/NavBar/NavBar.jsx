import React, {useEffect,useState} from 'react';
import Image from "next/image";
import Link from "next/link";
//Import Icon
import {MdNotifications} from 'react-icons/md'
import {BsSearch} from "react-icons/bs";
import {CgMenuLeft,CgMenuRight} from "react-icons/cg"


import Style from "./NavBar.module.css"
import {Discover,HelpCenter,Notification,Profile,SideBar} from './index';
import {Button} from "../componentsindex";
import images from "../../img";

const NavBar = () => {

    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const openMenu = (e) => {
        const btnText = e.target.innerText;

        let discoverState = false;
        let helpState = false;
        let notificationState = false;
        let profileState = false;

        switch(btnText) {
            case "Discover":
                discoverState = true;
                break;
            case "Help Center":
                helpState = true;
                break;
        }

        setDiscover(discoverState);
        setHelp(helpState);
        setNotification(notificationState);
        setProfile(profileState);

    }

    const openNotification = ()=> {
        if(!notification) {
            setNotification(true);
            setDiscover(false);
            setHelp(false);
            setProfile(false);
        }
        else {
            setNotification(false);
        }
    }

    const openProfile = ()=> {
        if(!profile) {
            setProfile(true);
            setNotification(false);
            setDiscover(false);
            setHelp(false);
        }
        else {
            setProfile(false);
        }
    }
    
    const openSideBar = ()=> {
        if(!openSideMenu) {
            setOpenSideMenu(true);
        }
        else {
            setOpenSideMenu(false);
        }
    }

    return (
        <div className={Style.navbar}>
            <div className={Style.navbar_container}>
                <div className={Style.navbar_container_left}>
                    <div className={Style.logo}>
                        <Image src={images.logo} alt="NFT MARKETPLACE" height={100} width={100}/>
                    </div>
                    <div className={Style.navbar_container_left_box_input}>
                        <div className={Style.navbar_container_left_box_input_box}>
                            <input type='text' placeholder="Search NFT" />
                            <BsSearch onClick={()=>{}} className={Style.search_con}/>
                        </div>
                    </div>
                </div>
                {/*End of left section*/}
                <div className={Style.navbar_container_right}>
                    {/*Discover Menu*/}
                    <div className={Style.navbar_container_right_discover}>
                        <p onClick={(e)=> openMenu(e)}>Discover</p>
                        {discover && (
                        <div className={Style.navbar_container_right_discover_box}>
                            <Discover/>
                        </div>
                        )}
                    </div>
                     {/*Help Center Menu*/}
                     <div className={Style.navbar_container_right_help}>
                        <p onClick={(e)=> openMenu(e)}>Help Center</p>
                        {help && (
                        <div className={Style.navbar_container_right_help_box}>
                            <HelpCenter/>
                        </div>
                        )}
                    </div> 
                    {/*Notification menu*/}
                    <div className={Style.navbar_container_right_notify}>
                        <MdNotifications className={Style.notify} onClick={()=> openNotification()} />
                        {notification && <Notification/>}
                    </div>              
                    {/* Create button section*/}
                    <div className={Style.navbar_container_right_button}>
                        <Button btnText="Create"/>
                    </div> 
                    {/* User Profile*/}
                    <div className={Style.navbar_container_right_profile_box}>
                        <div className={Style.navbar_container_right_profile}>
                            <Image 
                                className={Style.navbar_container_right_profile}
                                src={images.user1} 
                                alt="Profile" width={40} 
                                height={40} 
                                onClick={() => openProfile()} />
                            {profile && <Profile/>}

                        </div>
                    </div>
                    {/* Menu Button*/}
                    <div className={Style.navbar_container_right_menuBtn}>
                        <CgMenuRight className={Style.menuIcon} onClick={()=>openSideBar()}/>
                    </div>        
                </div>
            </div>
            {/* SideBar component*/}
            {openSideMenu && (
                <div className={Style.SideBar}>
                    <SideBar setOpenSideMenu={setOpenSideMenu}/>
                </div>
            )}
        </div>
    ) 
}

export default NavBar