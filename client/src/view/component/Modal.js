import React, {useCallback, useState} from 'react';
import './Modal.scss';
import likeIcon from "../assets/LikeIcon.png";
import {AiFillLike, AiOutlineClose, AiOutlineLike} from "react-icons/ai";
import {clickGame, clickLike} from "../../api/ApiFuncs";

const Modal = ({game, imageUrl, gameName, gameDescription, onClose}) => {
    const [liked, setLiked] = useState(false);

    const clickGameByServer = useCallback(async (gameId) => {
        await clickGame(gameId);
    }, []);

    const clickLikeByServer = useCallback(async (gameId) => {
        await clickLike(gameId);
    }, []);

    const onClickLikeButton = useCallback((gameId) => {
        setLiked(true);
        clickLikeByServer(gameId)
        return;
    }, [])

    const onClickGameHeader = useCallback((gameId) => {
        clickGameByServer(gameId)
        window.open(`https://store.steampowered.com/app/${game.app_id}/${gameName}/`, '_blank');
        return;
    }, [])

    if (!game) return;
    return (
        <div id="Modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img className="game-image" src={imageUrl}
                     alt={gameName}/>
                <div className="header-wrapper">
                    <div className={"modal-game-header"} onClick={() => onClickGameHeader(game.app_id)}>{gameName}</div>
                    {liked ? (
                        <AiFillLike className={"like-button-liked"}/>
                    ) : (
                        <AiOutlineLike className={"like-button"} onClick={() => onClickLikeButton(game.app_id)}/>
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
