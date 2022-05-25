import { Box } from '@mui/material';
import React from 'react';

import { AvatarGroup } from '@mui/material';
import { Avatar } from '@mui/material';

const RightBar = () => {
  return (
    <Box
      bgcolor="skyblue"
      flex={2}
      p={0.5}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <Box position="fixed">
        Online Friends:
        <AvatarGroup total={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default RightBar;
