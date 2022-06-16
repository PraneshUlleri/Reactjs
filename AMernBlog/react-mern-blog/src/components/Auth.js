import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
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
          <Typography variant="h4" padding={3} textAlign="center">
            {isSignup ? 'Login' : 'Signup'}
          </Typography>
          {isSignup && <TextField margin="normal" placeholder="Name" />}
          <TextField margin="normal" placeholder="Email" type={'email'} />
          <TextField margin="normal" placeholder="Password" type={'password'} />
          <Button
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning"
          >
            Submit
          </Button>
          <Button
            sx={{ borderRadius: 3, marginTop: 3 }}
            onClick={() => setIsSignup(!isSignup)}
          >
            Change to {isSignup ? 'Login' : 'signup'}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
