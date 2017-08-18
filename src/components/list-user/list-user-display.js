import React from 'react';
const ListUser = () => (<div className="py-5">
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
          <div className="card-header">Featured</div>
          <div className="card-block">
            <table className="table">
              <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry</td>
                <td>the Bird</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>);

export default ListUser;