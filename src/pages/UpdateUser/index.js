import React from 'react';
import Header from '../../components/Header';
import UpdateUserComponent from '../../components/UserUpdate';

const UpdateUser = () => {
  return (
    <>
      <Header />
      <div className="container">
      <UpdateUserComponent />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default UpdateUser;
