// src/components/layout/SidebarCollapsible.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '../../assets/images/icons/Menu';
import DashboardIcon from '../../assets/images/icons/Dashboard';
import Settings from '../../assets/images/icons/SettingsIcon';
import Downlaod from '../../assets/images/icons/Download';
import Training from '../../assets/images/icons/Training';
import Webinar from '../../assets/images/icons/Webinar';

const DRAWER_WIDTH = 200;
const COLLAPSED_WIDTH = 64;
const navItems = [
  { label: 'Dashboard', icon: DashboardIcon, path: '/dashboard' },
  { label: 'My Training', icon: Training, path: '/training' },
  { label: 'Digital Downloads', icon: Downlaod, path: '/downloads' },
  { label: 'Webinars', icon: Webinar, path: '/webinars' },
  { label: 'Settings', icon: Settings, path: '/settings' },
];

export default function SidebarCollapsible() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Drawer
      variant="permanent"
      open
      className="menu-sidebar"
      PaperProps={{
        className: 'sidebar-inner',
        sx: {
          width: collapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH,
          transition: theme => theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
          overflowX: 'hidden',
        },
      }}
      sx={{
        width: collapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: collapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH },
      }}
    >
      <IconButton onClick={() => setCollapsed(v => !v)} size="small" sx={{ m: 1, ml: 'auto' }}>
        <MenuIcon />
      </IconButton>
      <List className="sidebar-list">
        {navItems.map(({ label, icon: Icon, path }) => (
          <ListItem key={label} disablePadding sx={{ display: 'block' }}>
            <NavLink to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
              {({ isActive }) => (
                <ListItemButton selected={isActive} sx={{ px: 2 }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: collapsed ? 0 : 2, justifyContent: 'flex-start' }}>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    className='sidebar-text'
                    sx={{
                      opacity: collapsed ? 0 : 1,
                      maxWidth: collapsed ? 0 : 120,
                      transition: 'opacity 0.2s, max-width 0.2s',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      ml: collapsed ? 0 : 1,
                    }}
                  />
                </ListItemButton>
              )}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
