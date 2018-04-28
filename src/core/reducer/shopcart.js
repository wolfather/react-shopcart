import { products } from './mock'

const initialState = {
    shopcartState: [],
    //errorsState: [],
}
export default function(state = initialState, action) {
    const product = products.find(item => item.id === action.payload)

    //const productFoundById = state.findIndex(pIndex => pIndex.id === product.id)

    switch(action.type) {
        case 'ADD_PRODUCT_TO_CART':
            return [...state, {...product, qtd: 1}]
 
        case 'SUM_PRODUCT_IN_CART':
            const sumProd = state.findIndex(pIndex => pIndex.id === product.id)
            state[sumProd].qtd += 1
            
            return [...state]
        
        case 'SUB_PRODUCT_IN_CART':
            const subProd = state.findIndex(pIndex => pIndex.id === product.id)
            if(state[subProd].qtd >= 2) {
                state[subProd].qtd -= 1
            }
            return [...state]

        default: return state
    }
}