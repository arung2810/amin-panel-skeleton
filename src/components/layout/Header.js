import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import Notification from '../../assets/images/icons/Notificaiton';
import Info from '../../assets/images/icons/QuestionsIcon';
import MenuIcon from '../../assets/images/icons/Menu';
import UserInfo from './UserInfo';

function HeaderBar({ onMenuClick }) {
  return (
    <AppBar position="static" className='appbar'>
      <Toolbar disableGutters>
        <Box className="appbar-left" sx={{ flexGrow: 1 }}>
          <IconButton className='appbar-menu' onClick={onMenuClick} role="button" size="large" aria-label="Toggle sidebar" sx={{display: {lg: 'none'}}}>
            <MenuIcon />
          </IconButton>
          <img src={Logo} alt="LOGO" className='appbar-logo' />
        </Box>
        <Box className="appbar-right">
          <IconButton className='appbar-menu' role="button" size="large">
            <Info />
          </IconButton>
          <IconButton className='appbar-menu' role="button" size="large">
            <Notification />
          </IconButton>
          <UserInfo />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default HeaderBar;
