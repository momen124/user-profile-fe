import { CameraAlt } from '@mui/icons-material';
import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SideNav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 border shadow-lg rounded-lg">
      <div className="relative w-24 h-24 max-w-xs mx-auto mb-4 border rounded-full overflow-hidden">
        <img
          src="https://rehabconceptspt.com/wp-content/uploads/2016/06/placeholder-640-square.jpg"
          alt="Profile"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute right-2 bottom-2 flex items-center justify-center z-50 cursor-pointer bg-gray-300 rounded-full p-1">
          <input
            type="file"
            id="file-input"
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          />
          <label
            htmlFor="file-input"
            className="flex items-center justify-center p-1 rounded-full bg-gray-300 text-white hover:bg-gray-600"
          >
            <CameraAlt className='w-3 h-3' />
          </label>
        </div>
      </div>

      <div className="text-center mb-4">
        <Typography variant="h6" component="div">
          John Smith
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Senior Product Manager
        </Typography>
      </div>

      <Divider className="my-4" />

      <List component="nav">
        <ListItem button onClick={() => navigate('/')}>
          <ListItemText primary="Personal Information" />
        </ListItem>
        <ListItem button onClick={() => navigate('/financial-info')}>
          <ListItemText primary="Financial Information" />
        </ListItem>
      </List>
    </div>
  );
};

export default SideNav;
