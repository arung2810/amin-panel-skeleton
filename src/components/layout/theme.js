import { createTheme } from '@mui/material/styles';

import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { AppBar } from '../common/AppBar';
import { Drawer } from '../common/Drawer';
import { Select } from '../common/Select';
import { Tabs } from '../common/Tabs';
import { Card } from '../common/Card';
import { Progress } from '../common/Progress';
import { Avatar } from '../common/Avatar';
import { AvatarGroup } from '../common/Avatar';


const getTheme = () =>
  createTheme({
    typography: {
      fontFamily: 'Inter',
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
      MuiAvatar: {
        ...Avatar,
      },
      MuiAvatarGroup: {
        ...AvatarGroup,
      },
      // MuiOutlinedInput: {
      //   ...Input,
      // },
    },
  });

export default getTheme;
