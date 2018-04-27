import { products } from './mock'

const initialState = {
    shopcartState: [],
    //errorsState: [],
}
export default function(state = initialState, action) {
    switch(action.type) {
        case 'ADD_PRODUCT_TO_CART':
            const productInCart = products.find(product => {
                return product.id === action.payload
            })
            return [...state, {...productInCart, qtd: 1}]
            
            
        case 'SUM_PRODUCT_IN_CART':
            const sumProduct = initialState.map(product => {
                if(product.id === action.payload) {
                    return product.qtd += 1
                }
            })
            return [...state, sumProduct]

        default: return state
    }
}