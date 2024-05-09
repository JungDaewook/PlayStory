import React from 'react';
import Page1 from "./Page1";
import "./PageWrapper.scss"
import {useState, useMemo} from "react";
import PageInputInformation from "./PageInputInformation";
import PageGameSelect from "./PageGameSelect";

function PageWrapper(props) {

    const [pageNum, setPageNum] = useState(0);
    const [nickName, setNickName] = useState('');
    const [sex, setSex] = useState(0);
    const [age, setAge] = useState(0);


    const renderedPage = useMemo(() => {
        switch (pageNum) {
            case 0:
                // return <Page1 pageNum={pageNum}/>;
                // return <PageInputInformation nickName={nickName} setNickName={setNickName} sex={sex} setSex={setSex}
                //                              age={age} setAge={setAge}/>
                return <PageGameSelect/>
            default:
                return <Page1 pageNum={pageNum}/>;
        }
    }, [pageNum]);

    return (
        <div id={"PageWrapper"}>
            {renderedPage}
        </div>
    );
}

export default PageWrapper;
