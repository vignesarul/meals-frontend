import { call, put, takeEvery, all, select } from 'redux-saga/effects';
import axios from 'axios'
import _ from 'lodash';

const apiLink = 'http://localhost:3001/api/v1';
const getToken = (state) => state.token;
export default function* rootSaga() {
  yield all([
    watchCreateAccount(),
    watchVerifyAccount(),
    watchLogin(),
    watchGetUsers(),
  ])
}

function* watchCreateAccount() {
  yield takeEvery('CREATE_ACCOUNT', createAccountAsync);
}

function* createAccountAsync(action) {
  const response = yield call(callApi, 'post', '/users', action.requestBody);
  yield put({type: 'CREATE_ACCOUNT_RESPONSE', response})
}

function* watchVerifyAccount() {
  yield takeEvery('VERIFY_ACCOUNT', verifyAccountAsync);
}

function* verifyAccountAsync(action) {
  const response = yield call(callApi, 'put', `/users/${action.requestBody.userId}/activate`,
    _.omit(action.requestBody, 'userId')
  );
  yield put({type: 'VERIFY_ACCOUNT_RESPONSE', response})
}

function* watchLogin() {
  yield takeEvery('LOGIN', loginAsync);
}

function* loginAsync(action) {
  const response = yield call(callApi, 'post', '/auth/login', action.requestBody);
  yield put({type: 'LOGIN_RESPONSE', response})
}

function* watchGetUsers() {
  yield takeEvery('GET_USERS', getUsersAsync);
}

function* getUsersAsync(action, state) {
  const token = yield select(getToken);
  const response = yield call(callApi, 'get', '/users', undefined, { headers: {
    authorization: token
  }});
  yield put({type: 'GET_USERS_RESPONSE', response})
}

const callApi = (method, url, body, config = {}) => {

  return axios[method](`${apiLink}${url}`, body || config)
    .then(result => result.data)
    .catch((err) => {
      console.log(err.response.data);
      return err.response.data;
    })
};