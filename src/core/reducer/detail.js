import mock from './mock'

export default function(state = mock.initialState, id) {
    return {
        product: state.find(product => product.id === id)
    }
}
