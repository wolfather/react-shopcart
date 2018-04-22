import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import productsReducer from './products'
import categoryReducer from './category'
import shopcartReducer from './shopcart'

export default combineReducers({
    products: productsReducer,
    category: categoryReducer,
    shopcart: shopcartReducer,
    routing: routerReducer
})