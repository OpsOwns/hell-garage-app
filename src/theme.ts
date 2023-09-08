import { createTheme } from '@mui/material';
import { plPL } from '@mui/x-date-pickers/locales';

export const theme = createTheme(
  {
    palette: {
      mode: 'light',
      primary: {
        light: '#6573c3',
        main: '#3f51b5',
        dark: '#2c387e',
      },
      secondary: {
        dark: '#b26500',
        main: '#ff9100',
        light: '#ffa733',
      },
      success: {
        main: '#4CAF50',
      },
      warning: {
        main: '#FF5722',
      },
      error: {
        main: '#D32F2F',
      },
      common: {
        black: '#000',
        white: '#fff',
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
  },
  plPL
);

export default theme;
