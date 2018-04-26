export const getProductsByCategory = categoryId => {
    return {
        type: 'GET_PRODUCTS_BY_CATEGORY',
        payload: categoryId
    }
}

export const addProductToCart = productId => {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: productId
    }
}

export const getProductById = productId => {
    return {
        type: 'ASYNC_GET_PRODUCT_BY_ID',
        payload: productId
    }
}

export const getProducts = () => {
    return {
        type: 'GET_PRODUCTS',
        payload: '*'
    }
}