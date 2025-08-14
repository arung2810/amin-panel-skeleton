// src/components/layout/SidebarCollapsible.js
import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import UserInfo from './UserInfo';

import Logo from '../../assets/images/logo.png';
import DashboardIcon from '../../assets/images/icons/Dashboard';
import Settings from '../../assets/images/icons/SettingsIcon';
import Downlaod from '../../assets/images/icons/Download';
import Training from '../../assets/images/icons/Training';
import Webinar from '../../assets/images/icons/Webinar';

const DRAWER_WIDTH = 240;

const navItems = [
  { label: 'Dashboard', icon: DashboardIcon, path: '/dashboard' },
  { label: 'My Training', icon: Training, path: '/training' },
  { label: 'Digital Downloads', icon: Downlaod, path: '/downloads' },
  { label: 'Webinars', icon: Webinar, path: '/webinars' },
  { label: 'Settings', icon: Settings, path: '/settings' },
];

export default function SidebarCollapsible({ open, onClose }) {
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, // Better mobile performance
      }}
      PaperProps={{
        sx: {
          width: DRAWER_WIDTH,
          zIndex: (theme) => theme.zIndex.appBar - 1,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        },
        className: `sidebar-inner${open ? ' active' : ''}`
      }}
      sx={{
        display: { xs: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
      }}
      className={`menu-sidebar${open ? ' active' : ''}`}
    >
      <img src={Logo} alt="LOGO" className='sidebar-logo' />
      <List className='sidebar-list'>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <NavLink
              to={item.path}
              style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
              className={({ isActive }) => isActive ? 'active-sidebar-item' : ''}
              onClick={onClose} // Close drawer when navigating
            >
              {({ isActive }) => (
                <ListItemButton selected={isActive}>
                  <ListItemIcon sx={{ minWidth: 0, mr: 2}}>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.label} className='sidebar-text' />
                </ListItemButton>
              )}
            </NavLink>
          </ListItem>
        ))}
      </List>
      <UserInfo />
    </Drawer>
  );
}
