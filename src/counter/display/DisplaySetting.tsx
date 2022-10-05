import React, {useState} from 'react';
import style from './Display.module.css'

type displayType = {
    changeMaxValue: (e: EventTarget & HTMLInputElement) => void
    changeStartValue: (e: EventTarget & HTMLInputElement) => void
    maxValue: number
    startValue: number
}


export const DisplaySetting = (props: displayType) => {


    return <div className={style.display}>
        <div className={style.row}>
            <span className={style.textBlue}>max value</span>
            <input
                onChange={e => props.changeMaxValue(e.currentTarget)}
                className={style.input}
                type="number"
                value={props.maxValue}/></div>
        <div className={style.row}>
            <span className={style.textBlue}>start value</span>
            <input className={style.input}
                   onChange={e => props.changeStartValue(e.currentTarget)}
                   value={props.startValue}
                   type="number"/></div>
    </div>

}