import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios'
import _ from 'lodash';

export default function* rootSaga() {
  yield all([
    watchCreateAccount(),
    watchVerifyAccount(),
  ])
}

function* watchCreateAccount() {
  console.log('Watching create account');
  yield takeEvery('CREATE_ACCOUNT', createAccountAsync);
}

function* createAccountAsync(action) {
  const response = yield call(callApi, 'post', 'http://localhost:3001/api/v1/users', action.requestBody);
  yield put({type: 'CREATE_ACCOUNT_RESPONSE', response})
}

function* watchVerifyAccount() {
  console.log('Watching verify account');
  yield takeEvery('VERIFY_ACCOUNT', verifyAccountAsync);
}

function* verifyAccountAsync(action) {
  const response = yield call(callApi, 'put',
    `http://localhost:3001/api/v1/users/${action.requestBody.userId}/activate`,
    _.omit(action.requestBody, 'userId')
  );
  yield put({type: 'VERIFY_ACCOUNT_RESPONSE', response})
}

const callApi = (method, url, body) => {
  return axios[method](url,body)
    .then(result => result.data)
    .catch((err) => {
      console.log(err.response.data);
      return err.response.data;
    })
};