export const categoryAction = categoryId => {
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