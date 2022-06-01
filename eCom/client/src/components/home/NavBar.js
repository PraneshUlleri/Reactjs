import { Typography } from '@mui/material';
import { styled } from '@mui/material';
import { Box } from '@mui/material';
import { textAlign } from '@mui/system';
import { style } from '@mui/system';
import React from 'react';
import { navData } from '../../constants/data';

const Compond = styled(Box)`
  display: flex;
  margin: 55px 50px 0 50px;
  justify-content: space-between;
`;
const Container = styled(Box)`
padding 12px 8px;
text-align: center`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const NavBar = () => {
  return (
    <Compond>
      {navData.map((data) => (
        <Container>
          <img src={data.url} alt="nav" style={{ width: 64 }} />
          <Text>{data.text}</Text>
        </Container>
      ))}
    </Compond>
  );
};

export default NavBar;
