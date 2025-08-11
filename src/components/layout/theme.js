import { createTheme } from '@mui/material/styles';
import { palette } from './color';

const getTheme = (mode = 'light') =>
  createTheme({
    palette: palette[mode], // ⬅ direct import from colors.js

    typography: {
      fontFamily: 'Montserrat, sans-serif',
    },

    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'primary' },
            style: ({ theme }) => ({
              backgroundColor: theme.palette.primary.main,
              border: `1px solid ${theme.palette.primary.main}`,
              color: theme.palette.primary.contrastText,
            }),
          },
          {
            props: { variant: 'secondary' },
            style: ({ theme }) => ({
              backgroundColor: 'transparent',
              border: `1px solid ${theme.palette.primary.main}`,
              color: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: `${theme.palette.primary.main}1A`, 
              },
            }),
          },
        ],
      },
    },
  });

export default getTheme;
