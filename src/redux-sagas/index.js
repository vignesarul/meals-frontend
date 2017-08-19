import { call, put, takeEvery, all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([watchCreateAccount()])
}

function* watchCreateAccount() {
  console.log('Watching create account');
  yield takeEvery('CREATE_ACCOUNT', createAccountAsync);
}

function* createAccountAsync() {
  const [response] = yield call(dummy, { name: 'Vignes' });
  console.log(response);
  yield put({type: 'SAGA_DONE', response})
}

const dummy = (data) => {
  return data;
};