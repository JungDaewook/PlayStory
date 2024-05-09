import React, {useState, useMemo} from 'react';
import "./PageInputInformation.scss";
import CustomSelect from "../component/CustomSelect";

function PageInputInformation({nickName, setNickName, sex, setSex, age, setAge}) {

    const [inputNickName, setInputNickName] = useState('');
    const [inputSex, setInputSex] = useState('');
    const [inputAge, setInputAge] = useState('');

    const sexOption = useMemo(() => {
        return ["남성", "여성"]
    }, [])


    return (
        <div id={"PageInputInformation"}>
            <div className={"header"}>
                당신에 대해 알려주세요!
            </div>
            <div className={"information-input-wrapper nickname"}>
                <div className={"information-input-header nickname"}>
                    닉네임
                </div>
                <input value={inputNickName} onChange={e => setInputNickName(e.target.value)} placeholder={"닉네임 입력"}/>
            </div>
            <div className={"information-input-wrapper sex"}>
                <div className={"information-input-header sex"}>
                    성별
                </div>
                <CustomSelect value={inputSex} setValue={setInputSex} options={sexOption} placeholder={"성별 입력"}/>
            </div>
            <div className={"information-input-wrapper sex"}>
                <div className={"information-input-header sex"}>
                    나이
                </div>
                <input value={inputAge} onChange={e => setInputAge(e.target.value)} placeholder={"나이 입력"}/>
            </div>
            <div className={"doneButtonWrapper"}>
                <div className={"doneButton"}>
                    입력 완료
                </div>
            </div>
        </div>
    );
}

export default PageInputInformation;
