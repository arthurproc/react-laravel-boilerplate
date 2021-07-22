import { all } from 'redux-saga/effects';
import authenticateSaga from './Authenticate/apiSaga';
import productSaga from './Product/apiSaga';

// Here you can include all the saga which you write for components
export default function* rootSaga(){
  yield all([
    authenticateSaga(),
    productSaga(),
  ]);
}
