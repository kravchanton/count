import React from 'react';
import style from './Display.module.css'

type displayType = {
 count: number
 disabled: boolean
}

export const Display = (props: displayType) => {
return <div className={style.display}>
 <span className={props.disabled ? style.textRed : style.textBlue}>{props.count}</span>
</div>

 }