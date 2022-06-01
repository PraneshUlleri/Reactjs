import { styled } from '@mui/material';
import { Box } from '@mui/material';
import { style } from '@mui/system';
import React from 'react';
import { navData } from '../../constants/data';

const Compond = styled(Box)`
  display: flex;
  margin: 55pz 130px 0 130px;
  justify-content: space-between;
`;
const Container = styled(Box)`
padding 12px 8px`;

const NavBar = () => {
  return (
    <Compond>
      {navData.map((data) => (
        <Container>
          <img src={data.url} alt="nav" style={{ width: 64 }} />
          <p>{data.text}</p>
        </Container>
      ))}
    </Compond>
  );
};

export default NavBar;
