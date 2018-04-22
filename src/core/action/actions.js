export const categoryAction = categoryId => {
    console.log('action category teste', categoryId)
    return {
        type: 'GET_PRODUCTS_BY_CATEGORY',
        payload: categoryId
    }
}

export const addProductToCart = productId => {
    console.log(productId)
    
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: productId
    }
}

//export {categoryAction, getProductSelected}
