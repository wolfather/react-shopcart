import {
    createStore,
    compose,
    applyMiddleware
} from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleWare from 'redux-saga'

import combineReducers from '../reducer'
import mock from '../reducer/mock'

const logger = createLogger()

const history = createHistory()
const saga = createSagaMiddleWare()

const STORE = createStore(
    combineReducers,
    {},
    compose(
        applyMiddleware(
            logger,
            routerMiddleware(history),
            saga
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default STORE
