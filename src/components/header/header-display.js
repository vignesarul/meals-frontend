import React from 'react';

class Header extends React.Component {
  componentWillMount() {
    console.log('loaded header', this.props.token);
    if (!this.props.token) {
      this.props.history.push('/auth/login');
    }
  }

  render() {
    return (<nav className="navbar navbar-expand-md navbar-light bg-faded">
      <div className="container">
        <a className="navbar-brand" href="">Calorie Tracker</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={() => { this.props.doLogout(this.props.history) }}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>);
  }
}

export default Header;