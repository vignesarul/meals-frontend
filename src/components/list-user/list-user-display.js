import React from 'react';

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
  componentWillMount(props) {
    console.log(props)
    if (!this.props.usersList) {
      this.props.retriveUsers();
    }
  }

  render() {
    return (<div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a href="#" className="active nav-link"><i className="fa fa-home fa-home"></i>&nbsp;Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Item</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Item</a>
              </li>
            </ul>
            <hr className=""/>
            <div className="hidden-md-down card">
              <div className="card-block">
                <h4>Card title</h4>
                <p>Some quick example text to build on the card title .</p>
              </div>
            </div>
          </div>
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
                      <td><i className="fa fa-edit"></i> <i className="fa fa-trash"></i></td>
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