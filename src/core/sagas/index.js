import { delay } from 'redux-saga'
import { call, takeLatest, takeEvery, put } from 'redux-saga/effects';

function* asyncGetProductById(action) {
    console.log(action)
    //yield delay(1000)

    yield put({
        type: 'GET_PRODUCT_BY_ID',
        payload: action.payload
    });
}

export default function* root() {
    yield [
        takeEvery('ASYNC_GET_PRODUCT_BY_ID', asyncGetProductById)
    ]
}