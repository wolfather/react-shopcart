import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import products from './products'
import category from './category'
import shopcart from './shopcart'
import detail from './detail'

export default combineReducers({
    routing: routerReducer,
    products,
    category,
    shopcart,
    detail
})