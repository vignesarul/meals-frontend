import { connect } from 'react-redux'
import EditUser from 'components/edit-user/edit-user-display';
import _ from 'lodash';

// Map Redux state to component props
function mapStateToProps(state) {
  return _.cloneDeep(state);
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    getUser: (userId) => {
      const requestBody = {
        userId,
      };
      dispatch({ type: 'GET_USER', requestBody})
    },
    updateUser: (e) => {
      e.preventDefault();
      const requestBody = {
        firstName: e.target.firstName.value,
        expectedCalories: Number(e.target.expectedCalories.value),
        userId: e.target.userId.value
      };
      dispatch({ type: 'EDIT_USER', requestBody})
    }
  }
}

// Connected Component
const EditUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser);

export default EditUserContainer;