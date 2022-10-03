import React from 'react';
import style from './buttons.module.css'

type buttonType = {
    increment?: () => void
    reset?: () => void
    count: number
    title: string
}
export const Button = (props: buttonType) => {
    return <div>
        {props.title === 'inc' ? <button className={style.button} disabled={props.count > 4} onClick={props.increment}>{props.title}</button> :
            <button className={style.button} onClick={props.reset}>{props.title}</button>}

    </div>
}
