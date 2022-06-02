import { Box } from '@mui/material';
import { Dialog } from '@mui/material';
import React from 'react';

const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Dialog>
  );
};

export default LoginDialog;
