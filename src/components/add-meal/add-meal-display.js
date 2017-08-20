import React from 'react';
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
class AddMeal extends React.Component {
  render() {
    return (<div className="py-5">
      <div className="container">
        <div className="row">
          <Sidebar userId={this.props.user.id}/>
          <div className="col-md-9">
            <div className="card mx-auto w-100">

              <div className="card-header">Add Meal</div>
              {(this.props.info || this.props.error) ? <AlertMessage message={this.props}/>: ''}
              <div className="card-block">

                <form onSubmit={this.props.createNewMeal}>
                  <input type="hidden" name="userId" value={this.props.match.params.userId}/>
                  <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="text" className="form-control"/>
                  </div>
                  <div className="form-group">
                    <label>calories</label>
                    <input type="number" name="calories" className="form-control"/>
                  </div>
                  <div className="form-group">
                    <label>date</label>
                    <input type="date" name="date" className="form-control"/>
                  </div>
                  <div className="form-group">
                    <label>time</label>
                    <input type="text" pattern="^(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9]$" name="time" className="form-control"/>
                  </div>
                  <button type="submit" disabled={this.props.isLoading} className="btn btn-primary">Add Meal</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
export default AddMeal;