// src/components/Sidebar.tsx
import { AccountCircle, Dashboard } from '@mui/icons-material';
import { List, ListItem, ListItemIcon } from '@mui/material';
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div>
     
      <List component="nav">
        <ListItem button>
          <ListItemIcon className='flex items-center justify-center p-2 !min-w-0'>
            <Dashboard />
          </ListItemIcon>
     </ListItem>
        <ListItem button>
          <ListItemIcon className='flex items-center justify-center p-2 !min-w-0'>
            <AccountCircle />
          </ListItemIcon>
          
        </ListItem>
        <ListItem button>
         
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
