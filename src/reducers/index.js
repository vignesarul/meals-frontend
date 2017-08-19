import _ from 'lodash';
// Reducer
function rootReducer(state, action) {
  switch (action.type) {
    case 'CREATE_ACCOUNT':
      return _.merge(_.cloneDeep(state), { isLoading : true, error: '', info: '' });
    case 'CREATE_ACCOUNT_RESPONSE':
      if (action.response.errors.length > 0) {
        return _.merge(_.cloneDeep(state), { isLoading : false, error: action.response.errors[0] });
      }
      return _.merge(_.cloneDeep(state), {
        isLoading : false,
        info: 'Enter the verification code sent to your email',
        userId: action.response.data[0].id,
      });
    case 'VERIFY_ACCOUNT':
      return _.merge(_.cloneDeep(state), { isLoading : true, error: '', info: '' });
    case 'VERIFY_ACCOUNT_RESPONSE':
      if (action.response.errors.length > 0) {
        return _.merge(_.cloneDeep(state), { isLoading : false, error: action.response.errors[0] });
      }
      return _.merge(_.cloneDeep(state), {
        isLoading : false,
        info: 'Account verified. Login to dashboard',
      });
    case 'LOGIN':
      return _.merge(_.cloneDeep(state), { isLoading : true, error: '', info: '' });
    case 'LOGIN_RESPONSE':
      console.log('im gere', action);
      if (action.response.errors.length > 0) {
        return _.merge(_.cloneDeep(state), { isLoading : false, error: action.response.errors[0] });
      }
      return _.merge(_.cloneDeep(state), {
        isLoading : false,
        user: action.response.includes[0].data[0],
      });
    default:
      return state
  }
}

export default rootReducer;