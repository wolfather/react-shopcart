import { categories, products } from './mock'
const initialState = {
    categories,
    categoryProducts: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'GET_PRODUCTS_BY_CATEGORY':
            return {...state, categoryProducts: products.filter(product => (
                product.categoryId === action.payload && 
                product.active === true
            ))}

        case 'GET_CATEGORIES_ACTIVES':
            return {...state, categories: state.categories.filter(category => category.active === true)}
        
        default: return state
    }
}