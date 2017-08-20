import { connect } from 'react-redux'
import SideBar from 'components/sidebar/sidebar-display';

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
const SideBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);

export default SideBarContainer;