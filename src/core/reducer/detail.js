import { products } from './mock'
import axios from 'axios'

const initialState = {
    //productsState: products,
    shopcartState: [],
    //errorsState: [],
    detailState: {}
}
//axios.get('https://rawgit.com/wolfather/react-shopcart/master/src/core/reducer/mock.js')
//    .then(response => console.log(response.data))

export default function(state = initialState, action) {
    switch(action.type) {
        case 'GET_PRODUCT_BY_ID':
            const detail= products.find(product => product.id === action.payload)
            console.log(state);
            return {...state, detailState: detail}
        break;
        default: return state
            
    }
}