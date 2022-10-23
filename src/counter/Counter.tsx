import React, {useState} from "react";
import {Display} from "./display/Display";
import style from "./buttons/buttons.module.css";
import {Button} from "./buttons/Button";

export type counterType = {
    reset?: () => void
    count: number
    disabled: boolean
}
export const Counter = (props: counterType) => {

    return (
        <div className="counter">
            <Display count={props.count} disabled={props.disabled}/>
            <div className={style.buttons}><Button disabled={props.disabled}  title={"inc"}/>
                <Button disabled={props.disabled} reset={props.reset} title={"reset"}/></div>


        </div>
    );
}