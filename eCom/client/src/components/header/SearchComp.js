import React from 'react';
import { InputBase } from '@mui/material';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = styled(Box)`
  background: #ddd;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  height: 50%;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
`;

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 2px;
`;
const SearchComp = () => {
  return (
    <SearchBox style={{ display: 'flex' }}>
      <InputSearchBase placeholder="search your products"></InputSearchBase>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchBox>
  );
};

export default SearchComp;
