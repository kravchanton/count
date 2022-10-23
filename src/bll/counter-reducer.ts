const initialState = {
    count: 0,
    maxValue: 5,
}


type InitialStateType = typeof initialState
export const counterReducers = (state: InitialStateType = initialState, action: IncValuesActionType | SetMaxValueActionType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE" :
            return {
                ...state, count: state.count + 1
            }

        case "INC-VALUE" :
            return {
                ...state, maxValue
            }

        default:
            return state
    }
}

export const incValueAC = () => ({type: "INC-VALUE"} as const)
export const setMaxValueAC = (maxValue: number) => ({type: "SET-MAX-VALUE", maxValue} as const)

export type IncValuesActionType = ReturnType<typeof incValueAC>
export type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>
