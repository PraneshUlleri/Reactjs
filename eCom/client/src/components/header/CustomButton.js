import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import React from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import styled from '@emotion/styled';

const CustomButton = () => {
  return (
    <div>
      <Box style={{ display: 'flex', margin: '10' }}>
        <Button variant="contained">login</Button>
        <Typography>Seller&nbsp;</Typography>
        <Typography>More </Typography>
        <Box style={{ display: 'flex' }}>
          <ShoppingCartCheckoutIcon />
          <Typography>Cart</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default CustomButton;
