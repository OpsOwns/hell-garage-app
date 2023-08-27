import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './global.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.tsx';
import { CookiesProvider } from 'react-cookie';
import { theme } from './theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <AuthProvider>
        <CookiesProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </CookiesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
