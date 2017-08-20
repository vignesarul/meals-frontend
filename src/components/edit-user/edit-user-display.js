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
class EditUser extends React.Component {
  componentWillMount() {
    this.props.getUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(props) {
    if(!props.isLoading && this.refs.firstName.value === '') {
      this.refs.firstName.value = ((props.userToEdit || {}).attributes || {}).firstName || '';
      this.refs.expectedCalories.value = ((props.userToEdit || {}).attributes || {}).expectedCalories || '';
    }
  }

  render() {
    return (<div className="py-5">
      <div className="container">
        <div className="row">
          <Sidebar userId={this.props.user.id}/>
          <div className="col-md-9">
            <div className="card mx-auto w-100">

              <div className="card-header">Edit User</div>
              {(this.props.info || this.props.error) ? <AlertMessage message={this.props}/>: ''}
              <div className="card-block">

                <form onSubmit={this.props.updateUser}>
                  <input type="hidden" name="userId" value={(this.props.userToEdit || {}).id}/>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="string" name="firstName" className="form-control" ref="firstName"/>
                  </div>
                  <div className="form-group">
                    <label>Daily calorie goal</label>
                    <input type="number" name="expectedCalories" className="form-control" ref="expectedCalories"/>
                  </div>
                  <button type="submit" disabled={this.props.isLoading} className="btn btn-primary">Update user</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
export default EditUser;