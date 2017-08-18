import { connect } from 'react-redux'
import ListUser from 'components/list-user/list-user-display';

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
const ListUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUser);

export default ListUserContainer;