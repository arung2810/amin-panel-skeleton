import React from 'react';
import Box from '@mui/material/Box';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const handleMenuClick = () => setIsSidebarOpen(v => !v);
  const handleClose = () => setIsSidebarOpen(false);
  return (
    <>
      <Header onMenuClick={handleMenuClick} />
      <Box sx={{ display: 'flex', padding: 2, flexGrow: 1, gap: '16px'}}>
        <Sidebar open={isSidebarOpen} onClose={handleClose} />
        <Box sx={{flexGrow: 1}}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
export default Layout;