import React from 'react';
import "./PageStart.scss"
import {useCallback} from "react";

function PageStart({pageNum, setPageNum}) {

    const onClickDoneButton = useCallback(() => {
        setPageNum(1);
    }, []);

    return (
        <div id="Page1">
            <div className="titleWrapper">
                <div className="mainTitle1">
                    Play
                </div>
                <div className="mainTitle2">
                    Story
                </div>
            </div>
            <div className="subTitle">
                당신의 다음 게임을 알려드릴게요.
            </div>
            <div className="startButtonContainer" onClick={onClickDoneButton}>
                <div className="startButtonText">
                    시작하기
                </div>
            </div>
        </div>
    );
}

export default PageStart;
