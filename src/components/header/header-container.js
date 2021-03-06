import { connect } from 'react-redux'
import Header from 'components/header/header-display';
import _ from 'lodash';

// Action
//const increaseAction = { type: 'increase' }

// Map Redux state to component props
function mapStateToProps(state) {
  return _.cloneDeep(state);
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    doLogout: (history) => {
      history.push(`/auth/login`);
      dispatch({ type: 'LOGOUT' })
    }
  }
}

// Connected Component
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;