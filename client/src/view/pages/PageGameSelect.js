import React from 'react';
import "./PageGameSelect.scss";
import {useState, useMemo, useCallback, useEffect} from "react";
import likeIcon from "../assets/LikeIcon.png";
import {AiOutlineArrowRight} from "react-icons/ai";
import {getBaseGames} from "../../api/ApiFuncs";

function PageGameSelect({setPageNum, nickName, selectedBaseGames, setSelectedBaseGames}) {

    const imageUrlList = useMemo(() => {
        return ([
                {
                    "id": 1,
                    "name": "League of Legends",
                    "genres": ["AOS"],
                    "image_url": "https://cloudcomputing13213123.s3.ap-northeast-2.amazonaws.com/Lostark.jpeg"
                },
                {
                    "id": 2,
                    "name": "FIFA Online",
                    "genres": ["Sports"],
                    "image_url": "https://cdn.ea.com/fifa/FIFA_Online/header.jpg"
                },
                {
                    "id": 3,
                    "name": "Battle Ground",
                    "genres": ["FPS", "Survival"],
                    "image_url": "https://battlegrounds.pubg.com/images/header.jpg"
                },
                {
                    "id": 4,
                    "name": "Sudden Attack",
                    "genres": ["FPS"],
                    "image_url": "https://suddenattack.nexon.com/images/header.jpg"
                },
                {
                    "id": 5,
                    "name": "OverWatch 2",
                    "genres": ["FPS"],
                    "image_url": "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltd7b3b3d556e5b8ef/header.jpg"
                },
                {
                    "id": 6,
                    "name": "Valorant",
                    "genres": ["FPS", "Action"],
                    "image_url": "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3273d1e8e1238454/header.jpg"
                },
                {
                    "id": 7,
                    "name": "Lostark",
                    "genres": ["MMORPG"],
                    "image_url": "https://assets-lostark.pearlcdn.com/images/header.jpg"
                },
                {
                    "id": 8,
                    "name": "Maple Story",
                    "genres": ["MMORPG"],
                    "image_url": "https://maplestory.nexon.com/images/header.jpg"
                },
                {
                    "id": 9,
                    "name": "StarCraft Remaster",
                    "genres": ["AOS"],
                    "image_url": "https://bnetcmsus-a.akamaihd.net/cms/header.jpg"
                },
                {
                    "id": 10,
                    "name": "DUNGEON & FIGHTER",
                    "genres": ["RPG", "Massively Multiplayer", "Action"],
                    "image_url": "https://dungeonfighter.nexon.com/images/header.jpg"
                },
                {
                    "id": 11,
                    "name": "Palworld",
                    "genres": ["Open world", "Massively Multiplayer", "TPS", "RPG"],
                    "image_url": "https://steamcdn-a.akamaihd.net/steam/apps/1623730/header.jpg"
                },
                {
                    "id": 12,
                    "name": "Helidiver2",
                    "genres": ["Open world", "Massively Multiplayer", "TPS", "Indie"],
                    "image_url": "https://steamcdn-a.akamaihd.net/steam/apps/553850/header.jpg"
                },
                {
                    "id": 13,
                    "name": "Dota 2",
                    "genres": ["Action", "Sports", "Strategy"],
                    "image_url": "https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg"
                },
                {
                    "id": 14,
                    "name": "GTA 5",
                    "genres": ["Action", "Massively Multiplayer", "Open world", "TPS", "Adventure", "Racing"],
                    "image_url": "https://steamcdn-a.akamaihd.net/steam/apps/271590/header.jpg"
                },
                {
                    "id": 15,
                    "name": "Destiny 2",
                    "genres": ["Open world", "Massively Multiplayer", "MMORPG", "FPS"],
                    "image_url": "https://steamcdn-a.akamaihd.net/steam/apps/1085660/header.jpg"
                },
                {
                    "id": 16,
                    "name": "Stardew Valley",
                    "genres": ["RPG", "Indie", "Simulation"],
                    "image_url": "https://steamcdn-a.akamaihd.net/steam/apps/413150/header.jpg"
                },
                {
                    "id": 17,
                    "name": "Dead by Daylight",
                    "genres": ["Horror", "Survival", "TPS", "Action"],
                    "image_url": "https://steamcdn-a.akamaihd.net/steam/apps/381210/header.jpg"
                },
                {
                    "id": 18,
                    "name": "Monster Hunter: World",
                    "genres": ["Action", "RPG", "Open world", "TPS", "Adventure"],
                    "image_url": "https://steamcdn-a.akamaihd.net/steam/apps/582010/header.jpg"
                },
                {
                    "id": 19,
                    "name": "Counter-Strike 2",
                    "genres": ["FPS", "Action"],
                    "image_url": "https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg"
                },
                {
                    "id": 20,
                    "name": "TEKKEN 8",
                    "genres": ["Actions", "Massively Multiplayer"],
                    "image_url": "https://steamcdn-a.akamaihd.net/steam/apps/1778820/header.jpg"
                }
            ]
        );
    }, []);

    const [baseGameList, setBaseGameList] = useState([])

    const baseGames = useCallback(async () => {
        const baseGamesResult = await getBaseGames();
        setBaseGameList(baseGamesResult);
        return baseGamesResult
    }, [])

    useEffect(() => {
        baseGames();
    }, [])


    const [selectedItems, setSelectedItems] = useState(Array(20).fill(false))
    const [isSelectedEnough, setIsSelectedEnough] = useState(false);

    const selectedItemCount = useMemo(() => {
        return selectedItems.filter(item => item).length;
    }, [selectedItems]);


    const selectedStyle = {filter: "drop-shadow(3px 3px 4px #7c7c7c) brightness(50%)"};
    const notSelectedEnoughButtonStyle = {backgroundColor: "#AAB6CA"};

    const handleItemClick = useCallback((index) => {
        setSelectedItems(prevState => {
            const newState = [...prevState];
            newState[19 - index] = !newState[19 - index];
            return newState;
        });
    }, []);

    const handleDoneButtonClick = useCallback(() => {
        if (isSelectedEnough) {
            setPageNum(3);
        }
    }, [isSelectedEnough]);

    useEffect(() => {
        if (selectedItemCount >= 3) setIsSelectedEnough(true);
        else setIsSelectedEnough(false);
    }, [selectedItemCount]);

    const selectedGameNames = useMemo(() => {
        return baseGameList.filter((_, index) => selectedItems[index]);
        // return imageUrlList.filter((_, index) => selectedItems[index]);
    }, [selectedItems, baseGameList])

    useEffect(() => {
        setSelectedBaseGames(selectedGameNames);
    }, [selectedGameNames]);


    return (
        <div id={"PageGameSelect"}>
            <div className={"content-wrapper"}>
                <div className={"header-wrapper"}>
                    <div className={"header-text"}>
                        {nickName}님, <br/>당신은 어떤 게임을 좋아하시나요?
                    </div>
                    <div className={"doneButton"} style={!isSelectedEnough ? notSelectedEnoughButtonStyle : {}}
                         onClick={handleDoneButtonClick}>
                        <div className={"leftArea"}><AiOutlineArrowRight/></div>
                        <div className={"buttonText"}> 3개 이상 선택해주세요 ({selectedItemCount})</div>
                        <div className={"arrowIcon"}><AiOutlineArrowRight/></div>
                    </div>
                </div>
                <div className={"game-wrapper"}>
                    {baseGameList.slice().reverse().map((game, index) => {
                        return (
                            <div key={index} className={"game-item"} onClick={() => handleItemClick(index)}>
                                <img className={"game-image"} src={game.image_url}
                                     style={selectedItems[19 - index] ? selectedStyle : {}}/>
                                {selectedItems[19 - index] && <img src={likeIcon} className={"image-selected"}/>}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default PageGameSelect;
