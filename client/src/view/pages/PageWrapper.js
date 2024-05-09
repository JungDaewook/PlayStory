import React from 'react';
import Page1 from "./Page1";
import "./PageWrapper.scss"
import {useState, useMemo} from "react";

function PageWrapper(props) {

    const pageNum = useState(0);

    const renderedPage = useMemo(() => {
        switch (pageNum) {
            case 0:
                return <Page1 pageNum={pageNum}/>;
            default:
                return <Page1 pageNum={pageNum}/>;
        }
    }, []);

    return (
        <div id={"PageWrapper"}>
            {renderedPage}
        </div>
    );
}

export default PageWrapper;
