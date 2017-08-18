import React from 'react';
const CreateUser = () => (<div className="py-5">
  <div className="container">
    <div className="row mx-auto w-100">
      <div className="col-12 col-lg-5 col-xl-5 mx-auto col-md-8 align-self-center">
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

export default CreateUser;