import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
export const theme = createTheme({
    type: 'light',
    palette: {
        primary: {
            main: '#0052cc',
        },
        secondary: {
            main: '#edf2ff',
        }
    },
    background: {
        default: '#f5f3f3',
    },
    components: {
        MuiAppBar: {
          styleOverrides: {
            colorPrimary: {
             
            }
          }
        }
      }
})