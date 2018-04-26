import { products } from './mock'

const initialState = {
    productsState: products,
    //shopcartState: [],
    //errorsState: [],
    //detailState: {}
}

export default function(state= initialState, action) {
    switch(action.type) {
        case 'GET_PRODUCTS': 
            const activeProducts = state.productsState.filter(product => {
                return product.active === true;
            })
            console.log('TESTE',activeProducts)
            return {...state, productsState: activeProducts}

        default: return state;
    }
}