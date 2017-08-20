import React from 'react';
import { Link } from 'react-router-dom'
import Sidebar from 'components/sidebar/sidebar-container';

const AlertMessage = (props) => {
  let message = props.message.info;
  if(props.message.error) {
    message = `${props.message.error.code}: ${(props.message.error.source || {}).parameter || ''}`;
  }
  return <div className={`alert alert-${props.message.error ? 'danger' : 'info'}`} role="alert">
    <p className="mb-0">{message}</p>
  </div>
};
class ListMeals extends React.Component {
  componentDidMount() {
    this.props.retriveMeals(this.props.match.params.userId);
  }

  componentWillReceiveProps(props) {
    if (props.match.params.userId !== this.props.match.params.userId) {
      this.props.retriveMeals(props.match.params.userId);
    }
  }

  render() {
    return (<div className="py-5">
      <div className="container">
        <div className="row">
          <Sidebar userId={this.props.user.id}/>
          <div className="col-md-9">
            <div className="card">
              <div className="card-header">Users</div>
              {(this.props.info || this.props.error) ? <AlertMessage message={this.props}/>: ''}
              <div className="card-block">
                <table className="table">
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>Desc</th>
                    <th>Calories</th>
                    <th>DailyGoal</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  {console.log('mealsList', this.props.mealsList)}
                  {(this.props.mealsList || []).map((meal) => {
                    return (<tr key={meal.id}>
                      <td>{meal.id}</td>
                      <td>{meal.attributes.text}</td>
                      <td>{meal.attributes.calories}</td>
                      <td><i className={meal.attributes.dailyGoal ? 'fa fa-check' : 'fa fa-close'}
                             style={{color: meal.attributes.dailyGoal ? 'green' : 'red'}}></i></td>
                      <td>
                        <Link to={`/users/${meal.userId}/meals/${meal.id}`}><i className="fa fa-edit"></i></Link> &nbsp;
                        <Link to={`/users/${meal.userId}/meals/${meal.id}`}><i className="fa fa-trash"></i></Link>
                      </td>
                    </tr>);
                  })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default ListMeals;