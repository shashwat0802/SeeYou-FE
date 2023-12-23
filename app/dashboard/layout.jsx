import React from 'react';
import Navbar from '../components/Navbar';

const layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
