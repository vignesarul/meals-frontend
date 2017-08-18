import { connect } from 'react-redux'
import CreateUser from 'components/create-user/create-user-display';

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
const CreateUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);

export default CreateUserContainer;