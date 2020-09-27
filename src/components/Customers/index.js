import React from 'react';
import { Link } from 'react-router-dom';

const AllCustomers = () => {
  return (
    <>

    <nav className="navbar navbar-light bg-light">
    <div className="container">
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <Link to="/create-user"><button className="btn btn-success">Create User</button></Link>
        <Link to="/allocate-plot"><button className="btn btn-success">Allocate Plot</button></Link>
    </div>
    </nav>

    <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Customer ID</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
    <tr>
      <th scope="row">1</th>
      <td>9uy998</td>
      <td>Mark Adeniran</td>
      <td>@mdo</td>
      <td>Otto 1 otondo street</td>
      <td>123456789</td>
      <td><Link to="/customer">View</Link>  | <button className="bg-danger">Delete</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>9uy998</td>
      <td>Mark Adeniran</td>
      <td>@mdo</td>
      <td>Otto 1 otondo street</td>
      <td>123456789</td>
      <td><Link to="/customer">View</Link>  | <button className="bg-danger">Delete</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>9uy998</td>
      <td>Mark Adeniran</td>
      <td>@mdo</td>
      <td>Otto 1 otondo street</td>
      <td>123456789</td>
      <td><Link to="/customer">View</Link>  | <button className="bg-danger">Delete</button></td>
    </tr>
  </tbody>
    </table>
    </>
  );
};

export default AllCustomers;
