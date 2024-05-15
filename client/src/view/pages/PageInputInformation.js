import React, {useState, useMemo, useEffect, useCallback} from 'react';
import "./PageInputInformation.scss";
import CustomSelect from "../component/CustomSelect";
import {createUser} from "../../api/ApiFuncs";

function PageInputInformation({
                                  nickName,
                                  setNickName,
                                  sex,
                                  setSex,
                                  age,
                                  setAge,
                                  setPageNum,
                                  userInformation,
                                  setUserInformation
                              }) {

    const [inputNickName, setInputNickName] = useState('');
    const [inputSex, setInputSex] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [isInputComplete, setIsInputComplete] = useState(false);

    const sexOption = useMemo(() => {
        return ["남성", "여성"]
    }, []);

    useEffect(() => {
        setNickName(inputNickName);
    }, [inputNickName]);

    useEffect(() => {
        setSex(inputSex);
    }, [inputSex]);

    useEffect(() => {
        setAge(inputAge);
    }, [inputAge]);

    useEffect(() => {
        if (inputNickName && inputSex && inputAge) {
            setIsInputComplete(true);
        } else {
            setIsInputComplete(false);
        }
    }, [inputNickName, inputSex, inputAge]);

    const focusStyle = {border: "2px solid #0351FF"};
    const nonCompleteStyle = {backgroundColor: "#AAB6CA"};

    const onClickDoneButton = useCallback(async () => {
        if (isInputComplete) {
            const gender = inputSex == "남성" ? 'M' : 'F'
            const userInformationResponse = await createUser(Number(inputAge), gender, inputNickName);
            setUserInformation(userInformationResponse);
            setPageNum(2);
        }
    }, [isInputComplete, inputAge, inputSex, inputNickName]);

    return (
        <div id={"PageInputInformation"}>
            <div className={"header"}>
                당신에 대해 알려주세요!
            </div>
            <div className={"information-input-wrapper nickname"}>
                <div className={"information-input-header nickname"}>
                    닉네임
                </div>
                <input value={inputNickName} onChange={(e) => {
                    setInputNickName(e.target.value)
                }} placeholder={"닉네임 입력"} style={inputNickName ? focusStyle : {}}/>
            </div>
            <div className={"information-input-wrapper sex"}>
                <div className={"information-input-header sex"}>
                    성별
                </div>
                <CustomSelect value={inputSex} setValue={setInputSex} options={sexOption}
                              placeholder={"성별 입력"}/>
            </div>
            <div className={"information-input-wrapper sex"}>
                <div className={"information-input-header sex"}>
                    나이
                </div>
                <input pattern="[0-9]*"
                       value={inputAge} onChange={(e) => {
                    setInputAge(e.target.value.replace(/\D/, ''))
                }}
                       placeholder={"나이 입력"}
                       style={inputAge ? focusStyle : {}}
                       maxLength="2"
                />
            </div>
            <div className={"doneButtonWrapper"}>
                <div className={"doneButton"} style={!isInputComplete ? nonCompleteStyle : {}}
                     onClick={onClickDoneButton}>
                    입력 완료
                </div>
            </div>
        </div>
    );
}

export default PageInputInformation;
