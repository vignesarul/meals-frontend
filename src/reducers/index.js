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
    case 'EDIT_USER':
      return _.merge(_.cloneDeep(state), { isLoading : true, error: '', info: '' });
    case 'EDIT_USER_RESPONSE':
      if (action.response.errors.length > 0) {
        return _.merge(_.cloneDeep(state), { isLoading : false, error: action.response.errors[0] });
      }
      return updateLocalStorage(_.merge(_.cloneDeep(state), {
        isLoading : false,
        info: 'User profile updated',
      }));
    case 'GET_USER':
      return _.merge(_.cloneDeep(state), { isLoading : true, error: '', info: '' });
    case 'GET_USER_RESPONSE':
      if (action.response.errors.length > 0) {
        return _.merge(_.cloneDeep(state), { isLoading : false, error: action.response.errors[0] });
      }
      console.log('got user', _.merge(_.cloneDeep(state), {
        isLoading : false,
        userToEdit: action.response.data[0],
      }));
      return updateLocalStorage(_.merge(_.cloneDeep(state), {
        isLoading : false,
        userToEdit: action.response.data[0],
      }));
    case 'GET_MEALS':
      return _.merge(_.cloneDeep(state), { isLoading : true, error: '', info: '' });
    case 'GET_MEALS_RESPONSE':
      if (action.response.errors.length > 0) {
        return _.merge(_.cloneDeep(state), { isLoading : false, error: action.response.errors[0], mealsList: null });
      }
      console.log('got meals', action.response.data)
      return updateLocalStorage(_.merge(_.cloneDeep(state), {
        isLoading : false,
        mealsList: _.isEmpty(action.response.data) ? null : action.response.data,
      }));
    case 'ADD_MEAL':
      return _.merge(_.cloneDeep(state), { isLoading : true, error: '', info: '' });
    case 'ADD_MEAL_RESPONSE':
      if (action.response.errors.length > 0) {
        return _.merge(_.cloneDeep(state), { isLoading : false, error: action.response.errors[0] });
      }
      console.log('added meal', action.response.data)
      return _.merge(_.cloneDeep(state), {
        isLoading : false,
        info: 'Meal Added successfully'
      });
    case 'LOGOUT':
      return updateLocalStorage({ isLoading : false, error: '', info: '' })
    default:
      return state
  }
}

export default rootReducer;