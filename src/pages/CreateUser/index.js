import React from 'react';
import Header from '../../components/Header';
import CreateUserComponent from '../../components/CreateUser';

const CreateUser = () => {
  return (
    <>
      <Header />
      <div className="container">
      <CreateUserComponent />
      </div>
    </>
  );
};

export default CreateUser;
