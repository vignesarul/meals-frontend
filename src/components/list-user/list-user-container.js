import { connect } from 'react-redux'
import ListUser from 'components/list-user/list-user-display';
import _ from 'lodash';

// Map Redux state to component props
function mapStateToProps(state) {
  return _.cloneDeep(state);
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    retriveUsers: () => {
      const requestBody = {};
      dispatch({ type: 'GET_USERS', requestBody})
    }
  }
}

// Connected Component
const ListUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUser);

export default ListUserContainer;