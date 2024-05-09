import React from 'react';
import "./Page1.scss"

function Page1({pageNum}) {
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
            <div className="startButtonContainer">
                <div className="startButtonText">
                    시작하기
                </div>
            </div>
        </div>
    );
}

export default Page1;
