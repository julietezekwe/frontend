import React from 'react';

const CreateUser = () => {
  return (
    <>
    <h2>Create a new Customer</h2>
    <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">FullName</label>
      <input type="email" className="form-control" id="fullName"/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Customer Id</label>
    <input type="text" className="form-control" id="customerId" placeholder="6788yy"/>
  </div>
  <div className="form-group">
    <label for="inputAddress">Email</label>
    <input type="text" className="form-control" id="email" placeholder="email@emil.com"/>
  </div>

  <div className="form-group">
    <label for="inputAddress2">Address</label>
    <input type="text" className="form-control" id="address" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Phone Number</label>
    <input type="text" className="form-control" id="number" placeholder="Apartment, studio, or floor"/>
  </div>

  <button type="submit" className="btn btn-primary">Create Customer</button>
</form>
    </>
  );
};

export default CreateUser;
