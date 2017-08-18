import React from 'react';

const EditUser = () => (<div className="py-5">
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
          <div className="card mx-auto w-100">

            <div className="card-header">Create Account</div>
            <div className="alert alert-danger" role="alert">
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <p className="mb-0">Incorrect password</p>
            </div>
            <div className="card-block">

              <form className="">
                <div className="form-group">
                  <label>Name</label>
                  <input type="email" className="form-control"/>
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control"/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);

export default EditUser;