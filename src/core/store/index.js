import {
    createStore,
    compose,
    applyMiddleware
} from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import combineReducers from '../reducer'
import mock from '../reducer/mock'
const logger = createLogger()

const history = createHistory()
const STORE = createStore(
    combineReducers,
    compose(
        applyMiddleware(
            logger,
            routerMiddleware(history)
        )
    ),
)

export default STORE
