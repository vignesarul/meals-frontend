import React from 'react';
const AlertMessage = (props) => {
  let message = props.message.info;
  console.log(props)
  if(props.message.error) {
    message = `${props.message.error.code}: ${(props.message.error.source || {}).parameter || ''}`;
  }
  return <div className={`alert alert-${props.message.error ? 'danger' : 'info'}`} role="alert">
    <p className="mb-0">{message}</p>
  </div>
};

const VerifyAccount = (props) => {
  return (<div className="py-5">
    <div className="container">
      <div className="row mx-auto w-100">
        <div className="col-12 col-lg-5 col-xl-5 mx-auto col-md-8 align-self-center">
          <div className="card mx-auto w-100">
            <div className="card-header">Verify Email</div>
            {(props.info || props.error) ? <AlertMessage message={props}/>: ''}
            <div className="card-block">
              <form onSubmit={props.verifyAccount}>
                <input type="hidden" name="userId" value={props.userId}/>
                <div className="form-group">
                  <label>Verification code</label>
                  <input type="text" name="code" className="form-control"/>
                </div>
                <button type="submit" disabled={props.isLoading} className="btn btn-primary">Verify Email</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
}

export default VerifyAccount;