import React from 'react';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import SidebarCollapsible from './SidebarCollapsible';
import { Outlet } from 'react-router-dom';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const isLargeScreen = useMediaQuery('(min-width:1200px)');

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <Header onMenuClick={handleMenuClick} />
      <Box sx={{ display: 'flex', padding: 2, flexGrow: 1, gap: '16px'}}>
        {isLargeScreen ? (
          <Sidebar />
        ) : (
          <SidebarCollapsible 
            open={isSidebarOpen} 
            onClose={handleClose}
          />
        )}
        <Box sx={{flexGrow: 1}}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export default Layout;