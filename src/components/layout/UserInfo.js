import * as React from 'react';
import { Stack, IconButton, Typography, Menu, MenuItem, Tooltip, Avatar } from '@mui/material';
import Avatar_Img from '../../assets/images/user.png';
import ArrowDown from '../../assets/images/icons/ArrowDown';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function UserInfo({ onMenuClick }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton className='appbar-userinfo' onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={Avatar_Img} className='avatar-img'/>
          <Stack>
            <Typography className='userinfo-name' variant="h6">Bobby Puim</Typography>
            <Typography className='userinfo-desc' variant="body2" color="initial">Learner</Typography>
          </Stack>
          <ArrowDown />
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
    </>
  );
}
export default UserInfo;
