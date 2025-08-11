import React from 'react';
import Box from '@mui/material/Box';
import Header from './Header'
import Sidebar from './Sidebar'


import { Outlet } from 'react-router-dom';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const handleMenuClick = () => setIsSidebarOpen((o) => !o);


  return (
    <>
     <Header onMenuClick={handleMenuClick} />
    <Box sx={{ display: 'flex', padding: 2}}>
     <Sidebar open={isSidebarOpen} />
      <Outlet />
    </Box>
    </>
  );
}

export default Dashboard;
