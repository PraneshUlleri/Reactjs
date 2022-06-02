import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import React from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import styled from '@emotion/styled';
import { useState } from 'react';
import LoginDialog from '../login/LoginDialog';

const CustomButton = () => {
  const [open, setOpen] = useState(false);
  const loginDialog = () => {
    setOpen(true);
  };
  return (
    <div>
      <Box style={{ display: 'flex', margin: '10' }}>
        <Button variant="contained" onClick={() => loginDialog()}>
          login
        </Button>
        <Typography>Seller&nbsp;</Typography>
        <Typography>More </Typography>
        <Box style={{ display: 'flex' }}>
          <ShoppingCartCheckoutIcon />
          <Typography>Cart</Typography>
        </Box>
        <LoginDialog open={open} setOpen={setOpen} />
      </Box>
    </div>
  );
};

export default CustomButton;
