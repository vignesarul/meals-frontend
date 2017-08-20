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

class Login extends React.Component {
  componentWillReceiveProps(props) {
    if ((props.user || {}).id) {
      this.props.history.push(`/users/${props.user.id}/meals`);
    }
  }

  render() {
    return (<div className="py-5">
      <div className="container">
        <div className="row mx-auto w-100">
          <div className="col-12 col-lg-5 col-xl-5 mx-auto col-md-8 align-self-center">
            <div className="card mx-auto w-100">

              <div className="card-header">Login</div>
              {(this.props.info || this.props.error) ? <AlertMessage message={this.props}/>: ''}
              <div className="card-block">

                <form onSubmit={this.props.performLogin}>
                  <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control"/>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control"/>
                  </div>
                  <button type="submit" disabled={this.props.isLoading} className="btn btn-primary">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Login;