import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./counter/Counter";
import {Setting} from "./counter/Setting";
import {useSelector} from "react-redux";
import {appStateType} from "./bll/store";

function App() {
// @ts-ignore
    const count = useSelector<appStateType, number>(state => state.counter.count)
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
/*
        setCount(startValue)*/
        disabledButton(maxValue)
    }
    const increment = () => {

/*        setCount(++count)*/
        localStorage.setItem('count', JSON.stringify(count));
        if (count >= maxValue) {
            setDisabled(true)
        } else setDisabled(false)
    }
    const reset = () => {
        localStorage.setItem('count', JSON.stringify(0));
/*        setCount(0)*/
        if (0 >= maxValue) {
            setDisabled(true)
        } else setDisabled(false)


    }
    useEffect(() => {
       let localCount = localStorage.getItem('count')
        if(localCount) {
/*            setCount(JSON.parse(localCount))*/
        }
    }, [])

    return <div className='App'>
        <Setting setValue={setValue} changeMaxValue={changeMaxValue} changeStartValue={changeStartValue}
                 startValue={startValue} maxValue={maxValue} disabled={disabled}/>
        <Counter reset={reset} count={count} disabled={disabled}/>
    </div>


}

export default App;
