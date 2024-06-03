import React, {useCallback, useState} from 'react';
import './Modal.scss';
import likeIcon from "../assets/LikeIcon.png";
import {AiFillLike, AiOutlineClose, AiOutlineLike} from "react-icons/ai";

const Modal = ({game, imageUrl, gameName, gameDescription, onClose}) => {
    const [liked, setLiked] = useState(false);

    const onClickLikeButton = useCallback(() => {
        setLiked(true);
        //like했을 때 api 추가
    }, [])

    const onClickGameHeader = useCallback(() => {
        //click 했을 때 api 추가
        window.open(`https://store.steampowered.com/app/${game.id}/${gameName}/`, '_blank');
        return;
    }, [])

    if (!game) return;
    return (
        <div id="Modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img className="game-image" src={imageUrl}
                     alt={gameName}/>
                <div className="header-wrapper">
                    <div className={"modal-game-header"} onClick={onClickGameHeader}>{gameName}</div>
                    {liked ? (
                        <AiFillLike className={"like-button-liked"} onClick={onClickLikeButton}/>
                    ) : (
                        <AiOutlineLike className={"like-button"} onClick={onClickLikeButton}/>
                    )}
                </div>
                <div className={"divider"}></div>
                <div className="game-description">
                    {gameDescription}
                </div>
                <div className="button-wrapper">
                    <AiOutlineClose className={"modal-close-button"} onClick={onClose}/>
                </div>
            </div>
        </div>
    );
};

export default Modal;
