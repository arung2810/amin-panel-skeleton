import { createTheme } from '@mui/material/styles';

import { Button } from '../common/Button';
<<<<<<< Updated upstream
=======
import { Input } from '../common/Input';
import { AppBar } from '../common/AppBar';
import { Drawer } from '../common/Drawer';
import { Select } from '../common/Select';
import { Tabs } from '../common/Tabs';
import { Card } from '../common/Card';
import { Progress } from '../common/Progress';
>>>>>>> Stashed changes


const getTheme = () =>
  createTheme({
    typography: {
      fontFamily: 'Montserrat, sans-serif',
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1537,
      },
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
<<<<<<< Updated upstream
=======
      MuiAppBar: {
        ...AppBar,
      },
      MuiDrawer: {
        ...Drawer,
      },
      MuiTextField: {
        ...Input,
      },
      MuiSelect: {
        ...Select,
      },
      MuiTabs: {
        ...Tabs,
      },
      MuiCard: {
        ...Card,
      },
      MuiLinearProgress: {
        ...Progress,
      },
      // MuiOutlinedInput: {
      //   ...Input,
      // },
>>>>>>> Stashed changes
    },
  });

export default getTheme;
