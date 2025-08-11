import * as React from 'react';
import { AppBar, Box, Stack, Toolbar, IconButton, Typography, Menu, MenuItem, Tooltip, Avatar } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import Notification from '../../assets/images/notificaiton.svg';
import Info from '../../assets/images/info.svg';
import Avatar_Img from '../../assets/images/user.png';
import arrowDown from '../../assets/images/arrowDown.svg';
import MenuIcon from '../../assets/images/menu.svg';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function HeaderBar({ onMenuClick }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className='appbar'>
        <Toolbar disableGutters>
          <Box className="appbar-left" sx={{ flexGrow: 1 }}>
            <img src={Logo} alt="LOGO" className='appbar-logo' />
            <img src={MenuIcon} alt="menu" className='appbar-menu' onClick={onMenuClick} role="button" aria-label="Toggle sidebar" />
          </Box>
          <Box className="appbar-right">
              <img src={Info} alt="Info" />
              <img src={Notification} alt="Notification" />
            <Tooltip title="Open settings">
              <IconButton className='appbar-userinfo' onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={Avatar_Img} className='avatar-img'/>
                <Stack sx={{ display: {xs: 'none', sm: 'block'} }}>
                  <Typography className='userinfo-name' variant="h6">Bobby Puim</Typography>
                  <Typography className='userinfo-desc' variant="body2" color="initial">Learner</Typography>
                </Stack>
                <img src={arrowDown} alt='arrowdown' />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
    </AppBar>
  );
}
export default HeaderBar;
