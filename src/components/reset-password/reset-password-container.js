import { connect } from 'react-redux'
import ResetPassword from 'components/reset-password/reset-password-display';

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
const ResetPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);

export default ResetPasswordContainer;