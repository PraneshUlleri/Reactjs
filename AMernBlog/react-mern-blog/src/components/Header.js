import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4">BlogsApp</Typography>
        <Box>
          <Button color="warning ">Login</Button>
          <Button color="warning">Signup</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
