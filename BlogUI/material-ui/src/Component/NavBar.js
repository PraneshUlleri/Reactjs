import { Mail } from '@mui/icons-material';
import { NotificationAdd } from '@mui/icons-material';
import { PetsRounded } from '@mui/icons-material';
import { Toolbar, styled } from '@mui/material';
import { Avatar } from '@mui/material';
import { Menu } from '@mui/material';
import { MenuItem } from '@mui/material';
import { InputBase } from '@mui/material';
import { Badge } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { AppBar } from '@mui/material';
import React, { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')({
  backgroundColor: 'White',
  padding: '0 10px',
  borderRadius: 5,
  width: '10r em',
});

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'Block' } }}>
          LAMA
        </Typography>
        <PetsRounded
          sx={{ display: { xs: 'block', sm: 'none' } }}
        ></PetsRounded>
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="secondary">
            <Mail color="white" />
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <NotificationAdd color="white" />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} />
        </Icons>
        <UserBox>
          <Avatar sx={{ width: 20, height: 20 }} />
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
