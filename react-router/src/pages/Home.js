import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      Home Component
      <Outlet />
    </div>
  );
};

export default Home;
