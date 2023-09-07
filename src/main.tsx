import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './global.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.tsx';
import { CookiesProvider } from 'react-cookie';
import { theme } from './theme.ts';
import { LocalizationProvider, plPL } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <AuthProvider>
        <CookiesProvider>
          <ThemeProvider theme={theme}>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              localeText={
                plPL.components.MuiLocalizationProvider.defaultProps.localeText
              }
            >
              <App />
            </LocalizationProvider>
          </ThemeProvider>
        </CookiesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
