import React from 'react';
import {useState, useEffect, useMemo} from "react";
import LoadingIcon from "../component/LoadingIcon";
import "./PageRecommendation.scss";

function PageRecommendation({nickName}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    }, [])

    const myGameList = useMemo(() => {
        return ([
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            // "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            // "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            // "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg"
        ])
    }, [])

    return (
        <div id={"PageRecommendation"}>
            {isLoading ?
                <div className={"loading-screen"}>
                    <div className={"loading-text"}>
                        당신의 다음 게임을 찾고 있어요...
                    </div>
                    <LoadingIcon/>
                </div>
                :
                <div className={"main-screen"}>
                    <div className={"recommendation-wrapper mine"}>
                        <div className="recommendation-text">
                            {nickName}님의 게임 리스트
                        </div>
                        <div className="recommendation-game">
                            {myGameList.map((url, index) => {
                                return (
                                    <div className={"game-item"}>
                                        <img className={"game-image"} src={url}/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={"recommendation-wrapper collaborative"}>
                        <div className="recommendation-text">
                            {nickName}과 비슷한 사람들은 이런 게임을 선호했어요.
                        </div>
                        <div className="recommendation-game">
                            {myGameList.map((url, index) => {
                                return (
                                    <div className={"game-item"}>
                                        <img className={"game-image"} src={url}/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={"recommendation-wrapper content"}>
                        <div className="recommendation-text">
                            {nickName}님은 이런 게임을 좋아할 거에요.
                        </div>
                        <div className="recommendation-game">
                            {myGameList.map((url, index) => {
                                return (
                                    <div className={"game-item"}>
                                        <img className={"game-image"} src={url}/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={"recommendation-wrapper random"}>
                        <div className="recommendation-text">
                            마음에 든 게임이 없으셨다면, 이런 게임도 있어요.
                        </div>
                        <div className="recommendation-game">
                            {myGameList.map((url, index) => {
                                return (
                                    <div className={"game-item"}>
                                        <img className={"game-image"} src={url}/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={"empty-area"}></div>
                </div>}
        </div>
    );
}

export default PageRecommendation;
