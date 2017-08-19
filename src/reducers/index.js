import _ from 'lodash';
// Reducer

const updateLocalStorage = (state) => {
  localStorage.setItem('state', JSON.stringify(state));
  return state;
};

function rootReducer(state, action) {
  switch (action.type) {
    case 'CREATE_ACCOUNT':
      return _.merge(_.cloneDeep(state), { isLoading : true, error: '', info: '' });
    case 'CREATE_ACCOUNT_RESPONSE':
      if (action.response.errors.length > 0) {
        return _.merge(_.cloneDeep(state), { isLoading : false, error: action.response.errors[0] });
      }
      return updateLocalStorage(_.merge(_.cloneDeep(state), {
        isLoading : false,
        info: 'Enter the verification code sent to your email',
        userId: action.response.data[0].id,
      }));
    case 'VERIFY_ACCOUNT':
      return _.merge(_.cloneDeep(state), { isLoading : true, error: '', info: '' });
    case 'VERIFY_ACCOUNT_RESPONSE':
      if (action.response.errors.length > 0) {
        return _.merge(_.cloneDeep(state), { isLoading : false, error: action.response.errors[0] });
      }
      return updateLocalStorage(_.merge(_.cloneDeep(state), {
        isLoading : false,
        info: 'Account verified. Login to dashboard',
      }));
    case 'LOGIN':
      return _.merge(_.cloneDeep(state), { isLoading : true, error: '', info: '' });
    case 'LOGIN_RESPONSE':
      if (action.response.errors.length > 0) {
        return _.merge(_.cloneDeep(state), { isLoading : false, error: action.response.errors[0] });
      }
      return updateLocalStorage(_.merge(_.cloneDeep(state), {
        isLoading : false,
        user: action.response.includes[0].data[0],
        token: action.response.data[0].attributes.access_token,
      }));
    case 'GET_USERS':
      return _.merge(_.cloneDeep(state), { isLoading : true, error: '', info: '' });
    case 'GET_USERS_RESPONSE':
      if (action.response.errors.length > 0) {
        return _.merge(_.cloneDeep(state), { isLoading : false, error: action.response.errors[0] });
      }
      return updateLocalStorage(_.merge(_.cloneDeep(state), {
        isLoading : false,
        usersList: action.response.data,
      }));
    default:
      return state
  }
}

export default rootReducer;