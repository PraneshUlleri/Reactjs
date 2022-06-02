import { styled } from '@mui/material';
import { Box } from '@mui/material';
import React, { Fragment } from 'react';
import Banner from './Banner';
import NavBar from './NavBar';

const Compond = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Compond>
        <Banner />
      </Compond>
    </Fragment>
  );
};

export default Home;
