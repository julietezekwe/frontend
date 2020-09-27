import React from 'react';
import { Link } from 'react-router-dom';

const Customer = () => {
  return (
    <>
    <div className="card w-50">
  <div className="card-body">
    <h5 className="card-title">Mark Daniel</h5>
    <p className="card-text">Address: With supporting text bel</p>
    <p className="card-text">Phone Number: With supporting text bel</p>
    <p className="card-text">Email: With supporting text bel</p>
    <Link to="/edit"><td>Update user detail</td></Link> 
  </div>
</div>
<br></br>
<h3 className="card-title text-center">Plots Allocations</h3>
<br></br>
  <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Plot ID</th>
      <th scope="col">Customer ID</th>
      <th scope="col">Plot Number</th>
      <th scope="col">Plot Dimension</th>
      <th scope="col">Estate Name </th>
      <th scope="col">Estate Address</th>
      <th scope="col">Allocation Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>9uy998</td>
      <td>100B</td>
      <td>1000sqm</td>
      <td>Grace land estate</td>
      <td>Gberigbe Ikorodu</td>
      <td>12/06/2009</td>
      <Link to="/re-allocate"><td>Re-allocate</td></Link> 
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>9uy998</td>
      <td>100B</td>
      <td>1000sqm</td>
      <td>Grace land estate</td>
      <td>Gberigbe Ikorodu</td>
      <td>12/06/2009</td>
      <Link to="/re-allocate"><td>Re-allocate</td></Link> 
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>9uy998</td>
      <td>100B</td>
      <td>1000sqm</td>
      <td>Grace land estate</td>
      <td>Gberigbe Ikorodu</td>
      <td>12/06/2009</td>
      <Link to="/re-allocate"><td>Re-allocate</td></Link> 
    </tr>
  </tbody>
</table>
    </>
  );
};

export default Customer;
