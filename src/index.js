
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import getTheme from './components/layout/theme';
import { setTheme, toggleTheme } from './utils/theme';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../src/styles/global.scss';
import '../src/styles/authentication.scss';
import '../src/styles/layout.scss';
import '../src/styles/training.scss';

// Set default theme to light on app load
setTheme('light');
// Example: Add a theme toggle button for demonstration
if (typeof window !== 'undefined') {
  window.toggleTheme = toggleTheme;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={getTheme('light')}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
