import AppRouter from './routes';

import './assets/fonts/fonts.css';


import { useEffect, useState } from 'react';
import { setTheme, toggleTheme } from './utils/theme';
import { Button } from '@mui/material';



function App() {
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    setTheme(themeMode);
  }, [themeMode]);

  const handleToggle = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    toggleTheme();
  };

  return (
    <>
      {/* <Button onClick={handleToggle} variant="contained" sx={{ position: 'fixed', top: 16, right: 16, zIndex: 9999 }}>
        Toggle Theme
      </Button> */}
      <AppRouter />
    </>
  );
}

export default App;
