import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import productsReducer from './products'
import detailReducer from './detail'
import categoryReducer from './category'
import shopcartReducer from './shopcart'

export default combineReducers({
    products: productsReducer,
    //detail: detailReducer,
    category: categoryReducer,
    shopcart: shopcartReducer,

    routing: routerReducer
})