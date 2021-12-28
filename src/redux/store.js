import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import userReducer from './user'

const rootReducer = combineReducers({
    user: userReducer,
})

const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )

export default function generateStore() {
    return store;
}