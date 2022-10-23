import {combineReducers, createStore} from "redux";
import {counterReducers} from "./counter-reducer";





const rootReducers = combineReducers({
    counter: counterReducers
}
)

export type appStateType = ReturnType<typeof rootReducers>


export const store = createStore(rootReducers)

type appStoreType = typeof store