import { Dashboard, Inventory, PeopleAlt, PieChart } from '@mui/icons-material';
import { List, ListItem, ListItemIcon } from '@mui/material';
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div>
      <List component="nav">
        <ListItem button>
          <ListItemIcon className="flex items-center justify-center p-2 !min-w-0">
            <Dashboard />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon className="flex items-center justify-center p-2 !min-w-0">
            <Inventory />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon className="flex items-center justify-center p-2 !min-w-0">
            <PieChart />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon className="flex items-center justify-center p-2 !min-w-0">
            <PeopleAlt />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
