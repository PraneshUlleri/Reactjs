import React from 'react';

import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
  :hover {
    color: #000000;
  }
`;
const Header = () => {
  const logoURL =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

  return (
    <div>
      <StyledHeader>
        <Toolbar>
          <Box>
            <img src={logoURL} alt="logo"></img>
          </Box>
        </Toolbar>
      </StyledHeader>
    </div>
  );
};

export default Header;
