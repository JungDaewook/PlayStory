import React from 'react';
import "./PageGameSelect.scss";
import {useState, useMemo, useCallback, useEffect} from "react";
import likeIcon from "../assets/LikeIcon.png";
import {AiOutlineArrowRight} from "react-icons/ai";

function PageGameSelect({setPageNum, nickName}) {

    const imageUrlList = useMemo(() => {
        return ([
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
            "http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg"
        ]);
    }, []);

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
                    {imageUrlList.map((url, index) => {
                        return (
                            <div key={index} className={"game-item"} onClick={() => handleItemClick(index)}>
                                <img className={"game-image"} src={url}
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
