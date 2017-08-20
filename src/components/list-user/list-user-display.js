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
class ListUser extends React.Component {
  componentWillMount() {
    this.props.retriveUsers();
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
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  {(this.props.usersList || []).map((user) => {
                    return (<tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.attributes.firstName}</td>
                      <td>{user.attributes.email}</td>
                      <td>
                        <Link to={`/users/edit/${user.id}`}><i className="fa fa-edit"></i></Link>&nbsp;
                        <Link to={`/users/edit/${user.id}`}><i className="fa fa-trash"></i></Link>&nbsp;
                        <Link to={`/users/${user.id}/meals/create`}><i className="fa fa-plus-square"></i></Link>&nbsp;
                        <Link to={`/users/${user.id}/meals`}><i className="fa fa-list"></i></Link>
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

export default ListUser;