import { PhotoCamera } from '@mui/icons-material';
import { Person } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import { Input } from '@mui/material';
import React from 'react';

const buttons = () => {
  return (
    <div>
      buttons{' '}
      <div>
        hellow!
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<Person />}
          onClick={() => {
            alert('clicked');
          }}
        >
          Contained
        </Button>
        <div>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
          <p></p>
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </div>
      </div>
    </div>
  );
};

export default buttons;
