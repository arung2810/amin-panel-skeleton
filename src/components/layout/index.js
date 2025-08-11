import React from 'react';
import ReactDOM from 'react-dom/client';

import { Outlet } from 'react-router-dom';

function AppLayout() {

  return (
    <>
          <Outlet />
    </>
  );
}

// export default AppLayout;
ReactDOM.createRoot(document.getElementById('root')).render(<AppLayout />);
