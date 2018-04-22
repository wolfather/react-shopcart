import mock from './mock'
console.table(mock.initialState)

export default function(state = mock.initialState, action) {
    switch(action.type) {
        case 'GET_PRODUCTS_BY_CATEGORY':
            console.log(action)
            
            return state.filter(product => {
                return product.categoryId === action.payload
            })
            break
        
        default: 
            return state//.filter(product => product.categoryId === action.payload)
            break
    }
}