import React from 'react';

const UpdatePlot = () => {
  return (
    <>
    <h2>Re-Allocate plot to another Customer</h2>
    <form>
  <div className="form-group">
    <label for="inputAddress2">New Customer Id</label>
    <input type="text" className="form-control" id="customerId" placeholder="6788yy"/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Existing Plot Number</label>
    <input type="text" className="form-control" id="customerId" placeholder="6788yy"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Re-allocate</button>
</form>
    </>
  );
};

export default UpdatePlot;
