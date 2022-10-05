import {Display} from "./display/Display";
import style from "./buttons/buttons.module.css";
import {Button} from "./buttons/Button";
import React, {useState} from "react";
import {DisplaySetting} from "./display/DisplaySetting";

export type settingType = {
    changeMaxValue: (e: EventTarget & HTMLInputElement) => void
    changeStartValue: (e: EventTarget & HTMLInputElement) => void
    maxValue: number
    startValue: number
    setValue: () => void
    disabled: boolean

}

export const Setting = (props: settingType) => {

    return (
        <div className="Setting">
            <DisplaySetting maxValue={props.maxValue} changeMaxValue={props.changeMaxValue} startValue={props.startValue}
                            changeStartValue={props.changeStartValue}/>
            <div className={style.buttons}><Button title={'set'} set={props.setValue} disabled={props.disabled}/></div>


        </div>
    );
}