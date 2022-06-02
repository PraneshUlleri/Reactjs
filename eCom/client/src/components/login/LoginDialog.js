import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { styled } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Dialog } from '@mui/material';
import { maxHeight } from '@mui/system';

import React from 'react';

const Component = styled(Box)`
  height: 80vh;
  width: 90vh;
  display: flex;
`;
const Image = styled(Box)`
  background: #0055ff
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 35% no-repeat;

  height: 100%;
  width: 40%;
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

const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: 'unset', maxHeight: 'unset' } }}
    >
      <Component>
        <Image>
          <Typography variant="h5">Login</Typography>
          <Typography style={{ marginTop: 20 }}>blablabla</Typography>
        </Image>

        <Wrapper>
          <TextField
            id="emailnumber"
            label="enter email/mobile"
            variant="outlined"
          />
          <TextField id="password" label="enter password" variant="outlined" />
          <Typography>blablabla</Typography>
          <LoginButton>login</LoginButton>
          <Typography>Ok</Typography>
          <OtpButton>request otp</OtpButton>
          <Text>New Sign up!</Text>
        </Wrapper>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
