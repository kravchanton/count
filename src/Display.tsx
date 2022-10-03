import React from 'react';
import style from './Display.module.css'

type displayType = {
 count: number
}

export const Display = (props: displayType) => {
return <div className={style.display}>
 <span className={props.count > 4 ? style.textRed : style.textBlue}>{props.count}</span>
</div>

 }