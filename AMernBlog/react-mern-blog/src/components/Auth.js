import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authAction } from '../store';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isSignup, setIsSignup] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async (type = 'login') => {
    const res = await axios
      .post(`http://localhost:5000/user/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (isSignup) {
      sendRequest('signup')
        .then(() => dispatch(authAction.login()))
        .then(() => navigate('/blogs'))
        .then((data) => console.log(data));
    } else {
      sendRequest()
        .then(() => dispatch(authAction.login()))
        .then(() => navigate('/blogs'))
        .then((data) => console.log(data));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            {isSignup ? 'SignUp' : 'Login'}
          </Typography>
          {isSignup && (
            <TextField
              margin="normal"
              placeholder="Name"
              onChange={handleChange}
              name="name"
            />
          )}
          <TextField
            margin="normal"
            placeholder="Email"
            type={'email'}
            onChange={handleChange}
            name="email"
          />
          <TextField
            margin="normal"
            placeholder="Password"
            type={'password'}
            onChange={handleChange}
            name="password"
          />

          <Button
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning"
            type="submit"
          >
            Submit
          </Button>

          <Button
            sx={{ borderRadius: 3, marginTop: 3 }}
            onClick={() => setIsSignup(!isSignup)}
          >
            Change to {isSignup ? 'Login' : 'Sign Up'}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
