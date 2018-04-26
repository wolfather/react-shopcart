import {
    createStore,
    compose,
    applyMiddleware
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleWare from 'redux-saga'

import combineReducers from '../reducer'
import root from '../sagas';

const logger = createLogger()

const history = createHistory()
const saga = createSagaMiddleWare()
const initialState = window.__INITIAL_STATE__


const STORE = createStore(
    combineReducers,
    compose(
        applyMiddleware(
            logger,
            routerMiddleware(history),
            saga
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
saga.run(root)



export default STORE
