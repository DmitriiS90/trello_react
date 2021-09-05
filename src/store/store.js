import { combineReducers, createStore } from "redux"
import boardListReducer from "./boardList-reducer"

const reducers = combineReducers({
    boardList: boardListReducer
})

const store = createStore(reducers)

window.store = store

export default store