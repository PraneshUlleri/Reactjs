import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

const Auth = () => {
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={'column'}
          alignItems="center"
          boxShadow="10px"
        >
          <Typography> Login</Typography>
          <TextField />
          <TextField />
          <TextField />
          <Button> Submit</Button>
          <Button>Change to signup</Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
