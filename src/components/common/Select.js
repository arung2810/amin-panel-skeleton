import ArrowDown from '../../assets/images/icons/ArrowDown';

export const Select = {
  defaultProps: {
    IconComponent: ArrowDown, // Custom arrow icon
  },
  styleOverrides: {
    root: {
      backgroundColor: 'var(--white-color)',
      borderRadius: '16px',
      padding: '4px 16px',
      border: '1px solid var(--select-border-color)',
      transition: 'border-color 0.2s ease-in-out',
      fontSize: '16px',
      '&:hover': {
        borderColor: 'var(--primary-color)',
      },
      '&.Mui-focused': {
        borderColor: 'var(--primary-color)',
      },
      '& fieldset': {
        display: 'none',
      },
    },
    icon: {
      color: 'var(--grey-color)',
      right: 12,
    },
    select: {
      padding: '10px 0',
      minHeight: 'unset',
      display: 'flex',
      alignItems: 'center',
      fontSize: '16px',
      backgroundColor: 'transparent',
    },
  },
};
