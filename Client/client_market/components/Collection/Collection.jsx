import React, { useEffect, useState } from 'react'
import {
    BsFillAlarmFill,
    BsFillCalendarDateFill,
    BsCalendar3,
} from "react-icons/bs";

import Style from './Collection.module.css';
import DaysComponent from "./DaysComponents/DaysComponents";
import images from "../../img";

const Collection = () => {
    const [popular, setPopular] = useState(true);
    const [following, setFollowing] = useState(false);
    const [news, setNews] = useState(false);

    const CardArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const FollowingArray = [1, 2, 3, 4];
    const NewsArray = [1, 2, 3, 4, 5, 6];


    const openCollection = (collectionName) => {

        var popularState = false;
        var followingState = false;
        var newsState = false;

        switch(collectionName) {
            case "popular":
                if(!popular) {
                    popularState = true;
                }
            break;
            case "following":
                if(!following) {
                    followingState = true;
                }
            break;
            case "news":
                if(!news) {
                    newsState = true;
                }
            break;
        }

        setPopular(popularState);
        setFollowing(followingState);
        setNews(newsState);
    }


    return (
        <div className={Style.collection}>
            <div className={Style.collection_title}>
                <h2>Top List Creators</h2>
                <div className={Style.collection_collections}>
                    <div className={Style.collection_collections_btn}>
                        <button onClick={() => openCollection("popular")}>
                            <BsFillAlarmFill /> 24 hours
                        </button>
                        <button onClick={() => openCollection("following")}>
                            <BsCalendar3 /> 7 days
                        </button>
                        <button onClick={() => openCollection("news")}>
                            <BsFillCalendarDateFill /> 30 days
                        </button>
                    </div>
                </div>
            </div>
            {
                popular && (
                    <div className={Style.collection_box}>
                        {CardArray.map((el, i) => (
                            <DaysComponent key={i + 1} />
                        ))}
                    </div>
                )
            }
            {
                following && (
                    <div className={Style.collection_box}>
                        {FollowingArray.map((el, i) => (
                            <DaysComponent key={i + 1} />
                        ))}
                    </div>
                )
            }
            {
                news && (
                    <div className={Style.collection_box}>
                        {NewsArray.map((el, i) => (
                            <DaysComponent key={i + 1} />
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default Collection