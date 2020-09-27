import React from 'react';
import Header from '../../components/Header';
import CustomerComponent from '../../components/Customer';

const Customer = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
      <CustomerComponent />
      </div>
    </>
  );
};

export default Customer;