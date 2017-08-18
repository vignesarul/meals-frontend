import { connect } from 'react-redux'
import ForgotPassword from 'components/forgot-password/forgot-password-display';

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
const ForgotPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);

export default ForgotPasswordContainer;