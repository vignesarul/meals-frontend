import { connect } from 'react-redux'
import EditUser from 'components/edit-user/edit-user-display';

// Action
//const increaseAction = { type: 'increase' }

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    //email: state.email
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    //onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
const EditUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser);

export default EditUserContainer;