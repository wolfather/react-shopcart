
export default function(state = [], action) {
    switch(action.type) {
        case 'ADD_PRODUCT_TO_CART':
            const newState = state.concat({id: action.payload, qtd: 1})
            return newState

        default: return state
    }
}