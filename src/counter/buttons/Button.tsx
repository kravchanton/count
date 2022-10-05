import React from 'react';
import style from './buttons.module.css'

type buttonType = {
    increment?: () => void
    reset?: () => void
    set?: () => void
    disabled: boolean
    title: string
}
export const Button = (props: buttonType) => {

    const selectButton = (title: string) => {
        switch (title) {
            case 'inc': {
                return <button className={style.button} disabled={props.disabled}
                               onClick={props.increment}>{props.title}</button>;
            }
            case 'reset': {
                return <button className={style.button} onClick={props.reset}>{props.title}</button>
            }
            case 'set': {
                return <button className={style.button} onClick={props.set}>{props.title}</button>

            }


        }

    }
    return <div>
        {selectButton(props.title)}
    </div>
}
