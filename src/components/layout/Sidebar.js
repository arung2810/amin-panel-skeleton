import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { NavLink } from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '../../assets/images/icons/Dashboard';
import Settings from '../../assets/images/icons/SettingsIcon';
import Downlaod from '../../assets/images/icons/Download';
import Training from '../../assets/images/icons/Training';
import Webinar from '../../assets/images/icons/Webinar';

// const DRAWER_WIDTH = 240;
const DRAWER_WIDTH = 130;

const navItems = [
  { label: 'Dashboard', icon: DashboardIcon, path: '/dashboard' },
  { label: 'My Training', icon: Training, path: '/training' },
  { label: 'Digital Downloads', icon: Downlaod, path: '/downloads' },
  { label: 'Webinars', icon: Webinar, path: '/webinars' },
  { label: 'Settings', icon: Settings, path: '/settings' },
];

export default function Sidebar() {
  const width = DRAWER_WIDTH;

  return (
    <Drawer
      variant="permanent"
      open
      PaperProps={{
        className: 'sidebar-inner',
        sx: (theme) => ({
          width,
          overflowX: 'hidden',
          zIndex: theme.zIndex.appBar - 1,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
        }),
      }}
      sx={{
        width,
        flexShrink: 0,
      }}
      className='menu-sidebar'
    >
      <List className='sidebar-list'>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ display: 'block' }}>
            <NavLink
              to={item.path}
              style={{ textDecoration: 'none', color: 'inherit' }}
              className={({ isActive }) => isActive ? 'active-sidebar-item' : ''}
            >
              {({ isActive }) => (
                <ListItemButton selected={isActive}>
                  <ListItemIcon sx={{ minWidth: 0 }} >
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText className='sidebar-text' primary={item.label}/>
                </ListItemButton>
              )}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
