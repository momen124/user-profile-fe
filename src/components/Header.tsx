import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Breadcrumbs, Link, ListItemIcon } from '@mui/material';
import { Home, Notifications, Settings, Markunread, AccountCircle } from '@mui/icons-material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Breadcrumbs aria-label="breadcrumb" style={{ flexGrow: 1 }} separator=">">
          <Link color="inherit" href="/" onClick={(e) => e.preventDefault()}>
            Dashboard
          </Link>
          <Link color="inherit" href="/hr-manage" onClick={(e) => e.preventDefault()}>
            HR manage
          </Link>
          <Link color="inherit" href="/employees" onClick={(e) => e.preventDefault()}>
            Employees
          </Link>
          <Typography color="textPrimary">John Smith Profile</Typography>
        </Breadcrumbs>
        <IconButton color="inherit">
          <Notifications />
        </IconButton>
        <IconButton color="inherit">
          <Markunread />
        </IconButton>
        <IconButton color="inherit">
          <Settings />
        </IconButton>
        <ListItemIcon className='flex items-center justify-center p-2 !min-w-0'>
          <AccountCircle />
        </ListItemIcon>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
