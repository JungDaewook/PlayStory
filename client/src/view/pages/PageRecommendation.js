import React from 'react';
import {useState, useEffect, useMemo, useCallback} from "react";
import LoadingIcon from "../component/LoadingIcon";
import "./PageRecommendation.scss";
import {
    getContentBasedRecommendation,
    getCollaborativeBasedRecommendation,
    getRandomRecommendation,
    clickLike,
    clickGame
} from '../../api/ApiFuncs';
import Modal from "../component/Modal";

function PageRecommendation({nickName, selectedBaseGames}) {
    const [isLoading, setIsLoading] = useState(true);

    const [contentBasedGameList, setContentBasedGameList] = useState([]);
    const [collaborativeGameList, setCollaborativeGameList] = useState([]);
    const [randomGameList, setRandomGameList] = useState([]);

    useEffect(() => {
        if (contentBasedGameList.length && collaborativeGameList.length && randomGameList.length)
            setTimeout(() => {
                setIsLoading(false)
            }, 3000);
    }, [contentBasedGameList, collaborativeGameList, randomGameList])

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
                    "id": 413740,
                    "app_id": 413740,
                    "game_name": "Mines of Mars",
                    "likes": 0,
                    "clicks": 0
                },
                {
                    "id": 312610,
                    "app_id": 312610,
                    "game_name": "METAL SLUG X",
                    "likes": 0,
                    "clicks": 0
                },
                {
                    "id": 6060,
                    "app_id": 6060,
                    "game_name": "Star Wars: Battlefront 2 (Classic; 2005)",
                    "likes": 0,
                    "clicks": 0
                },
                {
                    "id": 8930,
                    "app_id": 8930,
                    "game_name": "Sid Meier's Civilization® V",
                    "likes": 0,
                    "clicks": 0
                },
                {
                    "id": 380,
                    "app_id": 380,
                    "game_name": "Half-Life 2: Episode One",
                    "likes": 0,
                    "clicks": 0
                },
                {
                    "id": 55230,
                    "app_id": 55230,
                    "game_name": "Saints Row: The Third",
                    "likes": 0,
                    "clicks": 0
                },
                {
                    "id": 221640,
                    "app_id": 221640,
                    "game_name": "Super Hexagon",
                    "likes": 0,
                    "clicks": 0
                },
                {
                    "id": 550,
                    "app_id": 550,
                    "game_name": "Left 4 Dead 2",
                    "likes": 0,
                    "clicks": 0
                },
                {
                    "id": 368990,
                    "app_id": 368990,
                    "game_name": "Despair",
                    "likes": 0,
                    "clicks": 0
                },
                {
                    "id": 368500,
                    "app_id": 368500,
                    "game_name": "Assassin's Creed® Syndicate",
                    "likes": 0,
                    "clicks": 0
                }
            ]
        };
    }, [])


    const getContentBasedRecommendationByServer = useCallback(async (baseGameNameList) => {
        const contentBasedGamesResult = await getContentBasedRecommendation(baseGameNameList);
        setContentBasedGameList(contentBasedGamesResult.result);
        return contentBasedGamesResult.result;
        // setContentBasedGameList(exampleGameList.result);
        // return 0;
    }, []);

    const getCollaborativeRecommendationByServer = useCallback(async (baseGameIdList) => {
        const collaborativeGamesResult = await getCollaborativeBasedRecommendation(baseGameIdList);
        setCollaborativeGameList(collaborativeGamesResult.result);
        return collaborativeGamesResult.result;
        // setCollaborativeGameList(exampleGameList.result);
        // return 0;
    }, [])

    const getRandomRecommendationByServer = useCallback(async () => {
        const randomGamesResult = await getRandomRecommendation();
        setRandomGameList(randomGamesResult.result);
        return randomGamesResult.result;
        // setRandomGameList(exampleGameList.result);
        // return 0;
    })

    useEffect(() => {
        const selectedBaseGameNames = selectedBaseGames.map((game, index) => {
            return game.name;
        })
        const selectedBaseGameIds = selectedBaseGames.map((game, index) => {
            return game.id;
        })
        getContentBasedRecommendationByServer(selectedBaseGameNames);
        getCollaborativeRecommendationByServer(selectedBaseGameNames);
        getRandomRecommendationByServer();
    }, [selectedBaseGames]);


    const [clickedGame, setClickedGame] = useState(0);
    const [clickedGameName, setClickedGameName] = useState('');
    const [clickedGameImageUrl, setClickedGameImageUrl] = useState('');
    const [clickedGameDescription, setClickedGameDescription] = useState('');

    const handleGameClick = (game, gameName, gameImageUrl, gameDescription) => {
        setClickedGame(game)
        setClickedGameName(gameName);
        setClickedGameImageUrl(gameImageUrl);
        setClickedGameDescription(gameDescription);
    };

    const closeModal = () => {
        setClickedGame(0);
    };

    const replaceDescription = useCallback((description) => {
        return description.replace(/;/g, '\n');
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
                            {selectedBaseGames.map((game, index) => {
                                return (
                                    <div className={"game-item-my-game"}>
                                        <img className={"game-image"} src={game.image_url}/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={"recommendation-wrapper collaborative"}>
                        <div className="recommendation-text">
                            {nickName}님과 비슷한 사람들은 이런 게임을 선호했어요.
                        </div>
                        <div className="recommendation-game">
                            {collaborativeGameList.map((game, index) => {
                                return (
                                    <div className={"game-item"}
                                         onClick={() => handleGameClick(game, game.game_name, `https://steamcdn-a.akamaihd.net/steam/apps/${game.app_id}/header.jpg`, replaceDescription(game.description))}>
                                        <img className={"game-image"}
                                             src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.app_id}/header.jpg`}/>
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
                            {contentBasedGameList.map((game, index) => {
                                return (
                                    <div className={"game-item"}
                                         onClick={() => handleGameClick(game, game.game_name, `https://steamcdn-a.akamaihd.net/steam/apps/${game.app_id}/header.jpg`, replaceDescription(game.description))}>
                                        <img className={"game-image"}
                                             src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.app_id}/header.jpg`}/>
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
                            {randomGameList.map((game, index) => {
                                return (
                                    <div className={"game-item"}
                                         onClick={() => handleGameClick(game, game.game_name, `https://steamcdn-a.akamaihd.net/steam/apps/${game.app_id}/header.jpg`, replaceDescription(game.description))}>
                                        <img className={"game-image"}
                                             src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.app_id}/header.jpg`}/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={"empty-area"}></div>
                    {clickedGame ? <Modal game={clickedGame} imageUrl={clickedGameImageUrl} gameName={clickedGameName}
                                          gameDescription={clickedGameDescription}
                                          onClose={closeModal}/> : <></>}
                </div>}
        </div>
    );
}

export default PageRecommendation;
