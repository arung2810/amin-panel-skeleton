import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery, ListItemIcon, ListItemText, List, ListItemButton, ListItem, Drawer } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import UserInfo from './UserInfo';
import DashboardIcon from '../../assets/images/icons/Dashboard';
import Settings from '../../assets/images/icons/SettingsIcon';
import Downlaod from '../../assets/images/icons/Download';
import Training from '../../assets/images/icons/Training';
import Webinar from '../../assets/images/icons/Webinar';

const DRAWER_WIDTH_DESKTOP = 130;
const DRAWER_WIDTH_MOBILE = 240;
const navItems = [
  { label: 'Dashboard', icon: DashboardIcon, path: '/dashboard' },
  { label: 'My Training', icon: Training, path: '/training' },
  { label: 'Digital Downloads', icon: Downlaod, path: '/downloads' },
  { label: 'Webinars', icon: Webinar, path: '/webinars' },
  { label: 'Settings', icon: Settings, path: '/settings' },
];

export default function Sidebar({ open, onClose }) {
  const isLargeScreen = useMediaQuery('(min-width:1200px)');
  const width = isLargeScreen ? DRAWER_WIDTH_DESKTOP : DRAWER_WIDTH_MOBILE;

  return (
    <Drawer
      variant={isLargeScreen ? 'permanent' : 'temporary'}
      open={isLargeScreen ? true : open}
      onClose={isLargeScreen ? undefined : onClose}
      ModalProps={!isLargeScreen ? { keepMounted: true } : undefined}
      PaperProps={{
        className: 'sidebar-inner',
        sx: theme => ({
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
        display: { xs: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width },
      }}
      className={`menu-sidebar${!isLargeScreen && open ? ' active' : ''}`}
    >
      {!isLargeScreen && <img src={Logo} alt="LOGO" className="sidebar-logo" />}
      <List className="sidebar-list">
        {navItems.map(item => (
          <ListItem key={item.label} disablePadding sx={{ display: 'block' }}>
            <NavLink
              to={item.path}
              style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
              className={({ isActive }) => (isActive ? 'active-sidebar-item' : '')}
              onClick={!isLargeScreen ? onClose : undefined}
            >
              {({ isActive }) => (
                <ListItemButton selected={isActive}>
                  <ListItemIcon sx={{ minWidth: 0, mr: !isLargeScreen ? 2 : 0 }}>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText className="sidebar-text" primary={item.label} />
                </ListItemButton>
              )}
            </NavLink>
          </ListItem>
        ))}
      </List>
      {!isLargeScreen && <UserInfo />}
    </Drawer>
  );
}
