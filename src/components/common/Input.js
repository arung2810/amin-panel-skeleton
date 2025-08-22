export const Input = {
  styleOverrides: {
    root: {
      '& .MuiOutlinedInput-root': {
        backgroundColor: 'var(--white-color)',
        borderRadius: '16px',
        padding: '4px 16px',
        border: '1px solid var(--input-border-color)',
        transition: 'border-color 0.2s ease-in-out',
        fontSize: '16px',
        '& fieldset': {
          border: 'none',
        },
        '&:hover': {
          borderColor: 'var(--primary-color)',
        },
        '&.Mui-focused': {
          borderColor: 'var(--primary-color)',
        },
        '&.Mui-error': {
          // borderColor: 'var(--error-color, #f44336)',
        },
      },
      '& .MuiInputBase-input': {
        padding: '10px 0',
        '::placeholder': {
          fontSize: '16px',
          color: 'var(--grey-color)',
          opacity: 1,
        },
      },
      '& .MuiInputLabel-root': {
        display: 'none',
        fontSize: '15px',
        color: 'var(--text-color)',
      },
      '& .MuiInputBase-multiline': {
        padding: '16px',
        background: 'transparent',
        border: '1px solid #DDDDDD',
        boxShadow: '0 1px 1px rgba(25, 33, 61, 0.04)',
        borderRadius: '16px',
      },
    },
    adornment: {
      color: 'var(--grey-color)',
    },
  },
};
