import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Display} from "./counter/display/Display";
import {Button} from "./counter/buttons/Button";
import style from './counter/buttons/buttons.module.css'
import {Counter} from "./counter/Counter";
import {Setting} from "./counter/Setting";

function App() {

    let [count, setCount] = useState(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    let [disabled, setDisabled] = useState<boolean>(false)
    const disabledButton = (maxValue: number) => {
        if (count >= maxValue) {
            setDisabled(true)
        } else setDisabled(false)

    }

    const changeMaxValue = (e: EventTarget & HTMLInputElement) => {
        setMaxValue(Number(e.value))
        disabledButton(Number(e.value))
    }
    const changeStartValue = (e: any) => {

        setStartValue(e.value)
    }
    const setValue = () => {

        setCount(startValue)
        disabledButton(maxValue)
    }
    const increment = () => {

        setCount(++count)
        localStorage.setItem('count', String(count));
        if (count >= maxValue) {
            setDisabled(true)
        } else setDisabled(false)
    }
    const reset = () => {
        localStorage.setItem('count', String(0));
        setCount(0)
        if (0 >= maxValue) {
            setDisabled(true)
        } else setDisabled(false)


    }
    useEffect(() => {
        setCount(Number(localStorage.getItem('count')))
    })

    return <div className='App'>
        <Setting setValue={setValue} changeMaxValue={changeMaxValue} changeStartValue={changeStartValue}
                 startValue={startValue} maxValue={maxValue} disabled={disabled}/>
        <Counter reset={reset} increment={increment} count={count} disabled={disabled}/>
    </div>


}

export default App;
