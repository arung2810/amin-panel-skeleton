import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import getTheme from './theme';

import { Outlet } from 'react-router-dom';

function AppLayout() {

  return (
    <>
       <ThemeProvider heme={getTheme('light')}>
            <CssBaseline />
            <Button variant='primary'>Sign In</Button>
            <Outlet />
        </ThemeProvider>
      
    </>
  );
}

// export default AppLayout;
ReactDOM.createRoot(document.getElementById('root')).render(<AppLayout />);
