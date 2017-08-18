import React from 'react';
const ForgotPassword = () => (<div className="py-5">
  <div className="container">
    <div className="row mx-auto w-100">
      <div className="col-12 col-lg-5 col-xl-5 mx-auto col-md-8 align-self-center">
        <div className="card mx-auto w-100">

          <div className="card-header">Forgot Password</div>
          <div className="alert alert-success" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <p className="mb-0">Email sent successfully</p>
          </div>
          <div className="card-block">

            <form className="">
              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email"/>
              </div>
              <button type="submit" className="btn btn-primary">Send verification email</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>);

export default ForgotPassword;