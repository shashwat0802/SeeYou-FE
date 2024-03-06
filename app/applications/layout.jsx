import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

const layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;