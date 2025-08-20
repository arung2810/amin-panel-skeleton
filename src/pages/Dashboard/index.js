import React, { useState } from 'react';
import SidebarCollapsible from '../../components/layout/SidebarCollapsible';

function Dashboard() {
  const [open, setOpen] = useState(true); // Set to true to show sidebar by default

  return (
    <>
      <SidebarCollapsible open={open} onClose={() => setOpen(false)} />
      {/* Add a button to open it again if you want */}
    </>
  );
}

export default Dashboard;
