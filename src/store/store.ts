import { combineReducers, createStore } from "redux"
import boardListReducer from "./boardList-reducer"

const reducers = combineReducers({
    boardList: boardListReducer
})

type reducerType = typeof reducers
export type AppStateType = ReturnType<reducerType>

const store = createStore(reducers)

export default store