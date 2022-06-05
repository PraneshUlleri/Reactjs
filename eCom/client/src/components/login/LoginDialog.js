import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { styled } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Dialog } from '@mui/material';
import { maxHeight } from '@mui/system';
import { authenticateSignup } from '../../service.js/api';
import React from 'react';
import { useState } from 'react';

const Component = styled(Box)`
  height: 65vh;
  width: 90vh;
  display: flex;
`;
const Image = styled(Box)`
  background: #0055ff
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 35% no-repeat;

  height: 90%;
  width: 30%;
  padding: 45px 35px;
  color: white;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 2;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
text-transform:none; background: blue; color: white;
height: 40px, border-radius:2px, box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%)`;

const OtpButton = styled(Button)`
text-transform:none; 
background: white; 
height: 40px,
 border-radius:2px, 
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%)`;

const Text = styled(Typography)`
  font-size: 12px;
  text-align: center;
`;

const accountInitialValues = {
  login: {
    view: 'login',
    heading: 'Login ',
    subheading: 'balablabala',
  },
  signup: {
    view: 'signup',
    heading: ' signup',
    subheading: 'hehehahahrhahe',
  },
};

const signupInitialValues = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  mobile: '',
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const toggleSignUp = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const togglelogin = () => {
    toggleAccount(accountInitialValues.login);
  };

  const onInputChange = (e) => {
    console.log(e.target.value);
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: 'unset', maxHeight: 'unset' } }}
    >
      <Component>
        <Image>
          <Typography variant="h5">{account.heading}</Typography>
          <Typography style={{ marginTop: 20 }}>
            {account.subheading}
          </Typography>
        </Image>
        {account.view === 'login' ? (
          <Wrapper>
            <TextField
              id="emailnumber"
              label="enter email/mobile"
              variant="outlined"
            />
            <TextField
              id="password"
              label="enter password"
              variant="outlined"
            />
            <Typography>blablabla</Typography>
            <LoginButton>login</LoginButton>
            <Typography>Ok</Typography>
            <OtpButton>request otp</OtpButton>
            <Text onClick={() => toggleSignUp()}>New Sign up!</Text>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              name="fname"
              label="enter firstname"
              variant="outlined"
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              name="lname"
              label="enter lastname"
              onChange={(e) => onInputChange(e)}
              variant="outlined"
            />
            <TextField
              name="email"
              label="enter email"
              onChange={(e) => onInputChange(e)}
              variant="outlined"
            />{' '}
            <TextField
              name="password"
              label="enter password"
              onChange={(e) => onInputChange(e)}
              variant="outlined"
            />{' '}
            <TextField
              name="mobile"
              label="enter mobile"
              variant="outlined"
              onChange={(e) => onInputChange(e)}
            />
            <Text onClick={() => togglelogin()}>have an account? signin</Text>
            <Button onClick={() => signupUser()}> continue</Button>
          </Wrapper>
        )}
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
