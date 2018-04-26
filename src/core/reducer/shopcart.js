import { products } from './mock'

const initialState = {
    //productsState: products,
    shopcartState: [],
    //errorsState: [],
    //detailState: {}
}
export default function(state = initialState, action) {
    switch(action.type) {
        case 'ADD_PRODUCT_TO_CART':
            //const newState = state.shopcartState.concat({id: action.payload, qtd: 1})
            
            return [...state, {shopcartState: {id: action.payload, qtd: 1}}]

        default: return state
    }
}