import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

const Auth = () => {
  return (
    <div>
      <form>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={'column'}
          alignItems="center"
          boxShadow="5px 10px 20px #ccc"
          padding={3}
          margin=" auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography padding={3} textAlign="center">
            Login
          </Typography>
          <TextField margin="normal" />
          <TextField margin="normal" />
          <TextField margin="normal" />
          <Button variant="contained" sx={{ borderRadius: 3 }} color="warning">
            Submit
          </Button>
          <Button sx={{ borderRadius: 3 }}>Change to signup</Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
