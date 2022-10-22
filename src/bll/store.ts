import {combineReducers, createStore} from "redux";
import {counterReducers} from "./counter-reducer";





const rootReducers = combineReducers({
    counter: counterReducers
}
)


export const store = createStore(rootReducers)