import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();

  return (
    <div>
      <AppBar
        position="sticky"
        sx={{
          background:
            'linear-gradient(174deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
        }}
      >
        <Toolbar>
          <Typography variant="h4">bloggers corner</Typography>
          {isLoggedIn && (
            <Box display="flex" marginLeft={'auto'} marginRight={'autos'}>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                <Tab LinkComponent={Link} to="/blogs" label="All Blogs"></Tab>
                <Tab LinkComponent={Link} to="/myblogs " label="My Blogs"></Tab>
              </Tabs>
            </Box>
          )}
          <Box display="flex" marginLeft="auto">
            <Button
              sx={{ margin: 1, borderRadius: 10 }}
              LinkComponent={Link}
              to="/Login"
            >
              signup
            </Button>
            <Button sx={{ margin: 1, borderRadius: 10 }}> login</Button>
            {isLoggedIn && (
              <Button sx={{ margin: 1, borderRadius: 10 }}> logout</Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
