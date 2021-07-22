import {all, call, put, takeLatest} from 'redux-saga/effects'
import actions from './actions';
import {getRequest, deleteRequest} from '../../config/axiosClient'
import {message} from 'antd';

function* deleteProduct(action) {
  try {
    const response = yield call(() => deleteRequest(`products/${action.payload.product_id}`));
    const responseGet = yield call(() => getRequest('products'));
    yield put({type: actions.DELETE_PRODUCT_SUCCESS, payload: responseGet.data});
  } catch (error) {
    yield put({type: actions.DELETE_PRODUCT_FAILURE});
    message.error('Something Went Wrong');
  }
}

function* getProductList(action) {
  try {
    const response = yield call(() => getRequest(`products?page=${action.payload.page}`));
    yield put({type: actions.GET_PRODUCT_SUCCESS, payload: response.data});
  } catch (error) {
    yield put({type: actions.GET_PRODUCT_FAILURE});
    message.error(error.response.data.message);
  }
}


export default function* rootSaga() {
  yield all([takeLatest(actions.GET_PRODUCT, getProductList)]);
  yield all([takeLatest(actions.DELETE_PRODUCT, deleteProduct)]);
}
