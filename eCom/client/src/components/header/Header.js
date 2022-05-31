import React from 'react';

import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import SearchComp from './SearchComp';

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
  :hover {
    color: #000000;
  }
`;

const BoxComponent = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const Plusimage = styled('img')({
  width: 10,
  height: 10,
  marginLeft: 5,
});

const Header = () => {
  const logoURL =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <div>
      <StyledHeader>
        <Toolbar style={{ minHeight: 55 }}>
          <BoxComponent>
            <img src={logoURL} alt="logo" style={{ width: 75 }}></img>
            <Box style={{ display: 'flex' }}>
              <SubHeading>
                Explore&nbsp;
                <Box component="span" style={{ color: '#00ffff' }}>
                  Plus
                </Box>
              </SubHeading>
              <Plusimage src={subURL} alt="sublogo"></Plusimage>
            </Box>
          </BoxComponent>
          <SearchComp></SearchComp>
        </Toolbar>
      </StyledHeader>
    </div>
  );
};

export default Header;
