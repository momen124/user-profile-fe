// src/components/Sidebar.tsx
import React from 'react';
import { List, ListItem, ListItemIcon} from '@mui/material';
import { Dashboard, AccountCircle } from '@mui/icons-material';

const Sidebar: React.FC = () => {
  return (
    <div className="p-4">
     
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
     </ListItem>
        <ListItem button>
          <ListItemIcon>
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
