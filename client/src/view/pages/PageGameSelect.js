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
                "genres": [
                    "AOS"
                ],
                "image_url": "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg"
            },
            {
                "id": 2,
                "name": "FIFA Online",
                "genres": [
                    "Sports"
                ],
                "image_url": "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg"
            },
            {
                "id": 3,
                "name": "Battle Ground",
                "genres": [
                    "FPS",
                    "Survival"
                ],
                "image_url": "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg"
            },
            {
                "id": 4,
                "name": "Sudden Attack",
                "genres": [
                    "FPS"
                ],
                "image_url": "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg"
            },
            {
                "id": 5,
                "name": "OverWatch 2",
                "genres": [
                    "FPS"
                ],
                "image_url": "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg"
            },
            {
                "id": 6,
                "name": "Valorant",
                "genres": [
                    "FPS",
                    "Action"
                ],
                "image_url": "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg"
            },
            {
                "id": 7,
                "name": "Lostark",
                "genres": [
                    "MMORPG"
                ],
                "image_url": "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg"
            },
            {
                "id": 8,
                "name": "Maple Story",
                "genres": [
                    "MMORPG"
                ],
                "image_url": "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg"
            },
            {
                "id": 9,
                "name": "StarCraft Remaster",
                "genres": [
                    "AOS"
                ],
                "image_url": "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg"
            },
            {
                "id": 10,
                "name": "DUNGEON & FIGHTER",
                "genres": [
                    "RPG",
                    "Massively Multiplayer",
                    "Action"
                ],
                "image_url": "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg"
            },
            {
                "id": 11,
                "name": "Palworld",
                "genres": [
                    "Open world",
                    "Massively Multiplayer",
                    "TPS",
                    "RPG"
                ],
                "image_url": "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg"
            },
            {
                "id": 12,
                "name": "Helidiver2",
                "genres": [
                    "Open world",
                    "Massively Multiplayer",
                    "TPS",
                    "Indie"
                ],
                "image_url": "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg"
            },
            {
                "id": 13,
                "name": "TEKKEN 8",
                "genres": [
                    "Action",
                    "Massively Multiplayer"
                ],
                "image_url": "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg"
            },
            {
                "id": 14,
                "name": "Dota 2",
                "genres": [
                    "Action",
                    "Sports",
                    "Strategy"
                ],
                "image_url": "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg"
            },
            {
                "id": 15,
                "name": "GTA 5",
                "genres": [
                    "Action",
                    "Massively Multiplayer",
                    "Open world",
                    "TPS",
                    "Adventure",
                    "Racing"
                ],
                "image_url": "http://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg"
            },
            {
                "id": 16,
                "name": "Destiny 2",
                "genres": [
                    "Open world",
                    "Massively Multiplayer",
                    "MMORPG",
                    "FPS"
                ],
                "image_url": "https://cdn.akamai.steamstatic.com/steam/apps/1085660/header.jpg?t=1715101527"
            },
            {
                "id": 17,
                "name": "Stardew Valley ",
                "genres": [
                    "RPG",
                    "Indie",
                    "Simulation"
                ],
                "image_url": "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg?t=1711128146"
            },
            {
                "id": 18,
                "name": "Dead by Daylight",
                "genres": [
                    "Horrow",
                    "Survival",
                    "TPS",
                    "Action"
                ],
                "image_url": "https://cdn.akamai.steamstatic.com/steam/apps/381210/header.jpg?t=1712842368"
            },
            {
                "id": 20,
                "name": "Monster Hunter: World\n",
                "genres": [
                    "Action",
                    "RPG",
                    "Open world",
                    "TPS",
                    "Adventure"
                ],
                "image_url": "https://cdn.akamai.steamstatic.com/steam/apps/582010/header.jpg?t=1711328912"
            },
            {
                "id": 21,
                "name": "Counter-Strike 2 ",
                "genres": [
                    "FPS",
                    "Action"
                ],
                "image_url": "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1698860631"
            }
        ]);
    }, []);

    // const baseGames = useMemo(async () => {
    //     const baseGamesList = await getBaseGames();
    //     return baseGamesList
    // }, [])
    //
    // useEffect(() => {
    //     console.log(baseGames);
    // }, [baseGames]);


    const [selectedItems, setSelectedItems] = useState(Array(imageUrlList.length).fill(false))
    const [isSelectedEnough, setIsSelectedEnough] = useState(false);

    const selectedItemCount = useMemo(() => {
        return selectedItems.filter(item => item).length;
    }, [selectedItems]);


    const selectedStyle = {filter: "drop-shadow(3px 3px 4px #7c7c7c) brightness(50%)"};
    const notSelectedEnoughButtonStyle = {backgroundColor: "#AAB6CA"};

    const handleItemClick = useCallback((index) => {
        setSelectedItems(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
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
        return imageUrlList.filter((_, index) => selectedItems[index]);
    }, [selectedItems, imageUrlList])

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
                    {imageUrlList.map((game, index) => {
                        return (
                            <div key={index} className={"game-item"} onClick={() => handleItemClick(index)}>
                                <img className={"game-image"} src={game.image_url}
                                     style={selectedItems[index] ? selectedStyle : {}}/>
                                {selectedItems[index] && <img src={likeIcon} className={"image-selected"}/>}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default PageGameSelect;
