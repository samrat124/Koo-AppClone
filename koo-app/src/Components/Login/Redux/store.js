import {legacy_createStore,applyMiddleware} from "redux"
import { myReducer } from "./Reducer";
import {logger} from "redux-logger"

export let store=legacy_createStore(myReducer,applyMiddleware(logger));