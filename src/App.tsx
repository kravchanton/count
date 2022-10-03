import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Display} from "./Display";
import {Button} from "./Button";
import style from './buttons.module.css'
function App() {

    let [count, setCount] = useState(0)
    const increment = () => {

        setCount(++count)
    }
    const reset = () => {

        setCount(0)
    }
    return (
        <div className="App">
            <Display count={count}/>
            <div className={style.buttons}><Button count={count} increment={increment} title={"inc"}/>
                <Button count={count} reset={reset} title={"reset"}/></div>


        </div>
    );
}

export default App;
