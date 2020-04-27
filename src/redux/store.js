import { combineReducers, createStore, applyMiddleware } from 'redux'
import { sceneReducer, meshReducer } from "./reducers"

import logger from 'redux-logger'

const store = createStore(
    combineReducers({
        sceneReducer,
        meshReducer,
    }),
    applyMiddleware(logger)
)

export default store
