import { Box } from '@mui/material';
import React from 'react';

const RightBar = () => {
  return (
    <Box
      bgcolor="skyblue"
      flex={2}
      p={0.5}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      RightBar
    </Box>
  );
};

export default RightBar;
