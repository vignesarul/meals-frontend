import { connect } from 'react-redux'
import AddMeal from 'components/add-meal/add-meal-display';
import _ from 'lodash';

// Map Redux state to component props
function mapStateToProps(state) {
  return _.cloneDeep(state);
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    createNewMeal: (e) => {
      e.preventDefault();
      const requestBody = {
        text: e.target.text.value,
        calories: Number(e.target.calories.value),
        date: e.target.date.value,
        time: e.target.time.value,
        userId: e.target.userId.value,
      };
      dispatch({ type: 'ADD_MEAL', requestBody})
    }
  }
}

// Connected Component
const AddMealContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMeal);

export default AddMealContainer;