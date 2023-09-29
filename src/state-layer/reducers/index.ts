import { combineReducers } from "redux"
import { formR } from "./formR"

const baseReducer = {
    formR,
}

export const persistReducers = {
    formR,
}

export type BaseReducer = typeof baseReducer

export const combinedReducers = combineReducers(baseReducer)