import { createTheme } from '@mui/material/styles';

import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { AppBar } from '../common/AppBar';
import { Drawer } from '../common/Drawer';


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
      MuiAppBar: {
        ...AppBar,
      },
      MuiDrawer: {
        ...Drawer,
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
