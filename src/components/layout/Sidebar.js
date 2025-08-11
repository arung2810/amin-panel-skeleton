import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '../../assets/images/dashboard.svg';
import SettingsIcon from '../../assets/images/settings.svg';

const DRAWER_WIDTH = 240;
const COLLAPSED_WIDTH = 64;

const navItems = [
  { label: 'Dashboard', icon: DashboardIcon },
  { label: 'Settings', icon: SettingsIcon },
];

export default function Sidebar({ open = true }) {
  const width = open ? DRAWER_WIDTH : COLLAPSED_WIDTH;
  const [activeIndex, setActiveIndex] = React.useState(0);

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
        '& .MuiDrawer-paper': { width },
      }}
      className='menu-sidebar'
    >
      <List className='sidebar-list'>
        {navItems.map((item, idx) => (
          <ListItem key={item.label} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              selected={idx === activeIndex}
              onClick={() => setActiveIndex(idx)}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <img src={item.icon} alt={item.label} width={24} height={24} />
              </ListItemIcon>
              <ListItemText className='sidebar-text' primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
