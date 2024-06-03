import React from 'react';
import PageStart from "./PageStart";
import "./PageWrapper.scss"
import {useState, useMemo, useEffect} from "react";
import PageInputInformation from "./PageInputInformation";
import PageGameSelect from "./PageGameSelect";
import PageRecommendation from "./PageRecommendation";

function PageWrapper(props) {

    const [pageNum, setPageNum] = useState(0);
    const [nickName, setNickName] = useState("");
    const [sex, setSex] = useState(0);
    const [age, setAge] = useState(0);
    const [selectedBaseGames, setSelectedBaseGames] = useState([]);

    const [userInformation, setUserInformation] = useState({});

    // useEffect(() => {
    //     console.log(nickName, sex, age);
    // }, [nickName, sex, age]);
    
    const renderedPage = useMemo(() => {
        switch (pageNum) {
            case 0:
                return <PageStart pageNum={pageNum} setPageNum={setPageNum}/>;
            case 1:
                return <PageInputInformation nickName={nickName} setNickName={setNickName} sex={sex} setSex={setSex}
                                             age={age} setAge={setAge} setPageNum={setPageNum}
                                             userInformation={userInformation}
                                             setUserInformation={setUserInformation}/>;
            case 2:
                return <PageGameSelect setPageNum={setPageNum} nickName={nickName} selectedBaseGames={selectedBaseGames}
                                       setSelectedBaseGames={setSelectedBaseGames}/>;
            case 3:
                return <PageRecommendation nickName={nickName} selectedBaseGames={selectedBaseGames}/>
            default:
                return <PageStart pageNum={pageNum}/>;
        }
    }, [pageNum]);

    return (
        <div id={"PageWrapper"}>
            {renderedPage}
        </div>
    );
}

export default PageWrapper;
