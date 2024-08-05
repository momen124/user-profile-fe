import { CameraAlt } from '@mui/icons-material';
import { List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SideNav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 border shadow-lg rounded-lg">
      <div className="relative w-full max-w-xs mx-auto mb-4 border rounded-xl overflow-hidden">
        <img
          src="https://rehabconceptspt.com/wp-content/uploads/2016/06/placeholder-640-square.jpg"
          alt="Profile"
          className="w-full h-auto object-cover object-center"
        />

        <div className="absolute right-2 bottom-2 flex items-center justify-center z-50 !cursor-pointer">
          <input
            type="file"
            id="file-input"
            className="absolute top-0 left-0 w-full h-full opacity-0"
          />
          <label
            htmlFor="file-input"
            className="flex items-center justify-center p-1 rounded-md bg-gray-300 text-white hover:bg-gray-600"
          >
            <CameraAlt className='w-4 h-4' />
          </label>
        </div>
      </div>

      <List component="nav">
        <ListItem button onClick={() => navigate('/user-profile')}>
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
