export const Tabs = {
  styleOverrides: {
    root: {
      minHeight: 40,
      padding: '0',
      backgroundColor: 'var(--light-primary-color)',
      borderRadius: '12px',
      display: 'inline-flex',
      gap: '0',
    },
    indicator: {
      display: 'none',
    },
    flexContainer: {
      gap: '4px',
    },

    scroller: ({ theme }) => ({
      '& .MuiTab-root': {
        minHeight: 'auto',
        padding: '16px 24px',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 700,
        gap: '16px',
        borderRadius: '16px',
        color: 'var(--dark-color)',
        backgroundColor: 'transparent',
        transition: 'all 0.2s ease-in-out',
        [theme.breakpoints.down('md')]: {
          padding: '12px 16px',
          fontSize: '14px',
        },
        '&:hover': {
          backgroundColor: 'var(--dark-color)',
          color: 'var(--white-color)',
        },

        '&.Mui-selected': {
          backgroundColor: 'var(--dark-color)',
          color: 'var(--white-color)',
        },
      },
    }),
    scrollButtons: {
      '& .MuiTabs-root': {
        backgroundColor: 'transparent',
        borderRadius: '8px',
        padding: '2px',
        '& .MuiTab-root': {
          minHeight: 28,
          fontSize: '13px',
          borderRadius: '6px',
        },
      },
    },
  },
};