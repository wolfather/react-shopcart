const initialState = [
    {
        id: '1',
        images: {
            thumb: 'assets/product-thumb-1.jpg',
            medium: 'assets/product-medium-1.jpg'
        },
        name: 'product 1',
        price: '11,22',
        categoryId: 'cat-4',
        shortDescription: 'A short description of product 1'
    },
    {
        id: '2',
        images: {
            thumb: 'assets/product-thumb-2.jpg',
            medium: 'assets/product-medium-2.jpg'
        },
        name: 'product 2',
        price: '22,22',
        categoryId: 'cat-3',
        shortDescription: 'A short description of product 2'
    },
    {
        id: '3',
        images: {
            thumb: 'assets/product-thumb-3.jpg',
            medium: 'assets/product-medium-3.jpg'
        },
        name: 'product 3',
        price: '33,22',
        categoryId: 'cat-2',
        shortDescription: 'A short description of product 3'
    }
]

const categories = [
    {
        id: 'cat-1',
        alias: 'category A',
        active: false
    },
    {
        id: 'cat-2',
        alias: 'category B',
        active: true
    },
    {
        id: 'cat-3',
        alias: 'category C',
        active: true
    },
    {
        id: 'cat-4',
        alias: 'category D',
        active: true
    },
]
const mock = {
    initialState, categories
}
export default mock