import React from 'react';
import Header from '../../components/Header';
// import Footer from '../../components/Footer';
import Customers from '../../components/Customers';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
      <Customers />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
