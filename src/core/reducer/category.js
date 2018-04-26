import mock from './mock'
//console.table(mock.initialState)

export default function(state = mock.initialState, action) {
    switch(action.type) {
        case 'GET_PRODUCTS_BY_CATEGORY':
            //console.log(action)
            const filtered = state.filter(product => product.categoryId === action.payload)
            return filtered
        
        default: return state
    }
}