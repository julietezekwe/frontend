import React from 'react';

const CreatePlot = () => {
  return (
    <>
    <h2>Allocate plot to a Customer</h2>
    <form>
  <div className="form-group">
    <label for="inputAddress2">Customer Id</label>
    <input type="text" className="form-control" id="customerId" placeholder="6788yy"/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Plot Number</label>
    <input type="text" className="form-control" id="customerId" placeholder="6788yy"/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Plot Dimension</label>
    <input type="text" className="form-control" id="customerId" placeholder="6788yy"/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Estate Name</label>
    <input type="text" className="form-control" id="customerId" placeholder="6788yy"/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Estate Address</label>
    <input type="text" className="form-control" id="customerId" placeholder="6788yy"/>
  </div>
  <button type="submit" className="btn btn-primary">Allocate</button>
</form>
    </>
  );
};

export default CreatePlot;
