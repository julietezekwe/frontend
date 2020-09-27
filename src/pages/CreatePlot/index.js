import React from 'react';
import Header from '../../components/Header';
import CreatePlotComponent from '../../components/CreatePlot';

const CreatePlot = () => {
  return (
    <>
      <Header />
      <div className="container">
      <CreatePlotComponent />
      </div>
    </>
  );
};

export default CreatePlot;
