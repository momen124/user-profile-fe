// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Breadcrumbs, Link } from '@mui/material';
import { Home, Notifications, AccountCircle, Settings, MarkAsUnread, Markunread } from '@mui/icons-material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Breadcrumbs aria-label="breadcrumb" style={{ flexGrow: 1 }}>
          <Link color="inherit" href="/" onClick={(e) => e.preventDefault()}>
            <Home />
          </Link>
          <Link color="inherit" href="/dashboard" onClick={(e) => e.preventDefault()}>
            Dashboard
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
