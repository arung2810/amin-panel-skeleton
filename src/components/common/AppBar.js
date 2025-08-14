export const AppBar = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: '#ffffff',
      boxShadow: '0px 0px 22px rgba(71, 120, 245, 0.1)',
      padding: '16px 26px',
      [theme.breakpoints.down('md')]: {
        padding: '14px 20px',
      },
      '& .MuiToolbar-root': {
        minHeight: 'auto',
      },
    }),
  },
};
