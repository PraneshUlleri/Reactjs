import { Box } from '@mui/material';
import React, { Fragment } from 'react';
import Banner from './Banner';
import NavBar from './NavBar';

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Banner />
    </Fragment>
  );
};

export default Home;
