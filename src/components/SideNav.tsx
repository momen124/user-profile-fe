import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CameraAlt from '@mui/icons-material/CameraAlt';

const SideNav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 border shadow-lg rounded-lg">
      <List component="nav">
        <div className="relative overflow-hidden w-40 h-40 mx-auto mb-4 border rounded-lg">
          <img src="/path/to/your/image.jpg" alt="Profile" className="w-full h-full object-cover" />
          <Button
            className="absolute bg-gray-300 right-2 bottom-2 flex items-center justify-center"
            variant="contained"
            component="label"
          >
            <CameraAlt />
            <input type="file" hidden />
          </Button>
        </div>
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
