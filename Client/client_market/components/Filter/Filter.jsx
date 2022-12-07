import React, { useState } from "react";
import {
    FaFilter,
    FaAngleDown,
    FaAngleUp,
    FaWallet,
    FaMusic,
    FaVideo,
    FaImages,
    FaUserAlt,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

import Style from './Filter.module.css'

const Filter = () => {
    const [filter, setFilter] = useState(true);
    const [image, setImage] = useState(true);
    const [video, setVideo] = useState(true);
    const [music, setMusic] = useState(true);




    //Functions
    const setTabs = (tabName) => {
        switch(tabName) {
            case "filter":
                setFilter(!filter);
            break;
            case "image":
                setImage(!image);
            break;
            case "video":
                setVideo(!video);
            break;
            case "music":
                setMusic(!music);
            break;
        }
    }
    
   
    return (
        <div className={Style.filter}>
            <div className={Style.filter_box}>
                <div className={Style.filter_box_left}>
                    <button onClick={() => { }}>NFTs</button>
                    <button onClick={() => { }}>Art</button>
                    <button onClick={() => { }}>Musics</button>
                    <button onClick={() => { }}>Sports</button>
                    <button onClick={() => { }}>Photos</button>
                </div>
                <div className={Style.filter_box_right}>
                    <div className={Style.filter_box_right_box} onClick={() => setTabs("filter")}>
                        <FaFilter />
                        <span>Filter</span> {filter ? <FaAngleDown /> : <FaAngleUp />}
                    </div>
                </div>
            </div>
            {
                filter && (
                    <div className={Style.filter_box_items}>
                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item}>
                                <FaWallet /> <span>10 ETH</span>
                                <AiFillCloseCircle />
                            </div>
                        </div>
                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item_trans} onClick={() => setTabs("image")}>
                                <FaImages />
                                <span>Images</span> {image ? <AiFillCloseCircle /> : <TiTick />}
                            </div>
                        </div>
                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item_trans} onClick={() => setTabs("video")}>
                                <FaVideo />
                                <span>Videos</span> {video ? <AiFillCloseCircle /> : <TiTick />}
                            </div>
                        </div>
                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item_trans} onClick={() => setTabs("music")}>
                                <FaMusic />
                                <span>Musics</span> {music ? <AiFillCloseCircle /> : <TiTick />}
                            </div>
                        </div>
                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item}>
                                <FaUserAlt />
                                <span>Verified</span>
                                <MdVerified/>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Filter