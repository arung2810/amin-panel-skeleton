import { createTheme } from '@mui/material/styles';

import { Button } from '../common/Button';


const getTheme = () =>
  createTheme({
    typography: {
      fontFamily: 'Montserrat, sans-serif',
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            maxWidth: '1920px',
            width: '100%',
          },
        },
      },
      MuiButton: {
        ...Button,
      },
    },
  });

export default getTheme;
