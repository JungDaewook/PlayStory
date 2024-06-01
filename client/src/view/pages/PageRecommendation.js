import React from 'react';
import {useState, useEffect, useMemo, useCallback} from "react";
import LoadingIcon from "../component/LoadingIcon";
import "./PageRecommendation.scss";
import {getContentBasedRecommendation, getCollaborativeBasedRecommendation} from '../../api/ApiFuncs';

function PageRecommendation({nickName, selectedBaseGames}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    }, [])

    const myGameList = useMemo(() => {
        return ([
            "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg",
            "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg",
            "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg",
            "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg",
            "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg",
            "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg",
            "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg",
            "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg",
            // "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            // "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            // "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg"
        ])
    }, [])

    const exampleGameList = useMemo(() => {
        return {
            "result": [
                {
                    "id": 582010,
                    "app_id": 582010,
                    "game_name": "Monster Hunter: World"
                },
                {
                    "id": 1085660,
                    "app_id": 1085660,
                    "game_name": "Destiny 2"
                },
                {
                    "id": 1277920,
                    "app_id": 1277920,
                    "game_name": "Ethyrial: Echoes of Yore"
                },
                {
                    "id": 1135120,
                    "app_id": 1135120,
                    "game_name": "Tomscape"
                },
                {
                    "id": 1097960,
                    "app_id": 1097960,
                    "game_name": "ClickRaid2"
                },
                {
                    "id": 1265850,
                    "app_id": 1265850,
                    "game_name": "Chatventures"
                },
                {
                    "id": 974520,
                    "app_id": 974520,
                    "game_name": "Ultimo Reino"
                },
                {
                    "id": 1135120,
                    "app_id": 1135120,
                    "game_name": "Tomscape"
                }
            ]
        };
    }, [])

    const [contentBasedGameList, setContentBasedGameList] = useState([]);
    const [collaborativeGameList, setCollaborativeGameList] = useState([]);

    const getContentBasedRecommendationByServer = useCallback(async (baseGameList) => {
        // const contentBasedGamesResult = await getContentBasedRecommendation(baseGameList);
        // setContentBasedGameList(contentBasedGamesResult.result);
        // return contentBasedGamesResult.result;
        setContentBasedGameList(exampleGameList.result);
        return 0;
    }, []);

    const getCollaborativeRecommendationByServer = useCallback(async (baseGameList) => {
        // const collaborativeGamesResult = await getCollaborativeBasedRecommendation(baseGameList);
        // setCollaborativeGameList(collaborativeGamesResult.result);
        // return collaborativeGamesResult.result;
        setContentBasedGameList(exampleGameList.result);
        return 0;
    }, [])

    useEffect(() => {
        getContentBasedRecommendationByServer(["Palworld", "League of Legends"]);
        getCollaborativeRecommendationByServer([10, 20]);
    }, []);

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
                            {selectedBaseGames.map((url, index) => {
                                return (
                                    <div className={"game-item"}>
                                        <img className={"game-image"} src={url.image_url}/>
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
                            {collaborativeGameList.map((url, index) => {
                                return (
                                    <div className={"game-item"}>
                                        <img className={"game-image"}
                                             src={`https://steamcdn-a.akamaihd.net/steam/apps/${url.id}/header.jpg`}/>
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
                            {contentBasedGameList.map((url, index) => {
                                return (
                                    <div className={"game-item"}>
                                        <img className={"game-image"}
                                             src={`https://steamcdn-a.akamaihd.net/steam/apps/${url.id}/header.jpg`}/>
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
