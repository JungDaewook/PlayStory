import React, {useCallback} from "react";
import "./CustomSelect.scss";
import downArrow from "../assets/chevron-down.png"

const DEFAULT = 'SELECT'

function CustomSelect({value, setValue, placeholder, options}) {

    return (
        <div className={'CustomSelect'}>
            <select value={value}
                    onChange={e => setValue(e.target.value !== DEFAULT ? e.target.value : '')}
                    className={`${value ? '' : 'not-selected'}`}>
                <option value={DEFAULT}>{placeholder}</option>
                {options.map(item => <option value={item}>
                    {item}
                </option>)}
            </select>
            <img src={downArrow} alt={'select'}/>
        </div>

    );
}

export default CustomSelect;
