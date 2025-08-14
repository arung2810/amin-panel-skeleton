export const Card = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: 'var(--body-bg-color)',
      border: '1px solid var(--select-border-color)',
      boxShadow: '0px 4px 22px rgba(0, 0, 0, 0.1)',
      borderRadius: '16px',
      '.MuiCardContent-root':{
        padding: '12px 12px 16px',
        [theme.breakpoints.down('md')]: {
          padding: '12px',
        },
      },
      '.MuiCardActions-root':{
        padding: '16px 0 12px',
        marginInline: '12px',
        borderTop: '1px solid var(--border-color)',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
          borderRadius: '8px',
          padding: '10px 0',
          marginInline: '10px',
        },
      },
    }),
  },
};
