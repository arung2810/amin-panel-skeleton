import { createTheme } from '@mui/material/styles';

import { Button } from '../common/Button';
import { Input } from '../common/Input';


const getTheme = () =>
  createTheme({
    typography: {
      fontFamily: 'Inter',
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
      MuiTextField: {
        ...Input,
      },
      // MuiOutlinedInput: {
      //   ...Input,
      // },
    },
  });

export default getTheme;
