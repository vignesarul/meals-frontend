import React from 'react';
import { Link } from 'react-router-dom'

const SideBar = (props) => (<div className="col-md-3">
  <ul className="nav nav-pills flex-column">
    <li className="nav-item">
      <Link to={`/users/${props.userId}/meals/create`} className="nav-link"><i className="fa fa-home"></i> Add Meal</Link>
    </li>
    <li className="nav-item">
      <Link to='/users' className="nav-link"><i className="fa fa-home"></i> List Users</Link>
    </li>
    <li className="nav-item">
      <Link to={`/users/edit/${props.userId}`} className="nav-link"><i className="fa fa-home"></i> Edit my profile</Link>
    </li>
    <li className="nav-item">
      <Link to={`/users/${props.userId}/meals`} className="nav-link"><i className="fa fa-home"></i> View my meals</Link>
    </li>
  </ul>
  <hr className=""/>
  <div className="hidden-md-down card">
    <div className="card-block">
      <h4>Card title</h4>
      <p>Some quick example text to build on the card title .</p>
    </div>
  </div>
</div>);

export default SideBar;