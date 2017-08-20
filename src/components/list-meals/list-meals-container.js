import { connect } from 'react-redux'
import ListMeals from 'components/list-meals/list-meals-display';
import _ from 'lodash';

// Map Redux state to component props
function mapStateToProps(state) {
  return _.cloneDeep(state);
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    retriveMeals: (userId) => {
      const requestBody = {
        userId
      };
      dispatch({ type: 'GET_MEALS', requestBody})
    }
  }
}

// Connected Component
const ListMealsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMeals);

export default ListMealsContainer;