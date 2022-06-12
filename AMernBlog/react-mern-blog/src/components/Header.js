import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <div>
      <AppBar
        position="sticky"
        sx={{
          background:
            'linear-gradient(174deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
        }}
      >
        <Toolbar>
          <Typography variant="h4">hello</Typography>
          <Box display="flex" marginLeft="auto">
            <Button variant="contained " sx={{ margin: 1, borderRadius: 10 }}>
              signup
            </Button>
            <Button sx={{ margin: 1, borderRadius: 10 }}> login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
